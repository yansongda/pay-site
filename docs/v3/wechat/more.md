---
title: 更多便捷
---

# 更多方便的API

得益于 yansongda/pay 的基础架构和良好的插件机制，
您可以自有的使用任何内置插件和自定义插件调用支付宝的任何 API。

诸如签名、API调用、解密、验签、解包等基础插件已经内置在 Pay 中，
您可以使用 `Pay::wechat()->mergeCommonPlugins(array $plugins)` 来获取调用 API 所必须的常用插件

下面将逐步介绍插件的使用方式

## 一、自定义插件

首先，您需要自定义插件，此插件只需要关注业务逻辑即可，不需要考虑签名、验签等操作。

其实大家经常使用的 「公众号支付」「小程序支付」「查询订单」 等均属于自定义插件，只不过这类插件已经内置在 yansongda/pay 中了，不需要您额外开发即可使用。

以 查询订单 插件为例

```php
<?php

declare(strict_types=1);

namespace Yansongda\Pay\Plugin\Wechat\Pay\Common;

use Yansongda\Pay\Exception\InvalidParamsException;
use Yansongda\Pay\Plugin\Wechat\GeneralPlugin;
use Yansongda\Pay\Rocket;

class QueryPlugin extends GeneralPlugin
{
    /**
     * @throws \Yansongda\Pay\Exception\ContainerDependencyException
     * @throws \Yansongda\Pay\Exception\ContainerException
     * @throws \Yansongda\Pay\Exception\ServiceNotFoundException
     * @throws \Yansongda\Pay\Exception\InvalidParamsException
     */
    protected function getUri(Rocket $rocket): string
    {
        $config = get_wechat_config($rocket->getParams());
        $payload = $rocket->getPayload();

        if (is_null($payload->get('transaction_id'))) {
            throw new InvalidParamsException(InvalidParamsException::MISSING_NECESSARY_PARAMS);
        }

        return 'v3/pay/transactions/id/'.
            $payload->get('transaction_id').
            '?mchid='.$config->get('mch_id', '');
    }

    protected function getMethod(): string
    {
        return 'GET';
    }

    protected function doSomething(Rocket $rocket): void
    {
        $rocket->setPayload(null);
    }
}

```

```php
<?php

declare(strict_types=1);

namespace Yansongda\Pay\Plugin\Wechat;

use Closure;
use Psr\Http\Message\RequestInterface;
use Yansongda\Pay\Contract\PluginInterface;
use Yansongda\Pay\Logger;
use Yansongda\Pay\Pay;
use Yansongda\Pay\Provider\Wechat;
use Yansongda\Pay\Request;
use Yansongda\Pay\Rocket;

abstract class GeneralPlugin implements PluginInterface
{
    /**
     * @throws \Yansongda\Pay\Exception\ServiceNotFoundException
     * @throws \Yansongda\Pay\Exception\ContainerException
     * @throws \Yansongda\Pay\Exception\ContainerDependencyException
     */
    public function assembly(Rocket $rocket, Closure $next): Rocket
    {
        Logger::info('[wechat][GeneralPlugin] 通用插件开始装载', ['rocket' => $rocket]);

        $rocket->setRadar($this->getRequest($rocket));
        $this->doSomething($rocket);

        Logger::info('[wechat][GeneralPlugin] 通用插件装载完毕', ['rocket' => $rocket]);

        return $next($rocket);
    }

    /**
     * @throws \Yansongda\Pay\Exception\ContainerDependencyException
     * @throws \Yansongda\Pay\Exception\ContainerException
     * @throws \Yansongda\Pay\Exception\ServiceNotFoundException
     */
    protected function getRequest(Rocket $rocket): RequestInterface
    {
        return new Request(
            $this->getMethod(),
            $this->getUrl($rocket),
            $this->getHeaders(),
        );
    }

    protected function getMethod(): string
    {
        return 'POST';
    }

    /**
     * @throws \Yansongda\Pay\Exception\ContainerDependencyException
     * @throws \Yansongda\Pay\Exception\ContainerException
     * @throws \Yansongda\Pay\Exception\ServiceNotFoundException
     */
    protected function getUrl(Rocket $rocket): string
    {
        $config = get_wechat_config($rocket->getParams());

        return Wechat::URL[$config->get('mode', Pay::MODE_NORMAL)].
            $this->getUri($rocket);
    }

    protected function getHeaders(): array
    {
        return [
            'Content-Type' => 'application/json',
        ];
    }

    abstract protected function doSomething(Rocket $rocket): void;

    abstract protected function getUri(Rocket $rocket): string;
}
```

支付宝和微信的 `QueryPlugin` 和 `GeneralPlugin` 有些许不一样，不过都是为了高度抽象出支付运营商的API。

通过微信官方文档，我们知道，查询订单的 API 将传参中的 url 是随参数变化而变化的，因此我们抽象出了 `getUri` 等方法，方便做各种请求上的调整。

## 二、获取所有常用插件

当准备好自定义插件后，我们第二步将获取微信其它 通用插件，如 加密，签名，调用微信接口等。

只需要简单的使用以下代码即可获取通用插件

```php
$allPlugins = Pay::wechat()->mergeCommonPlugins([QueryPlugin::class]);
```

## 三、运用插件调用 API 访问微信支付服务

随后，即可运转所有插件，访问微信的API服务了

```php
$params = [
    'transaction_id' => '1217752501201407033233368018',
];

$result = Pay::wechat()->pay($allPlugins, $params);
```

代码中的 `$params` 为调用 API 所需要的其它参数。
