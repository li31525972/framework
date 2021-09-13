const path = require('path')

module.exports = {
    title: 'Yahui的博客',
    description: '前端学习之路',
    port: 8888,
    head: [
        ['link', { rel: 'icon', href: '/logo.jpeg' }],
    ],
    markdown: {
        lineNumbers: true,
    },
    themeConfig: {
        nav: [
            { text: '优化', link: '/pages/optimization/' },
        ],
        sidebar: {
            '/pages/optimization/': [{
                title: '优化',
                path: '/pages/optimization/',
                collapsable: false,
                children: [
                    '',
                ]
            }]
        },
        sidebarDepth: 2,
        lastUpdated: '更新时间',
        searchMaxSuggestions: 10,
    },
}
