# Codish（未开发完成）
 一个生成Node服务器端代码的可视化工具<br>
 1.基于web框架：express<br>
 2.基于数据库orm工具：sequelize<br>
 3.基于约定的api接口定义：apiInterfaceSpec.json（[例子](https://github.com/ershing/codish/blob/master/apiInterfaceSpec.json)）<br>
 4.基于约定的数据结构定义：dataStructure.json（[例子](https://github.com/ershing/codish/blob/master/dataStructure.json)）<br>
 5.基于约定的状态码结构定义：statusAndMsg.json（[例子](https://github.com/ershing/codish/blob/master/statusAndMsg.json)）<br>

## 安装
命令行输入命令
```javascript
npm i codish -g
```
## 命令行及作用说明
### 1.编辑界面模式
| 命令行       | 作用说明    | 
| --------    | -----:  | 
| codish ui  | 弹出编辑界面   |
该页面可视化编辑并生成数据结构、api接口、状态码等文件<br>
并提供一键生成服务器代码操作（其中数据库操作只包含增、删、查、改）。

### 2.手动生成模式
**前提：**<br>
必须确保项目根目录下已存在apiInterfaceSpec.json<br> 
必须确保项目根目录下已存在dataStructure.json<br>
必须确保项目根目录下已存在statusAndMsg.json<br>
上述文件可由编辑界面生成，也可手动编辑或修改编辑界面生成的文件。

| 命令行       | 作用说明    | 
| --------    | -----:  | 
| codish express example  | 创建项目样板文件（供参考）  |
| codish express init  | 初始化项目文件   |
| codish express refresh  | 重载项目所有文件   |
| codish express entry  | 重载入口文件   |
| codish express router  | 重载路由文件   |
| codish express operator  | 重载操作文件   |
| codish express model  | 重载模型文件   |
**注意：**<br>
初始化项目所有文件操作（codish express init），若文件已存在则不会进行更新<br>
重载项目所有文件操作（codish express refresh），若文件存在也会重新更新
## License
MIT License


