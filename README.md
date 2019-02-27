# Koa-shelf
koa&mysql2&graphql
# 目录结构
```
.
├─app
│  ├─dao // 使用数据库
│  │  └─common // 数据库查询插入公共组件
│  ├─resolver // graphql的回调函数
│  ├─routes // 书写普通接口
│  ├─schema // graphql的配置文件
│  └─utils // 配置公共模块
└─config // 配置文件
```
# 如何使用
1. npm install
2. 复制config/db-template.js到config/db.js，然后配置数据库相关信息，创建test表，字段text为String类型
3. npm run dev
4. 到localhost:5000/graphql界面访问，查询示例：
```graphql
query{
  getText{
    text
  }
}
```