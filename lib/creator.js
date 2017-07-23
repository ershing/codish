
/**
 * 执行代码生成操作
 * @param {string} op 操作内容,包括：example、init、refresh、entry、router、operator、model 
 */
function creator(op) {
    const { checkFiles } = require('./utils');
    if (!checkFiles()) {
        return;
    };
    var { apiInterface, dataStructure } = checkFiles;

    const opAll = require('./op/opAll');
    const opEntry = require('./op/opEntry');
    const opModel = require('./op/opModel');
    const opOperator = require('./op/opOperator');
    const opRouter = require('./op/opRouter');

    switch (op) {
        case 'example':
            const apiExample = require('./example/apiInterfaseSpec.json');
            const dataExample = require('./example/dataStructure.json');
            opAll(apiExample, dataExample, false);
            break;
        case 'init':
            opAll(apiInterface, dataStructure, false);
            break;
        case 'refresh':
            opAll(apiInterface, dataStructure, true);
            break;
        case 'entry':
            opEntry(apiInterface, true);
            break;
        case 'router':
            opRouter(apiInterface, true);
            break;
        case 'operator':
            opOperator(apiInterface, true);
            break;
        case 'model':
            opModel(apiInterface, dataStructure, true);
            break;
        default:
            return console.log('不存在该指令');
    }
}




module.exports = creator;