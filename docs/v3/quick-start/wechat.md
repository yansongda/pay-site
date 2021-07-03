---
title: 微信
---

# 微信快速入门

在初始化完毕后，就可以直接方便的享受 `yansongda/pay`  带来的便利了。

## 公众号支付

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'body' => 'subject-测试',
    'total_fee' => '1',
    'openid' => 'onkVf1FjWS5SBxxxxxxxx',
];

$result = Pay::wechat()->mp($order);
// 返回 Collection 实例。包含了调用 JSAPI 的所有参数，如appId，timeStamp，nonceStr，package，signType，paySign 等；
// 可直接通过 $result->appId, $result->timeStamp 获取相关值。
// 后续调用不在本文档讨论范围内，请自行参考官方文档。
```

## 手机网站支付

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'body' => 'subject-测试',
    'total_fee' => '1',
];

return Pay::wechat()->wap($order);
```

## APP 支付

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'body' => 'subject-测试',
    'total_fee' => '1',
];

// 将返回 json 格式，供后续 APP 调用，调用方式不在本文档讨论范围内，请参考官方文档。
return Pay::wechat()->app($order);
```

## 刷卡支付

:::warning
微信支付 v3 版 api 并不支持刷卡支付，后续将接入微信支付 v2 版 API，敬请期待
:::

## 扫码支付

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'body' => 'subject-测试',
    'total_fee'      => '1',
];

$result = Pay::wechat()->scan($order);
// 二维码内容： $qr = $result->code_url;
```

## 账户转账

:::warning
微信支付 v3 版 api 并不支持转账，后续将接入微信支付 v2 版 API，敬请期待
:::

## 小程序

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'description' => 'subject-测试',
    'amount' => [
        'total' => 1,
        'currency' => 'CNY',
    ],
    'payer' => [
        'openid' => '123fsdf234',
    ]
];

$result = Pay::wechat()->mini($order);
// 返回 Collection 实例。包含了调用 JSAPI 的所有参数，如appId，timeStamp，nonceStr，package，signType，paySign 等；
// 可直接通过 $result->appId, $result->timeStamp 获取相关值。
// 后续调用不在本文档讨论范围内，请自行参考官方文档。
```

## 普通红包

:::warning
微信支付 v3 版 api 并不支红包，后续将接入微信支付 v2 版 API，敬请期待
:::

## 裂变红包

:::warning
微信支付 v3 版 api 并不支持红包，后续将接入微信支付 v2 版 API，敬请期待
:::
