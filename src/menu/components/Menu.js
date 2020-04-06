import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppstoreOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {history} from '../../store';
import { setOpenedMenuGroups } from '../actions/index';

const { SubMenu } = Menu;

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
                key: 'profile',
                name: 'Profile',
                icon: <UserOutlined />,
                items: [
                    {
                        key: 'my-profile',
                        label: 'My profile',
                        to: '/my-profile'
                    }
                ]
            }
        ];

        this.rootSubmenuKeys = menuItems.map(group => group.key);

        this.state = {
            activePage: null,

            selectedMenuItems: null,
            menuItems
        }
    }

    componentDidMount() {
        this.setActiveMenu();
    }

    findActiveMenuItem(pathname) {
        const { menuItems } = this.state;

        return menuItems.map(item => {
            return item.items.find(i => i.to === pathname);
        }).filter(a => a);
    }

    setActiveMenu(to = this.props.router.location.pathname) {
        const path = to;
        const activeMenuItem = this.findActiveMenuItem(path)[0];

        if(activeMenuItem) {
            this.setState({
                activePage: this.props.router.location.pathname,
                selectedMenuItems: activeMenuItem.key
            });
        }
    }

    onOpenChange(openKeys) {
        this.props.setOpenedMenuGroups(openKeys);
    }

    changeRoute(to) {
        this.setActiveMenu(to);
        history.push(to);
    }

    getMenu() {
        if(!!this.props.menu) {
            return(
                <Menu
                    selectedKeys={this.state.selectedMenuItems}
                    mode="inline"
                    openKeys={this.props.menu.openedMenus}
                    onOpenChange={(keys) => this.onOpenChange(keys)}>
                    <Menu.Item key='0-site'>
                        <AppstoreOutlined />
                        <span>Go website</span>
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
        } else {
            return null;
        }
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
        token: state.login.token,
        router: state.router,
        menu: state.menus
    }
}

export default connect(mapStateToProps, { setOpenedMenuGroups })(MyMenu);

