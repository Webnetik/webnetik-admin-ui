import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import SelectFields from "./SelectFields";
import { getRoles, getCapabilities } from '../actions/index';
import AddRoleForm from "./AddRoleForm";

const { Header, Content } = Layout;

class RolesAndCapabilitiesPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRoles();
        this.props.getCapabilities();
    }

    render() {
        return (
            <>
                <Header className="site-layout-sub-header-background">
                    <PageTitle title="Roles and Capabilities" />
                </Header>
                <Content>
                    <div className="site-layout-background">
                        <SelectFields capabilities={this.props.capabilities} />
                        <Row style={{ marginTop: '40px' }}>
                            <Col span={12}>
                                <AddRoleForm />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </>
        );
    }
};

function mapStateToProps(state) {
    return {
        roles: state.roles.roles,
        capabilities: state.roles.capabilities
    }
}

export default connect(mapStateToProps, { getRoles, getCapabilities })(RolesAndCapabilitiesPage);
