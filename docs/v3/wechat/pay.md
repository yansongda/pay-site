---
title: 支付
---

微信支付目前直接内置支持 7 种快捷方式支付方法，对应的支付 method 如下：

| method | 说明 | 参数 | 返回值 |
| :---: | :---: | :---: | :---: |
| mp | 公众号支付 | array $order | Collection |
| wap | 手机网站支付 | array $order | Response |
| app | APP 支付 | array $order | Response |
| scan | 扫码支付 | array $order | Collection |
| mini | 小程序支付 | array $order | Collection |

## 公众号支付

### 例子

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'description' => 'subject-测试',
    'amount' => [
        'total' => '1',
    ],
    'payer' => [
        'openid' => 'onkVf1FjWS5SBxxxxxxxx',
    ],
];

$result = Pay::wechat()->mp($order);
// 返回 Collection 实例。包含了调用 JSAPI 的所有参数，如appId，timeStamp，nonceStr，package，signType，paySign 等；
// 可直接通过 $result->appId, $result->timeStamp 获取相关值。
// 后续调用不在本文档讨论范围内，请自行参考官方文档。
```

### 订单配置参数

**所有订单配置中，客观参数均不用配置，扩展包已经为大家自动处理了**，比如，`appid`，`sign` 等参数，大家只需传入订单类主观参数即可。

所有订单配置参数和官方无任何差别，兼容所有功能，所有参数请参考[这里](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_1_1.shtml)，查看「请求参数」一栏。


## 手机网站支付

### 例子

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'description' => 'subject-测试',
    'amount' => [
        'total' => '1',
    ],
    'scene_info' => [
        'payer_client_ip' => '1.2.4.8',
        'h5_info' => [
            'type' => 'Wap',
        ]       
    ],
];

return Pay::wechat()->wap($order);
```

### 订单配置参数

**所有订单配置中，客观参数均不用配置，扩展包已经为大家自动处理了**，比如，`trade_type`，`appid`，`sign` 等参数，大家只需传入订单类主观参数即可。

所有订单配置参数和官方无任何差别，兼容所有功能，所有参数请参考[这里](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_3_1.shtml)，查看「请求参数」一栏。

### 调用支付

后续调起支付不再本文档讨论范围内，请参考[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_3_4.shtml)

## APP 支付

### 例子

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'description' => 'subject-测试',
    'amount' => [
        'total' => '1',
    ],
];

// 将返回 json 格式，供后续 APP 调用，调用方式不在本文档讨论范围内，请参考官方文档。
return Pay::wechat()->app($order);
```

### 订单配置参数

**所有订单配置中，客观参数均不用配置，扩展包已经为大家自动处理了**，比如，`trade_type`，`appid`，`sign` 等参数，大家只需传入订单类主观参数即可。

所有订单配置参数和官方无任何差别，兼容所有功能，所有参数请参考[这里](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_1.shtml)，查看「请求参数」一栏。

### 调用支付

后续调起支付不再本文档讨论范围内，请参考[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_2_4.shtml)

## 扫码支付

### 例子

```php
Pay::config($config);

$order = [
    'out_trade_no' => time(),
    'description' => 'subject-测试',
    'amount' => [
        'total' => '1',
    ],
];

$result = Pay::wechat()->scan($order);
// 二维码内容： $qr = $result->code_url;
```

### 订单配置参数

**所有订单配置中，客观参数均不用配置，扩展包已经为大家自动处理了**，比如，`trade_type`，`appid`，`sign` 等参数，大家只需传入订单类主观参数即可。

所有订单配置参数和官方无任何差别，兼容所有功能，所有参数请参考[这里](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_4_1.shtml)，查看「请求参数」一栏。

### 调用支付

后续调起支付不再本文档讨论范围内，请参考[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_4_4.shtml)

## 小程序

### 例子

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

### 订单配置参数

**所有订单配置中，客观参数均不用配置，扩展包已经为大家自动处理了**，比如，`trade_type`，`appid`，`sign` 等参数，大家只需传入订单类主观参数即可。

所有订单配置参数和官方无任何差别，兼容所有功能，所有参数请参考[这里](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_1.shtml)，查看「请求参数」一栏。

### 调用支付

后续调起支付不再本文档讨论范围内，请参考[官方文档](https://pay.weixin.qq.com/wiki/doc/apiv3/apis/chapter3_5_4.shtml)

## 刷卡支付

:::warning
微信支付 v3 版 api 并不支持刷卡支付，后续将接入微信支付 v2 版 API，敬请期待
:::

## 账户转账

:::warning
微信支付 v3 版 api 并不支持转账，后续将接入微信支付 v2 版 API，敬请期待
:::

## 普通红包

:::warning
微信支付 v3 版 api 并不支红包，后续将接入微信支付 v2 版 API，敬请期待
:::

## 裂变红包

:::warning
微信支付 v3 版 api 并不支持红包，后续将接入微信支付 v2 版 API，敬请期待
:::
