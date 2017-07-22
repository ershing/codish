# Codish（未开发完成）
 一个一键生成Node服务器端代码的工具<br>
 说明<br>
 1.基于web框架：express<br>
 2.基于数据库orm工具：sequelize<br>
 3.基于约定的数据结构格式定义：dataStructure.json（[格式例子](https://github.com/ershing/codish/blob/master/dataStructure.json)）<br>
 4.基于约定的api接口格式定义：apiInterfaceSpec.json（[格式例子](https://github.com/ershing/codish/blob/master/apiInterfaceSpec.json)）<br>
 5.基于约定的状态码结构格式定义：statusAndMsg.json（[格式例子](https://github.com/ershing/codish/blob/master/statusAndMsg.json)）<br>
 6.只生成对单个数据表的增、删、查、改四项操作（分别对应访问方法为：POST、DELETE、GET、PUT），其他操作只生成代码框架，需手写剩余代码。

## 安装
命令窗口中输入如下命令行
```javascript
npm i codish -g
```
## 使用方法
### 一、先自行google安装Mysql，并新建好数据库（本例子中使用mysql，数据库名为exampleProject）；
### 二、新建项目文件夹，如exampleProject,并进入项目文件夹；
### 三、新建dataStructure.json文件（[例子](https://github.com/ershing/codish/blob/master/dataStructure.json)），编写数据表字段等内容，[注释查看](https://github.com/ershing/codish/blob/master/dataStructureNotes.json))；
### 四、新建apiInterfaceSpec.json文件（[例子](https://github.com/ershing/codish/blob/master/apiInterfaceSpec.json)），编写api接口要求等内容，[注释查看](https://github.com/ershing/codish/blob/master/apiInterfaceSpecNotes.json))；
### 五、新建statusAndMsg.json文件（[例子](https://github.com/ershing/codish/blob/master/statusAndMsg.json)），编写状态码及状态描述等内容，[注释查看](https://github.com/ershing/codish/blob/master/statusAndMsgNotes.json)；
### 六、打开命令窗口，输入命令codish init


### 命令行注释
| 命令行       | 作用说明 | 
| --------    | -----:  | 
| codish express example  | 创建项目样板文件（仅供参考）  |
| codish express init  | 初始化项目文件   |
| codish express refresh  | 重载项目所有文件   |
| codish express entry  | 重载入口文件   |
| codish express router  | 重载路由文件   |
| codish express operator  | 重载操作文件   |
| codish express model  | 重载模型文件   |
<br>

**注意：**<br>
1.初始化项目所有文件操作 **codish express init** ，若修改过三个基础json文件后继续使用该命令，若要生成的文件已存在则不会进行更新。<br>
2.重载项目所有文件操作 **codish express refresh** ，若修改过三个基础json文件后继续使用该命令，若要生成的文件已存在也会进行更新。<br>
3.其余对应重载命令，则无论文件是否存在也会更新文件内容。
## License
MIT License


