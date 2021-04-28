function getDatabase() {
    let name = ['绪论', '关系数据库', 'SQL语言', '数据库的安全性', '数据库的完整性', '关系数据库理论',
        '数据库设计', '数据库编程', '关系查询处理和优化', '数据恢复技术', '并发控制'
    ]
    return name.map((self) => {
        return {title: self, path: `/database/${self}.md`}
    })
    return [{
            title: '绪论',
            path: '/database/绪论.md'
        },
        {
            title: '关系数据库',
            path: '/database/关系数据库.md'
        },
    ];
}

module.exports.getDatabase = getDatabase;
