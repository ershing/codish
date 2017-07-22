# Codish（开发中）
 一个一键生成Node服务器端代码的工具<br><br>
 **说明** :<br>
 1.基于web框架：express；<br>
 2.基于数据库orm工具：sequelize；<br>
 3.基于约定的数据结构格式定义：dataStructure.json；（[格式例子](https://github.com/ershing/codish/blob/master/dataStructure.json)）<br>
 4.基于约定的api接口格式定义：apiInterfaceSpec.json；（[格式例子](https://github.com/ershing/codish/blob/master/apiInterfaceSpec.json)）<br>
 5.基于约定的状态码结构格式定义：statusAndMsg.json；（[格式例子](https://github.com/ershing/codish/blob/master/statusAndMsg.json)）<br>
 6.只生成对单个数据表的增、删、查、改四项操作（分别对应访问方法为：POST、DELETE、GET、PUT），其他操作只生成代码框架，需手写剩余代码；<br>
 7.三个基础json文件需要手动编辑，后续将开发为可视化工具编辑。

## 安装
命令窗口中输入如下命令行
```javascript
npm i codish -g
```
## 使用方法
 一、先自行google安装Mysql，并新建好数据库（本例子中使用mysql，数据库名为exampleProject）；<br>
 二、新建项目文件夹，如exampleProject,并进入项目文件夹；<br>
 三、新建dataStructure.json文件（[例子](https://github.com/ershing/codish/blob/master/dataStructure.json)），编写数据表字段等内容，[注释查看](https://github.com/ershing/codish/blob/master/dataStructureNotes.json))；<br>
 四、新建apiInterfaceSpec.json文件（[例子](https://github.com/ershing/codish/blob/master/apiInterfaceSpec.json)），编写api接口要求等内容，[注释查看](https://github.com/ershing/codish/blob/master/apiInterfaceSpecNotes.json))；<br>
 五、新建statusAndMsg.json文件（[例子](https://github.com/ershing/codish/blob/master/statusAndMsg.json)），编写状态码及状态描述等内容，[注释查看](https://github.com/ershing/codish/blob/master/statusAndMsgNotes.json)；<br>
 六、在项目文件夹中打开命令窗口，输入命令 **codish init** 即可一键生成后端代码；<br>
 六、命令行运行 **codish express test** 即可生成postman测试文件，文件可自行导入或一键测试；<br>
 七、命令行运行 **npm init** 初始化项目；<br>
 八、命令行运行 **npm i express body-parser mysql2 sequelize newman --save** 安装相关模块；<br>
 九、命令行运行 **node exampleProject.js** （本例子为exampleProject.js）即可启动服务器。<br>

## 命令行注释
| 命令行       | 作用说明 | 
| :--------:    | :-----:  | 
| codish express example  | 创建项目样板文件（仅供参考）  |
| codish express init  | 初始化项目文件   |
| codish express refresh  | 重载项目所有文件   |
| codish express entry  | 重载入口文件   |
| codish express router  | 重载路由文件   |
| codish express operator  | 重载操作文件   |
| codish express model  | 重载模型文件   |
| codish express test  | 生成postman接口测试文件   |
<br>

### 注意：<br>
1.初始化项目所有文件操作 **codish express init** ，若修改过三个基础json文件后继续使用该命令，即将生成的代码文件若已存在则不会进行更新。<br>
2.重载项目所有文件操作 **codish express refresh** ，若修改过三个基础json文件后继续使用该命令，即将生成的代码文件若已存在也会进行更新。<br>
3.其余对应重载命令，则无论文件是否存在也会更新文件内容。

## License
MIT License


