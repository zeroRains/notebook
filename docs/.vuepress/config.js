const { getSidebar } = require('../../js/index');

module.exports = {
    markdown: {
        lineNumbers: false
    },
    title: '唤雨考拉的笔记本',
    description: '对于唤雨考拉来说，这是一个百宝箱，但对于其他人来说，可能是一本用处不大的笔记本。',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }],
        ['meta', { name: 'keywords', content: 'notebook,Therainisme,Algorithm,题解,算法,编程,学习笔记' }]
    ],
    themeConfig: {
        // 添加导航栏
        nav: [{
                text: 'GitHub',
                // 这里是下拉列表展现形式。
                link: 'https://github.com/Therainisme/Notebook'
            },
            {
                text: '理论课程',
                items: [
                    { text: '数据库系统概论', link: '/database/<1>绪论' },
                ]
            },
            {
                text: '游泳',
                items: [
                    { text: '算法', link: '/algorithm/<99>竞赛中常用的C++黑魔法' },
                ]
            },
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/database/': getSidebar('database'),
            '/algorithm/': getSidebar('algorithm')
        }
    },
    plugins: [
        [
            "md-enhance",
            {
                // 启用 TeX 支持
                tex: true,
            },
        ],
    ],
}