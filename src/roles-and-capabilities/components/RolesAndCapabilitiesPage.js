import React, { Component } from 'react';
import {Col, Layout, Row} from 'antd';
import MyMenu from '../../menu/components/Menu';
import PageTitle from '../../content/components/PageTitle';
import SelectFields from "./SelectFields";
import SaveBtn from "./SaveBtn";

const { Header, Content } = Layout;

class RolesAndCapabilitiesPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header className="site-layout-sub-header-background" style={{ height: '30px', padding: 0, paddingTop: '13px', paddingBottom: '12px', lineHeight: '18px', paddingLeft: '20px' }}>
                </Header>
                <Content>
                    <div className="site-layout-background" style={{ paddingTop: '20px', paddingLeft: "20px", minHeight: 360 }}>
                        <Row>
                            <Col>
                                <PageTitle title="Roles and Capabilities" />
                            </Col>
                        </Row>
                        <SelectFields />
                        <Row>
                            <Col>
                                <SaveBtn />
                            </Col>
                        </Row>
                    </div>
                </Content>
            </>
        );
    }
};

export default RolesAndCapabilitiesPage;
