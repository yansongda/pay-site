import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
    lang: 'zh-CN',
    title: 'Pay',
    description: '让支付开发更简单',
    dest: 'dist',

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
                        '/docs/v2/alipay/verify.md',
                        '/docs/v2/alipay/return.md'
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
                        '/docs/v2/wechat/verify.md',
                        '/docs/v2/wechat/return.md'
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
            ]
        }
    },
})
