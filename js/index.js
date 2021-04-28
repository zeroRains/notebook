const fs = require("fs");

/**
 *
 * @param {string} dir
 */
function getPages(dir) {
    return fs.readdirSync(dir);
}

/**
 * 获取侧边栏
 * @param {string} folder 目录文件名
 * @param {string} title 标题
 */
function getSidebar(folder) {
    const pages = getPages(`docs/${folder}`);
    const sidebar = [];
    pages.forEach((md) => {
        const name = md.substring(0, md.length-3)
        sidebar.push({
            title: name,
            path: `/${folder}/${md}`,
        });
    });
    return sidebar;
}

module.exports = {
    getSidebar,
};