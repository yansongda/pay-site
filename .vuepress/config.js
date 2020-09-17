module.exports = {
  title: 'Pay',
  description: '让支付开发更简单',
  themeConfig: {
    logo: '/images/logo.png',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '版本',
        items: [
          { text: 'Version', items: [
            { text: 'v1.x', link: '/docs/v1/'},
            { text: 'v2.x', link: '/docs/v2/'}
          ]}
        ]
      },
      { text: 'Github', link: 'https://github.com/yansongda/pay' },
    ],
    sidebar: {
      '/docs/v1/': [
        ''
      ],
      '/docs/v2/': [
        {
          title: 'Get Started', // 必要的
          path: '/docs/v2/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['installation', '安装'],
            ['quickUsage', '快速上手'],
            ['contribute', '贡献']
          ]
        },
        {
          title: '支付 - 支付宝', // 必要的
          path: '/docs/v2/alipay/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['alipay/pay', '支付'],
            ['alipay/find', '查询'],
            ['alipay/cancel', '取消'],
            ['alipay/close', '关闭'],
            ['alipay/refund', '退款'],
            ['alipay/verify', '验证服务端信息'],
            ['alipay/return', '回应服务端消息']
          ]
        },
        {
          title: '支付 - 微信', // 必要的
          path: '/docs/v2/wechat/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['wechat/pay', '支付'],
            ['wechat/find', '查询'],
            ['wechat/cancel', '取消'],
            ['wechat/close', '关闭'],
            ['wechat/refund', '退款'],
            ['wechat/verify', '验证服务端信息'],
            ['wechat/return', '回应服务端消息']
          ]
        },
        {
          title: '事件系统', // 必要的
          path: '/docs/v2/events/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['events/class', '事件类'],
            ['events/usage', '使用方式']
          ]
        },
        {
          title: '日志系统', // 必要的
          // path: '/v2/logger/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['logger/usage', '使用方式']
          ]
        },
        {
          title: '其它', // 必要的
          // path: '/v2/others/', // 可选的, 标题的跳转链接，应为绝对路径且必须存在
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1, // 可选的, 默认值是 1
          children: [
            ['others/faq', 'FAQ']
          ]
        }
      ]
    },
    lastUpdated: 'Last Updated'
  }
}
