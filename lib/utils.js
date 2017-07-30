/**
 * 检查三个基础json文件是否存在：包括dataStructure.json、apiInterfaceSpec.json、statusAndMsg.json
 */
function checkFiles() {
    const fs = require('fs');
    const path = require('path');
    const root = process.cwd();
    const dataPath = path.resolve(root, 'dataStructure.json');
    const apiPath = path.resolve(root, 'apiInterfaceSpec.json');
    const statusPath = path.resolve(root, 'statusAndMsg.json');
    try {
        if (!fs.existsSync(dataPath) || !fs.existsSync(apiPath) || !fs.existsSync(statusPath)) {
            console.log('三个基础json文件不存在，请检查开启命令窗口位置是否正确，并检查文件是否存在');
            return false;
        }
        var apiInterface = require(apiPath);
        var dataStructure = reuqire(dataPath);
        return { apiInterface, dataStructure };
    } catch (e) {
        console.log('三个基础json文件访问出错');
        return false;
    }
}

/**
 * 根据api中的url，判断所属数据表，并以此为fileDir字段赋值返回
 * @param {json} apiInterface 传入的api定义
 */
function getFileDir(apiInterface){
    apiInterface.apis.forEach((ele)=>{
        ele.fileDir = ele.url.split('/')[2];
    });
    return apiInterface;
}

module.exports = {
    checkFiles,
    getFileDir,
}