---
title: 更多便捷
---

# 更多方便的API

得益于 yansongda/pay 的基础架构和良好的插件机制，
您可以自有的使用任何内置插件和自定义插件调用支付宝的任何 API。

诸如签名、API调用、解密、验签、解包等基础插件已经内置在 Pay 中，
您可以使用 `Pay::alipay()->mergeCommonPlugins(array $plugins)` 来获取调用 API 所必须的常用插件

下面将逐步介绍插件的使用方式

## 一、自定义插件

首先，您需要自定义插件，此插件只需要关注业务逻辑即可，不需要考虑签名、验签等操作。

其实大家经常使用的 「网站支付」「小程序支付」「查询订单」 等均属于自定义插件，只不过这类插件已经内置在 yansongda/pay 中了，不需要您额外开发即可使用。

以 查询订单 插件为例

```php
<?php

declare(strict_types=1);

namespace Yansongda\Pay\Plugin\Alipay\Trade;

use Yansongda\Pay\Plugin\Alipay\GeneralPlugin;

class QueryPlugin extends GeneralPlugin
{
    protected function getMethod(): string
    {
        return 'alipay.trade.query';
    }
}
```

```php
<?php

declare(strict_types=1);

namespace Yansongda\Pay\Plugin\Alipay;

use Closure;
use Yansongda\Pay\Contract\PluginInterface;
use Yansongda\Pay\Logger;
use Yansongda\Pay\Rocket;

abstract class GeneralPlugin implements PluginInterface
{
    public function assembly(Rocket $rocket, Closure $next): Rocket
    {
        Logger::info('[alipay][GeneralPlugin] 通用插件开始装载', ['rocket' => $rocket]);

        $rocket->mergePayload([
            'method' => $this->getMethod(),
            'biz_content' => $rocket->getParams(),
        ]);

        Logger::info('[alipay][GeneralPlugin] 通用插件装载完毕', ['rocket' => $rocket]);

        return $next($rocket);
    }

    abstract protected function getMethod(): string;
}
```

通过以上代码，我们大概能明白，查询订单的 `QueryPlugin` 插件，继承了 `GeneralPlugin` 这个常用插件，
通过支付宝官方文档，我们知道，查询订单的 API 将传参中的 method 改为了 `alipay.trade.query`，其它参数均是个性化参数，和入参有关，
因此，我们在做查询订单时，是需要简单的把 method 按要求更改即可，是不是很简单？

## 二、获取所有常用插件

当准备好自定义插件后，我们第二步将获取支付宝其它 通用插件，如 加密，签名，调用支付宝接口等。

只需要简单的使用以下代码即可获取通用插件

```php
$allPlugins = Pay::alipay()->mergeCommonPlugins([QueryPlugin::class]);
```

## 三、运用插件调用 API 访问支付宝服务

随后，即可运转所有插件，访问支付宝的API服务了

```php
$params = [
    'out_trade_no' => '1514027114',
];

$result = Pay::alipay()->pay($allPlugins, $params);
```

代码中的 `$params` 为调用 API 所需要的其它参数。
