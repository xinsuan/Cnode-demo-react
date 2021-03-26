import React, { useEffect } from 'react';
import IndexNav from "./indexNav";
import {useSelector} from "react-redux"; 
import TopicsList from '../../component/topicslist';
import { useTopicsList } from '../../store/action';
import qs from "qs";
import { useLocation } from 'react-router-dom';
import IndexPagination from './indexPagination';
function IndexPage() {
  let {data,loading} = useSelector(state=>state.topics);
  // 利用自定义 hooks 将数据请求单独拎出去
  let getData = useTopicsList();
  let {search} = useLocation();
  // 数据请求的时候给默认值，好让分页在当前页的 link 跳转失效
  let {tab="all",page=1} = qs.parse(search.substr(1));
  useEffect(()=>{
    getData(tab,page);
  },[tab,page]); // eslint-disable-line react-hooks/exhaustive-deps
  // 注意下面的 {loading?"":<IndexPagination />} 用来处理类似于 keepAlive效果，在数据请求过后再调用 Pagination 组件
  return (<div style={{marginTop:10}}>
        <IndexNav />
        <TopicsList 
            data={data}
            loading={loading}
        />
        {loading?"":<IndexPagination />}
  </div>);
}

export default IndexPage;
