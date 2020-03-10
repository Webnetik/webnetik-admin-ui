import React, { Component } from 'react';

import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class MyMenu extends Component {
    
    handleClick(e) {
        console.log('click ', e);
    };
    
    render() {
        return(
                <Menu
                    onClick={(event) => this.handleClick(event)}
                    style={{ width: 200 }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                              <MailOutlined />
                              <span>Content</span>
                            </span>
                        }
                    >
                            <Menu.Item key="1">Projects</Menu.Item>
                            <Menu.Item key="2">Services</Menu.Item>
                            <Menu.Item key="3">About us</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                 <AppstoreOutlined />
                                <span>Users</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Users</Menu.Item>
                        <Menu.Item key="6">Roles</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                  <SettingOutlined />
                  <span>Settings</span>
                </span>
                        }
                    >
                        <Menu.Item key="9">Info</Menu.Item>
                    </SubMenu>
                </Menu>
        );
    }
    
};

export default MyMenu;



