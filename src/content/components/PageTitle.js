import React from 'react';
import {Button, Col, PageHeader, Row} from 'antd';

const pageTitle = ({title}) => {
    return(
        <Row>
            <Col>
                <PageHeader
                    className="site-page-header"
                    style={{ padding: 0 }}
                    title={title}
                />
            </Col>
        </Row>
    );
};

export default pageTitle;
