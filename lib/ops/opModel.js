/**
 * 生成数据模型代码文件操作
 * @param {json} apiInterface 传入的api定义
 * @param {json} dataStructure 传入的数据结构定义
 * @param {bool} refresh 是否重载
 */
function opModel(dataStructure, refresh) {

    const fs = require('fs')
    const path = require('path');
    const srcPath = path.resolve(process.cwd(), 'src');
    const modelPath = path.resolve(process.cwd(), 'src', 'model');

    try {
        if (!fs.existsSync(srcPath)) {
            fs.mkdirSync(srcPath);
        }
        if (!fs.existsSync(modelPath)) {
            fs.mkdirSync(modelPath);
        }
    }
    catch (e) {
        return console.log('数据模型文件路径生成失败', e.message, e.stack);
    }

    const pug = require('pug');
    const compiledFunction = pug.compileFile('./entryTemplate.pug');

    dataStructure.tables.forEach((ele) => {
        var groupPath = path.resolve(modelPath, ele.group);
        try {
            if (!fs.existsSync(groupPath)) {
                fs.mkdirSync(groupPath);
            }
        }
        catch (e) {
            return console.log('数据模型文件路径生成失败', e.message, e.stack);
        }
        var eleModel = path.resolve(groupPath, ele.name + 'Model.js');
        try {
            if (fs.existsSync(eleModel) && !refresh) {
                return console.log(ele.name + 'Model.js' + '数据模型文件已存在，不重载');
            }
        }
        catch (e) {
            return console.log(ele.name + 'Model.js' + '数据模型文件生成错误', e.message, e.stack);
        }

        var data = compiledFunction(ele);
        fs.writeFile(eleModel, data, (err) => {
            if (err) {
                return console.log(ele.name + 'Model.js' + '数据模型文件生成失败', e.message, e.stack);
            }
            return console.log(ele.name + 'Model.js' + '数据模型文件生成成功');
        });
    });
}

module.exports = opModel;