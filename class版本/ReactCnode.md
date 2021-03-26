## class 版本 Cnode

### babel-plugin-import 安装 （ant-design 需求)

### 整个程序的树图结构

- App.js
  - homepage.js
    - articlemenu.js(左边导航栏)
    - articlelist.js(右侧数据 content)
  - detail.js
    - detailintro.js(详情页)
    - replylist.js(评论留言)
  - user.js
    + topiclist.js(话题页)

### 细节亮点

- App.js

  - withRouter(App)高阶函数的使用

- homepage.js

  ```js
  import { colorList, tabList } from '../utils/utils';
  ```

- articlemenu.js

  ```js
  componentDidMount() {
      this.setState({
          tab: this.props.tab ?? 'all'
      })
  }
  render() {
       ...
       // 受控组件的双向绑定
       selectedKeys={[tab]}
       onSelect={({key}) => {
           this.setState({
               tab: key
           })
       }}
  }
  ```

- articlelist.js

  ```js
  import { fromNow, locate } from 'silly-dateTime';
  locate('zh-cn');
  
  // 性能上的优化
  shouldComponentUpdate(nextProps) {
      if(nextProps.tab !== this.props.tab) {
          this.getData(nextProps.tab);
          return false;
      }
      return true;
  }
  
  render() {
      ...
      pagination={{
                  pageSize: 15,
                  total: 600,
                  onChange: (page) => {
                      this.setState({
                          page
                      });
                      this.getData('all', page)
                  }
                 }}
       ...
       actions={[`回复：${item.reply_count}`, `访问：${item.visit_count}`]}
  	...
      最后回复时间：{fromNow(item.last_reply_at)}
  }
  ```

- detail.js

  ```js
  {
  	this.state.data.replies?.length ? <ReplyList replies={this.state.data.replies}/> : ''
  }
  ```

- detailintro.js

  ```html
  <div dangerouslySetInnerHTML={{ __html: data.content }}/>
  ```

- replylist.js

  ```js
  extra={item.ups.length ? `有${item.ups.length}人觉得很赞` : ''}
  ```

- user.js

  ```html
  <TopicList
  	title='最近创建的话题'
      data={data.recent_topics}
  />
  <TopicList
  	title='最近回复的话题'
  	data={data.recent_replies}
  />
  ```

