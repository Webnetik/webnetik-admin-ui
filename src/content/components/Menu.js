import React, { Component } from 'react';

//import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class MyMenu extends Component {

    constructor(props) {
        super(props);

        this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

        this.state = {
            openKeys: ['sub1'],
        }
    }

    handleClick(e) {
        console.log('click ', e);
    };

    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    
    render() {
        const { Header, Content, Footer, Sider } = Layout;

        return(
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        mode="inline"
                        openKeys={this.state.openKeys}
                        onOpenChange={(keys) => this.onOpenChange(keys)}
                       >
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <MailOutlined/>
                                    <span>Navigation One</span>
                                </span>
                            }>
                            <Menu.Item key="1">Option 1</Menu.Item>
                            <Menu.Item key="2">Option 2</Menu.Item>
                            <Menu.Item key="3">Option 3</Menu.Item>
                            <Menu.Item key="4">Option 4</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                                  <AppstoreOutlined />
                                  <span>Navigation Two</span>
                                </span>
                            }>
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu
                            key="sub4"
                            title={
                                <span>
                                  <SettingOutlined />
                                  <span>Navigation Three</span>
                                </span>
                            }>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
        );
    }
    
};

export default MyMenu;



