import React from 'react';
import { Affix, Layout, Row, Col, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import {nav} from "../router/index";
function Header() {
  let {pathname} = useLocation();
  // 找到相应的 index 值，给到 selectedKeys， 用于刷新页面后的类似于 vue 中的 keepAlive
  let activeIndex = nav.findIndex((navData)=>{
        return pathname === navData.to;
  });
  return (<Affix
        offsetTop={0}
    >
        <Layout.Header id="header">
            <div className="wrap">
                <Row>
                    <Col 
                        xs={6}
                        sm={4}
                        md={2}
                    >
                        <h1 className="logo"><Link to="/">CNode</Link></h1>
                    </Col>
                    <Col 
                        xs={18}
                        sm={20}
                        md={22}
                    >
                        <Menu 
                            mode="horizontal" 
                            theme="dark"
                            selectedKeys={[activeIndex+""]}
                        >                       
                           {nav.map((navData,index)=>{
                                return <Menu.Item key={index}><Link to={navData.to}>{navData.txt}</Link></Menu.Item>
                           })}
                        </Menu>
                    </Col>
                </Row>
            </div>
        </Layout.Header>
    </Affix>);
}

export default Header;
