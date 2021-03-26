import React from "react";
import { Pagination } from "antd";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";
export default function IndexPagination(){
    let {search} = useLocation();
    let {tab="all",page=1} =  qs.parse(search.substr(1));
    // current = {page - 0} 因为数据类型必须得是数字
    // 自定义 Pagination，注意参数 page 和 type
    return <div className="index-pagination">
        <Pagination 
            current = {page-0}
            defaultPageSize = {20}
            total={1000}
            itemRender={(page,type)=>{
                switch(type){
                    case "page":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
                    case "prev":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{"<"}</Link>
                    case "next":
                        return <Link to={`/?tab=${tab}&page=${page}`}>{">"}</Link>
                        default:
                            return <Link to={`/?tab=${tab}&page=${page}`}>{"…"}</Link>
                }
            }}
        />
    </div>
}