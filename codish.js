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
    .description(`生成服务器端代码等相关操作
    <op>可选参数：example,init,refresh,entry,router,operator,model

    <op >    : ******************解析*****************
    example  : 生成参考例子
    init     : 初始化代码,完整输出各类文件,已存在则不修改
    refresh  : 重载 所有 代码,慎用：会重写已更改的文件
    entry    : 重载 入口 代码,慎用：会重写已更改的文件
    router   : 重载 路由 代码,慎用：会重写已更改的文件
    operator : 重载 操作 代码,慎用：会重写已更改的文件
    model    : 重载 模型 代码,慎用：会重写已更改的文件`)
    .action(createFiles);

program
    .command("test <op> [path]")
    .description(`测试代码生成等相关操作
    <op>可选参数：postman

    <op >    : ***********************解析***********************
    test     : 生成postman接口测试文件`)
    .action(testFiles);

program
    .parse(process.argv);


if (process.argv.length === 2) {
    program.outputHelp();
}

function ui() {
    console.log('待后续开发');
}

function createFiles(op) {
    var creator = require("./lib/creator.js");
    creator(op);
}

function testFiles(op, path) {
    var test = require('./lib/test.js');
    test(op, path);
}