/**
 * 生成操作代码文件
 * @param {json} apiInterface 传入的api定义
 * @param {bool} refresh 是否重载
 */
function onOperator(apiInterface, refresh) {

    const fs = require('fs')
    const path = require('path');
    const srcPath = path.resolve(process.cwd(), 'src');
    const operatorPath = path.resolve(process.cwd(), 'src', 'operator');

    try {
        if (!fs.existsSync(srcPath)) {
            fs.mkdirSync(srcPath);
        }
        if (!fs.existsSync(operatorPath)) {
            fs.mkdirSync(operatorPath);
        }
    }
    catch (e) {
        return console.log('操作代码文件路径生成失败', e.message, e.stack);
    }


    const pug = require('pug');
    const compiledFunction = pug.compileFile('./entryTemplate.pug');
    const { getFileDir } = require('../utils');
    var transformApi = getFileDir(apiInterface);

    transformApi.apis.forEach((ele) => {
        var filePath = path.resolve(operatorPath, ele.fileDir);
        try {
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath);
            }
        }
        catch (e) {
            return console.log('操作代码文件路径生成失败', e.message, e.stack);
        }
        var eleOperator = path.resolve(filePath, ele.method.toLowerCase() + '.js');
        try {
            if (fs.existsSync(eleOperator) && !refresh) {
                return console.log(ele.fileDir, ele.method.toLowerCase() + '.js' + '操作代码文件已存在，不重载');
            }
        }
        catch (e) {
            return console.log(ele.fileDir, ele.method.toLowerCase() + '.js' + '操作代码文件生成错误', e.message, e.stack);
        }

        var data = compiledFunction(ele);
        fs.writeFile(eleModel, data, (err) => {
            if (err) {
                return console.log(ele.fileDir, ele.method.toLowerCase() + '.js' + '操作代码文件生成失败', e.message, e.stack);
            }
            return console.log(ele.fileDir, ele.method.toLowerCase() + '.js' + '操作代码文件生成成功');
        });
    });
}

module.exports = onOperator;