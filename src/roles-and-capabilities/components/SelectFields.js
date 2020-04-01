import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import {Col, Row, Select, Spin} from 'antd';
const { Option } = Select;
import { changeRoleCapability } from '../actions/roles';

class SelectFields extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            roleUnderSave: null
        };
    }

    handleChange(capabilities, roleId) {
        this.setState({
            roleUnderSave: roleId
        });
        this.props.changeRoleCapability(roleId, capabilities).then(r => {
            this.setState({
                roleUnderSave: null
            });
        });
    }

    getOptions(data) {
        const options = [];
        for (let i = 0; i < data.length; i++) {
            options.push(<Option key={data[i].name}>{data[i].name}</Option>);
        }
        return options;
    }

    getRoleCapabilities(role) {
        return role.capabilities.map(capability => capability.name);
    }

    render() {
        if(this.props.roles && this.props.capabilities) {
            return(
                this.props.roles.map(role => {
                    const roleCapabilities = this.getRoleCapabilities(role);

                    return (
                        <Row key={role.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 38 }} style={{ marginTop: '10px' }}>
                            <Col span={8} lg={3} style={{ color: '#999', paddingTop: '5px' }}>
                                {role.name}
                                {this.state.roleUnderSave && role.id === this.state.roleUnderSave && <Spin style={{marginLeft: '10px' }} />}
                            </Col>
                            <Col lg={5}>
                                <Select
                                    mode="multiple"
                                    style={{ minWidth: "200px" }}
                                    placeholder="Please select"
                                    defaultValue={ roleCapabilities }
                                    onChange={ (value) => this.handleChange(value, role.id) }>
                                    { this.getOptions(this.props.capabilities) }
                                </Select>
                            </Col>
                        </Row>
                    )
                })
            );
        } else {
            return <Spin />
        }
    }
}

const mapStateToProps = state => {
    return {
        roles2: state.roles.roles
    }
};

export default connect(mapStateToProps, { changeRoleCapability })(SelectFields);
