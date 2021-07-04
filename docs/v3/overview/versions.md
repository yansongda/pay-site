---
title: 更新记录
---

## TBD: v3.0.0

### Changes

- 删除了 `SignFailed` 事件
- PayStarting 更改为 PayStarted
- PayStarted 更改为 PayFinish
- RequestReceived 更改为 CallbackReceived
- Yansongda\Pay\Events.php 更改为 Yansongda\Pay\Event.php
- Yansongda\Pay\Log.php 更改为 Yansongda\Pay\Logger.php
- Yansongda\Pay\Events 文件夹 更改为 Yansongda\Pay\Event (即相应的事件类更改)

### Add

- 通过插件机制兼容支付宝所有API
- 通过插件机制兼容微信所有API
