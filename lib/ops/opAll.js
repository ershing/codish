/**
 * 生成所有代码操作
 * @param {json} apiInterface 传入的api定义文件
 * @param {json} dataStructure 传入的数据结构文件
 * @param {bool} refresh 是否重载
 */
function opAll(apiInterface, dataStructure, refresh) {

    const opEntry = require('./onEntry');
    const opModel = require('./opModel');
    const opOperator = require('./opOperator');
    const opRouter = require('./opRouter');

    opEntry(apiInterface, refresh);
    opModel(dataStructure, refresh);
    opOperator(apiInterface, refresh);
    opRouter(apiInterface, refresh);

}

module.exports = opAll;