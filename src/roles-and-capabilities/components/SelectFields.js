import React from 'react';
import {Col, Row, Select, Spin} from 'antd';
const { Option } = Select;

const selectFields = ({ roles, capabilities }) => {
    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    function getOptions(data) {
        const options = [];
        for (let i = 0; i < data.length; i++) {
            options.push(<Option key={data[i].name}>{data[i].name}</Option>);
        }
        return options;
    }

    if(roles && capabilities) {
        return(
            <>
                {
                    roles.map(role => {
                        const roleCapabilities = role.capabilities.map(capability => capability.name);

                        console.log('roleCapabilities: ', roleCapabilities);
                        console.log('capabilities: ', capabilities);

                        return (
                            <Row key={role.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 38 }} style={{ marginTop: '10px' }}>
                                <Col span={8} lg={3} style={{ color: '#999', paddingTop: '5px' }}>
                                    {role.name}
                                </Col>
                                <Col lg={5}>
                                    <Select
                                        mode="multiple"
                                        style={{ minWidth: "200px" }}
                                        placeholder="Please select"
                                        defaultValue={ roleCapabilities }
                                        onChange={ handleChange }>
                                        { getOptions(capabilities) }
                                    </Select>
                                </Col>
                            </Row>
                        )
                    })
                }
            </>
        );
    } else {
        return <Spin />
    }
};

export default selectFields;