# Cnode-hooks 版本

## 路由表配置

## 仓库

### action - 数据请求

1、useTopicsList，获取主题列表数据

2、useTopic，获取主题详情

3、获取用户详情

### reducer - 数据存储

1、topics_loading / topcis_loadover

2、topic_loading / topic_loadover / topic_error，data 数据的处理比较特殊；

3、login

## 组件

### 1、header

Affix 组件的使用，使得头部固定在距离页面顶部 0px 的位置；

Menu 中 selectedKeys 的配置由路由中参数决定；

导航栏的栅格布局；

### 2、

## 页面

### 1、getstart

卡片 - Card；

面包屑 - Breadcrumb - 路由跳转；

写死的 html 页面；

### 2、about

同上

## 主页

### 1、index

1）当初次访问或者 tab 与 page 值发生改变，会自动请求数据；

2）页面 loading 依据返回数据与否进行渲染；

3）数据内容；

4）页码跳转栏；

### 2、indexPagination

itemRender 配置

### 3、topcislist - 列表内容

1）头像 Avatar；

2）组件 TopicTag 标签；置顶 top 标签和精华 good 标签的特殊处理（因为后台数据没有对该两项做处理）

3）数据；

4）日期；dayjs 的配置

### 4、topic

1）Alert 进行错误处理，回退地址；



