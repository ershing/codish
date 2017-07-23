/**
 * 生成路由代码文件操作
 * @param {json} apiInterface 传入的api定义
 * @param {bool} refresh 是否重载
 */
function opRouter(apiInterface, refresh) {
    const { getFileDir } = require('../utils');
    const pug = require('pug');
    const compiledFunction = pug.compileFile('./entryTemplate.pug');
    var data = compiledFunction(getFileDir(apiInterface));

    //写入文件
    const fs = require('fs')
    const path = require('path');
    const srcPath = path.resolve(process.cwd(), 'src');
    const routerPath = path.resolve(srcPath, 'router.js');
    try {
        if (!fs.existsSync(srcPath)) {
            fs.mkdirSync(srcPath);
        }
        if (fs.existsSync(routerPath) && !refresh) {
            return console.log('路由文件已存在，不重载');
        }
    }
    catch (e) {
        return console.log('路由文件生成错误', e.message, e.stack);
    }

    fs.writeFile(entryFileName, data, (err) => {
        if (err) {
            return console.log('路由文件生成失败', e.message, e.stack);
        }
        return console.log('路由文件生成成功');
    });
}

module.exports = opRouter;