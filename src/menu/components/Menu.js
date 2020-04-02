import React, {Component} from 'react';
import {connect} from "react-redux";
import {AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import {Layout, Menu} from 'antd';
import {history} from '../../store';

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
                key: 'projects',
                name: 'projects',
                icon: <SettingOutlined />,
                items: [
                    {
                        key: 'users2',
                        label: 'Users2',
                        to: '/users2'
                    }
                ]
            }
        ];

        this.rootSubmenuKeys = menuItems.map(group => group.key);

        this.state = {
            openKeys: ['settings'],
            activePage: null,
            selectedMenuItems: null,
            menuItems
        }
    }

    componentDidMount() {
        this.findActiveMenu();
    }

    findActiveMenuItem(pathname) {
        const { menuItems } = this.state;

        return menuItems.map(item => {
            return item.items.find(i => i.to === pathname);
        }).filter(a => a);
    }

    findActiveMenu(to = this.props.router.location.pathname) {
        const path = to;
        const activeMenuItem = this.findActiveMenuItem(path)[0];

        this.setState({
            activePage: this.props.router.location.pathname,
            selectedMenuItems: activeMenuItem.key
        });
    }

    onOpenChange(openKeys) {
        console.log(openKeys);

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
        this.findActiveMenu(to);
        history.push(to);
    }

    getMenu() {
        return(
            <Menu
                selectedKeys={this.state.selectedMenuItems}
                mode="inline"
                openKeys={this.state.openKeys}
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
        router: state.router
    }
}

export default connect(mapStateToProps, { })(MyMenu);

