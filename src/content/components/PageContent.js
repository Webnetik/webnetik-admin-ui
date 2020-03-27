import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import MyMenu from './Menu';
import SelectField from './SelectField';
import SaveBtn from './SaveBtn';
import PageTitle from './PageTitle';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SettingOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class MyLayout extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            collapsed: true,
        };
        
        this.toggle = this.toggle.bind(this);
    }
    
    toggle() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    
    render() {
        return (
            <Layout>
                <Sider
                    width='200'
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        this.toggle();
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    >
                    <div className='logos'>Webnetik</div>
                    <MyMenu />
                </Sider>
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ padding: 0, paddingTop: '13px', paddingBottom: '12px', lineHeight: '18px', paddingLeft: '20px' }}>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col'>
                                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                        className: 'trigger',
                                        onClick: this.toggle,
                                    })}
                                </div>
                                <div className='col-auto text-right right-menu' style={{ paddingRight: '20px' }}>
                                    <Menu onClick={this.toggle} selectedKeys={[this.state.current]} mode="horizontal">
                                        <SubMenu
                                            title={
                                                  <SettingOutlined style={{ fontSize: '18px', color: '#08c' }} />
                                            }
                                             >
                                            <Menu.Item key="setting:1">My Profile</Menu.Item>
                                            <Menu.Item key="setting:2">Log out</Menu.Item>
                                        </SubMenu>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </Header>
                    <Content style={{ margin: '10px 10px 0' }}>
                        <div className="site-layout-background p-1 p-md-4" style={{ paddingLeft: "20px", minHeight: 360 }}>
                            <PageTitle title="User roles and capabilities" />
                            <SelectField />
                            <SaveBtn />
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
};

export default MyLayout;
