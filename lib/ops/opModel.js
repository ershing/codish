/**
 * 生成数据模型代码文件操作
 * @param {json} apiInterface 传入的api定义
 * @param {bool} refresh 是否重载
 */
function opModel(apiInterface, refresh) {
    // const pug = require('pug');
    // const compiledFunction = pug.compileFile('./entryTemplate.pug');
    // var data = compiledFunction(apiInterface);

    // //写入文件
    // const fs = require('fs')
    // const path = require('path');
    // const entryFileName = apiInterface.server + '.js';
    // const entryFilePath = path.resolve(process.cwd(), entryFileName);
    // try {
    //     if (fs.existsSync(entryFilePath) && !refresh) {
    //         return console.log(entryFileName + '入口文件已存在，不重载');
    //     }
    // }
    // catch (e) {
    //     return console.log(entryFileName + '入口文件生成错误', e.message, e.stack);
    // }

    // fs.writeFile(entryFileName, data, (err) => {
    //     if (err) {
    //         return console.log(entryFileName + '入口文件生成失败', e.message, e.stack);
    //     }
    //     return console.log(entryFileName + '入口文件生成成功');
    // });
}

module.exports = onEntry;