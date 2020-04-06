import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Col, Layout, Row} from 'antd';
import PageTitle from '../../common/components/PageTitle';
import { getProfile } from '../actions/index';
import ProfileTable from "./ProfileTable";

const { Header, Content } = Layout;

class ProfilePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getProfile();
    }

    render() {
        console.log(this.props.profile, this.props.profile.profile);

        return (
            <>
                <Header className="site-layout-sub-header-background">
                    <PageTitle title="My profile" />
                </Header>
                <Content>
                    <div className="site-layout-background">
                        <Row style={{ marginTop: '0px', color: 'black' }}>
                            <Col span={12}>
                                <ProfileTable />
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
        profile: state.profile
    }
}

export default connect(mapStateToProps, { getProfile })(ProfilePage);
