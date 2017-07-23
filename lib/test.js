/**
 * 进行postman测试文件生成操作
 */
function test() {
    const { checkFiles } = require('./utils');
    if (!checkFiles()) {
        return;
    };
    var { apiInterface, dataStructure } = checkFiles;
    const opTest = require('./op/opTest');
    opTest(apiInterface, dataStructure);
}