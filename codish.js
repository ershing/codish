#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const program = require('commander');

program
    .command("ui")
    .description('代码模板显示界面')
    .action(ui);

program
    .command("express <op>")
    .description(`生成服务器端代码等相关操作\n
    <op>可选参数：init,refresh,service,router,operator,model,add\n\n
    <op >    : *********************解析**********************\n
    example     : 初始化代码,完整输出各类文件,已存在则不修改\n
    init     : 初始化代码,完整输出各类文件,已存在则不修改\n
    entry    : 初始化代码,完整输出各类文件,已存在则不修改\n
    router   : 重载 路由 代码,慎用：会重写已更改的文件\n
    refresh  : 重载 所有 代码,慎用：会重写已更改的文件\n
    operator : 重载 操作 代码,慎用：会重写已更改的文件\n
    model    : 重载 模型 代码,慎用：会重写已更改的文件\n
    add      : 将api_define、入口文件及 src目录下的文件进行添加操作\n`)
    .action(initFiles);

program
    .command("test <op> [path]")
    .description(`测试代码生成等相关操作\n
    <op>可选参数：postman\n\n
    <op >    : *********************解析**********************\n
    postman  : 生成postman接口测试文件\n
    [path]   : 可选参数，默认localhost，可填168，生成对应ip的测试路径\n'`)
    .action(testFiles);

program
    .parse(process.argv);


if (process.argv.length === 2) {
    program.outputHelp();
}

function ui() {

}

function initFiles(op) {
    var init = require("./lib/init.js");
    init(op);
}

function testFiles(op, path) {
    var test = require('./lib/test.js');
    test(op, path);
}