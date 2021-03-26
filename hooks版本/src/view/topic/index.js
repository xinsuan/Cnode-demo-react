import React, { useEffect, Fragment } from 'react';
import {useSelector} from "react-redux";
import {useParams, useHistory} from "react-router-dom";
import { useTopic } from '../../store/action';
import {Alert} from "antd";
import Details from './details';
import Replies from './replies';
function TopicPage() {
  let {id} = useParams();
  // 自定义 hooks useTopic() 将数据请求的步骤扔出去
  let getData = useTopic();
  let history = useHistory();
  let {loading,data,isError,err_msg} = useSelector(state=>state.topic);

  useEffect(()=>{
    getData(id);
  },[id]); // eslint-disable-line react-hooks/exhaustive-deps
  return (<div
    id="topic"
  >{
    isError?<Alert 
        closable
        message={"请求出错"}
        type="error"
        description={
          <Fragment>
              <p>{err_msg}</p>
              <p>点击关闭按钮返回上一步</p>
          </Fragment>
        }
        afterClose={()=>{
          history.goBack();
        }}
    />:(<Fragment>
        <Details 
          loading = {loading}
          data = {data}
        />
        <Replies 
          loading = {loading}
          data = {data.replies}
        />
    </Fragment>)
  }</div>);
}

export default TopicPage;
