import axios from "axios";
import { useDispatch } from "react-redux";
const http = axios.create({
    baseURL: " https://cnodejs.org/api/v1"
});

// 获取主题列表数据
function useTopicsList(){
    let dispatch = useDispatch();
    return function(tab="all",page=1,limit=20,mdrender=true){
        // 在数据请求前后对状态管理库数据管理
        dispatch({
            type:"topics_loading"
        })
        http.get(`/topics?tab=${tab}&page=${page}&limit=${limit}&mdrender=${mdrender}`).then((res)=>{
            dispatch({
                type:"topics_loadover",
                data: res.data.data
            })
        });
    }
}

// 获取主题详情
function useTopic(){
    let dispatch = useDispatch();
    return function(id){
        dispatch({
            type:"topic_loading"
        })
        http.get(`/topic/${id}`).then((res)=>{
            dispatch({
                type:"topic_loadover",
                data: res.data.data
            })
        }).catch((res)=>{
            dispatch({
                type:"topic_error",
                err_msg:res.response.data.error_msg
            })
        });
    }
}

// 获取用户详情
function useUser(){
    let dispatch = useDispatch();
    return function(loginname){
        dispatch({
            type:"user_loading"
        })
        http.get(`/user/${loginname}`).then((res)=>{
            dispatch({
                type:"user_loadover",
                data: res.data.data
            })
        })
    }
}
export {useTopicsList,useTopic,useUser}