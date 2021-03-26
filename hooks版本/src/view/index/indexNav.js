import React from 'react';
import {indexNav,types} from "../../router/index"
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import qs from "qs";
function IndexNav() {
  let {search} = useLocation();
  let {tab} = qs.parse(search.substr(1));
  let activeIndex = tab===undefined?0:(types.indexOf(tab));
  // selectedKeys 取代掉 defaultSelectedKeys，当没有选中任何的时候就应该返回首页
  return <Menu
    mode ={"horizontal"}
    selectedKeys={[activeIndex+""]}
    className="index_nav"
  >
        {
            indexNav.map((item,index)=>{
                return <Menu.Item key={index}><Link to={item.to}>{item.txt}</Link></Menu.Item>
            })
        }
  </Menu>;
}

export default IndexNav;
