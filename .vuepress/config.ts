import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Pay',
    description: '让支付开发更简单',

    themeConfig: {
        logo: '/images/logo.png',
        navbar: [
            { text: 'Home', link: '/' },
            {
                text: '版本',
                children: [
                    {
                        text: '停止维护',
                        children: [
                            { text: 'v1.x', link: '/docs/v1/', activeMatch: '^/docs/v1/' }
                        ]
                    },
                    {
                        text: '安全支持',
                        children: [
                            { text: 'v2.x', link: '/docs/v2/', activeMatch: '^/docs/v2/' }
                        ]
                    },
                    {
                        text: '积极开发中',
                        children: [
                            { text: 'v3.x', link: '/docs/v3/', activeMatch: '^/docs/v3/' }
                        ]
                    }
                ]
            }
        ],
        repo: 'https://github.com/yansongda/pay',
        docsRepo: 'https://github.com/yansongda/pay-site',
        docsBranch: 'master',
        lastUpdated: true,
        sidebarDepth: 2,
        sidebar: {
            '/docs/v1/': [
            ],
            '/docs/v2/': [
                {
                    text: '快速入门',
                    link: '/docs/v2/',
                    children: [
                        '/docs/v2/installation.md',
                        '/docs/v2/quickUsage.md',
                        '/docs/v2/contribute.md'
                    ]
                },
                {
                    text: '支付 - 支付宝',
                    link: '/docs/v2/alipay/',
                    children: [
                        '/docs/v2/alipay/pay.md',
                        '/docs/v2/alipay/find.md',
                        '/docs/v2/alipay/cancel.md',
                        '/docs/v2/alipay/close.md',
                        '/docs/v2/alipay/refund.md',
                        '/docs/v2/alipay/callback.md',
                        '/docs/v2/alipay/response.md'
                    ]
                },
                {
                    text: '支付 - 微信',
                    link: '/docs/v2/wechat/',
                    children: [
                        '/docs/v2/wechat/pay.md',
                        '/docs/v2/wechat/find.md',
                        '/docs/v2/wechat/cancel.md',
                        '/docs/v2/wechat/close.md',
                        '/docs/v2/wechat/refund.md',
                        '/docs/v2/wechat/callback.md',
                        '/docs/v2/wechat/response.md'
                    ]
                },
                {
                    text: '事件系统',
                    link: '/docs/v2/events/',
                    children: [
                        '/docs/v2/events/class.md',
                        '/docs/v2/events/usage.md'
                    ]
                },
                {
                    text: '日志系统',
                    children: [
                        '/docs/v2/logger/usage.md'
                    ]
                },
                {
                    text: '其它',
                    children: [
                        '/docs/v2/others/faq.md'
                    ]
                }
            ],
            '/docs/v3': [
                {
                    text: '概述',
                    link: '/docs/v3',
                    children: [
                        '/docs/v3/README.md',
                        '/docs/v3/overview/communication.md',
                        '/docs/v3/overview/donate.md',
                        '/docs/v3/overview/contribute.md',
                        '/docs/v3/overview/versions.md'
                    ]
                },
                {
                    text: '快速入门',
                    children: [
                        '/docs/v3/quick-start/install.md',
                        '/docs/v3/quick-start/init.md',
                        '/docs/v3/quick-start/alipay.md',
                        '/docs/v3/quick-start/wechat.md',
                        '/docs/v3/quick-start/return-format.md'
                    ]
                },
                {
                    text: '支付宝',
                    children: [
                        '/docs/v3/alipay/pay.md',
                        '/docs/v3/alipay/find.md',
                        '/docs/v3/alipay/refund.md',
                        '/docs/v3/alipay/close.md',
                        '/docs/v3/alipay/cancel.md',
                        '/docs/v3/alipay/callback.md',
                        '/docs/v3/alipay/response.md',
                        '/docs/v3/alipay/more.md',
                    ]
                },
                {
                    text: '微信',
                    children: [
                        '/docs/v3/wechat/pay.md',
                        '/docs/v3/wechat/find.md',
                        '/docs/v3/wechat/refund.md',
                        '/docs/v3/wechat/close.md',
                        '/docs/v3/wechat/cancel.md',
                        '/docs/v3/wechat/callback.md',
                        '/docs/v3/wechat/response.md',
                        '/docs/v3/wechat/more.md'
                    ]
                },
                {
                    text: '核心架构',
                    children: [
                        '/docs/v3/kernel/rocket.md',
                        '/docs/v3/kernel/pipeline.md',
                        '/docs/v3/kernel/plugin.md',
                        '/docs/v3/kernel/shortcut.md'
                    ]
                },
                {
                    text: '其它',
                    children: [
                        '/docs/v3/others/event.md',
                        '/docs/v3/others/logger.md',
                        '/docs/v3/others/faq.md',
                    ]
                },
                {
                    text: '升级指南',
                    children: [
                        '/docs/v3/upgrade/v3.0.md'
                    ]
                }
            ]
        }
    },
})
