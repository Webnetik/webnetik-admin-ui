import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import MyMenu from './Menu';
import SelectField from './SelectField';
import SaveBtn from './SaveBtn';
import PageTitle from './PageTitle';
import Box from './Box';

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
            <Layout style={{ height: '100vh' }}>
                <MyMenu />
                <Layout>
                    <Header className="site-layout-sub-header-background" style={{ height: '30px', padding: 0, paddingTop: '13px', paddingBottom: '12px', lineHeight: '18px', paddingLeft: '20px' }}>
                    </Header>
                    <Content style={{ }}>
                        <div className="site-layout-background" style={{ paddingTop: '20px', paddingLeft: "20px", minHeight: 360 }}>
                            <PageTitle title="User roles and capabilities" />
                            <Box>
                                <SelectField />
                                <SaveBtn />
                            </Box>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
};

export default MyLayout;
