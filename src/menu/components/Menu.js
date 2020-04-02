import React, { Component } from 'react';
import { connect } from "react-redux";
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
import { history } from '../../store';
import { logOut } from '../../login/actions/login';

class MyMenu extends Component {
    constructor(props) {
        super(props);

        const menuItems = [
            {
                key: 'settings',
                name: 'Settings',
                icon: <SettingOutlined />,
                items: [
                    {
                        key: 'users',
                        label: 'Users',
                        to: '/users'
                    },
                    {
                        key: 'roles-capabilities',
                        label: 'Roles and capabilities',
                        to: '/roles-and-capabilities'
                    }
                ]
            },
            {
                key: 'projects',
                name: 'Projects',
                icon: <AppstoreOutlined />,
                items: [
                    {
                        key: 'users2',
                        label: 'Users2',
                        to: '/users2'
                    },
                    {
                        key: 'roles-capabilities2',
                        label: 'Roles and capabilities2',
                        to: '/'
                    }
                ]
            }
        ];

        this.rootSubmenuKeys = menuItems.map(group => group.key);

        this.state = {
            openKeys: ['settings'],
            menuItems
        }
    }

    /*shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
        return false;
    }*/

    onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);

        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    }

    changeRoute(to) {
        history.push(to);
    }

    logOut() {
        console.log("logout");
        this.props.logOut();
    }

    getMenu() {
        return(
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={(keys) => this.onOpenChange(keys)}>
                <Menu.Item key='logout' onClick={() => this.logOut()}>
                    Log out
                </Menu.Item>
                {
                    this.state.menuItems.map((group, index) => {
                        return (
                            <SubMenu
                                key={group.key}
                                title={
                                    <span>
                                        {group.icon}
                                        <span>{group.name}</span>
                                    </span>
                                }>
                                {
                                    group.items.map((item, index2) => {
                                        return (
                                            <Menu.Item key={item.key} onClick={() => this.changeRoute(item.to)}>
                                               {item.label}
                                            </Menu.Item>
                                        )
                                    })

                                }
                            </SubMenu>
                        )
                    })
                }
            </Menu>
        );
    }

    render() {
        const { Sider } = Layout;

        return(
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    //console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    //console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                {this.getMenu()}
            </Sider>
        );
    }
};

function mapStateToProps(state) {
    return {
        token: state.login.token
    }
}

export default connect(mapStateToProps, { logOut })(MyMenu);

