import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import {
    UserOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import {logOut} from "../../login/actions/login";
const { SubMenu } = Menu;

class TopMenu extends PureComponent {

    logOut() {
        this.props.logOut();
    }

    getMenu() {
        return(
            <Menu align="right" mode="horizontal">
                <SubMenu
                    title={
                        <span className="submenu-title-wrapper">
                          <UserOutlined />
                        </span>
                    }>
                    <Menu.Item key="setting:1">My Profile</Menu.Item>
                    <Menu.Item key="setting:2" onClick={() => this.logOut()}>
                        Log out
                    </Menu.Item>
                </SubMenu>
            </Menu>
        );
    }

    render() {
        return this.getMenu();
    }
};

export default connect(null, { logOut })(TopMenu);





