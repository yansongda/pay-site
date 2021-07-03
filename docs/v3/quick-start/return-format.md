---
title: 返回格式
---

# 返回格式

通过 `yansongda/pay` 调用任何方法最终只可能返回三种格式

- `\Psr\Http\Message\MessageInterface`
- `\Yansongda\Supports\Collection`
- `array`

其中 `\Psr\Http\Message\MessageInterface` 最终 实例/接口 为

- `\GuzzleHttp\Psr7\Response`

:::tip
至于最终返回的到底是什么类型，和不同的方法而定
:::

## MessageInterface

### `\GuzzleHttp\Psr7\Response`

支付宝中

- `web()` web 支付
- `wap()` wap 支付
- `success()` 响应回调

微信中

- `success()` 响应回调

均返回此类，在支持 PSR7 的框架中均可直接返回响应请求

## Collection

默认情况下，支付宝、微信所有 API 调用场景下绝大多数方法最终都返回的是 `Collection` 实例。
例如常用的「退款」「转账」「小程序支付」等。

`Collection` 类提供了常用的快捷方法，具体 API 可参考源代码 [yansongda/supports](https://github.com/yansongda/supports)

## array

API 调用场景下的返回类型，`array` 和 `Collection` 是可以自定义的，默认情况下均返回 `Collection` 实例。

如果想返回 array 类型的数据，只需要

```php
use Yansongda\Pay\Contract\ParserInterface;
use Yansongda\Pay\Parser\ArrayParser;

Pay::set(ParserInterface::class, ArrayParser::class);
```

是不是很简单方便？
