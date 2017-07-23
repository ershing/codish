/**
 * 根据api定义和数据结构定义生成postman测试文件，并且可以一键测试
 * @param {json} apiInterface 传入的api定义
 */
function opTest(apiInterface) {
    const fs = require('fs');
    const path = require('path');
    const pug = require('pug');
    const compiledFunction = pug.compileFile('./entryTemplate.pug');
    var data = compiledFunction(apiInterface);
    const testFilePath = path.resolve(process.cwd(), 'test');

    try {
        if (!fs.existsSync(testFilePath)) {
            fs.mkdirSync(testFilePath);
        }
    }
    catch (e) {
        return console.log('测试文件路径生成失败', e.message, e.stack);
    }

    var testFile = path.resolve(testFilePath, 'testPostman.json');
    fs.writeFile(testFile, data, (err) => {
        if (err) {
            return console.log('测试文件生成失败', e.message, e.stack);
        }
        return console.log('测试文件生成成功');
    });
}