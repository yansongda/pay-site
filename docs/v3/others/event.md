---
title: 事件机制
---

# 概述

在支付过程中，可能会想监听一些事件，好同时处理一些其它任务。

SDK 使用 [symfony/event-dispatcher](https://github.com/symfony/event-dispatcher) 组件进行事件的相关操作。

## 事件

### 支付开始

- 事件类：Yansongda\Pay\Event\PayStarted::class
- 说明：此事件将在支付进入核心流程时进行抛出。此时 SDK 只进行了相关初始化操作，其它所有操作均未开始。
- 额外数据：
    - $rocket (相关参数)
    - $plugins (所有使用的插件)
    - $params (传递的原始参数)

### 支付完毕

- 事件类：Yansongda\Pay\Event\PayFinish
- 说明：此事件将在所有参数处理完毕时抛出。
- 额外数据：
    - $rocket (相关参数)

### 开始调用API

- 事件类：Yansongda\Pay\Event\ApiRequesting
- 说明：此事件将在请求支付方的 API 前抛出。
- 额外数据：
    - $rocket (相关参数)

### 调用API结束

- 事件类：Yansongda\Pay\Event\ApiRequested
- 说明：此事件将在请求支付方的 API 完成之后抛出。
- 额外数据：
    - $rocket (相关参数)

### 收到通知

- 事件类：Yansongda\Pay\Events\RequestReceived
- 说明：此事件将在收到支付方的请求（通常在异步通知或同步通知）时抛出
- 额外数据：
    - $provider (支付机构)
    - $contents (收到的数据)
    - $params (自定义数据)
    
### 调用其它方法

- 事件类：Yansongda\Pay\Events\MethodCalled
- 说明：此事件将在调用除 PAYMETHOD 方法（例如，查询订单，退款，取消订单）时抛出
- 额外数据：
    - $provider (支付机构)
    - $name (调用方法)
    - $params (参数)
