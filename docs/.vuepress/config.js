const {getDatabase} = require('../database/database')
const { getSidebar } = require('../../js/index');

module.exports = {
    title: '唤雨考拉的笔记本',
    description: '没用的笔记本，相信没人会看的',
    head: [
        ['link', {
            rel: 'icon',
            href: '/logo.png'
        }]
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
                    { text: '数据库', link: '/database/绪论' },
                ]
            }
        ],
        // 为以下路由添加侧边栏
        sidebar: {
            '/database/': getSidebar('database', '数据库')
        }
    }
}

