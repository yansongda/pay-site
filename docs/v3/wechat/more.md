---
title: 更多便捷插件
---

# 更多方便的API

得益于 yansongda/pay 的基础架构和良好的插件机制，
您可以自有的使用任何内置插件和自定义插件调用支付宝的任何 API。

诸如签名、API调用、解密、验签、解包等基础插件已经内置在 Pay 中，
您可以使用 `Pay::wechat()->mergeCommonPlugins(array $plugins)` 来获取调用 API 所必须的常用插件

首先，查找你想使用的插件，然后

```php
Pay::config($config);

$params = [
    'transaction_id' => '1217752501201407033233368018',
];

$allPlugins = Pay::wechat()->mergeCommonPlugins([QueryPlugin::class]);

$result = Pay::wechat()->pay($allPlugins, $params);
```

关于插件的详细介绍，如果您感兴趣，可以参考 [这篇说明文档](/docs/v3/kernel/plugin.md)

## 资金应用-分账

### 添加分账接收方API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\AddReceiverPlugin`

### 请求分账API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\CreatePlugin`

### 删除分账接收方API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\DeleteReceiverPlugin`

### 查询剩余待分金额API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryAmountsPlugin`

### 查询分账结果API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryPlugin`

### 查询分账回退结果API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\QueryReturnPlugin`

### 请求分账回退API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\ReturnPlugin`

### 解冻剩余资金API

- `Yansongda\Pay\Plugin\Wechat\Fund\Profitsharing\UnfreezePlugin`

## 营销工具-代金券

### 创建代金券批次API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\CreatePlugin`

### 暂停代金券批次API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\PausePlugin`

### 根据商户号查用户的券

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryCouponDetailPlugin`

### 查询批次详情API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockDetailPlugin`

### 查询代金券可用单品API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockItemsPlugin`

### 查询代金券可用商户API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockMerchantsPlugin`

### 下载批次退款明细API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockRefundFlowPlugin`

### 条件查询批次列表API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStocksPlugin`

### 下载批次核销明细API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryStockUseFlowPlugin`

### 根据商户号查用户的券

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\QueryUserCouponsPlugin`

### 重启代金券批次API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\RestartPlugin`

### 发放代金券批次API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\SendPlugin`

### 设置消息通知地址API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\SetCallbackPlugin`

### 激活代金券批次API

- `Yansongda\Pay\Plugin\Wechat\Marketing\Coupon\StartPlugin`

