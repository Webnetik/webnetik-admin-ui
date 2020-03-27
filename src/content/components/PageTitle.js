import React from 'react';
import {Button, Col, PageHeader, Row} from 'antd';

const pageTitle = ({title}) => {
    return(
        <Row>
            <Col>
                <PageHeader
                    avatar={{ }}
                    className="site-page-header"
                    style={{ padding: 0, paddingBottom: "10px" }}
                    title={title}
                />
            </Col>
        </Row>
    );
};

export default pageTitle;
