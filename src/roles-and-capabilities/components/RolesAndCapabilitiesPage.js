import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Layout, Row, Spin} from 'antd';
import PageTitle from '../../content/components/PageTitle';
import SelectFields from "./SelectFields";
import SaveBtn from "./SaveBtn";
import { getRoles, getCapabilities } from '../actions/index';

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
                <Header className="site-layout-sub-header-background" style={{ height: '30px', padding: 0, paddingTop: '13px', paddingBottom: '12px', lineHeight: '18px', paddingLeft: '20px' }}>
                </Header>
                <Content>
                    <div className="site-layout-background" style={{ paddingTop: '30px', paddingLeft: "20px", minHeight: 360 }}>
                        <Row>
                            <Col>
                                <PageTitle title="Roles and Capabilities" />
                            </Col>
                        </Row>
                        <SelectFields roles={this.props.roles} capabilities={this.props.capabilities} />
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
