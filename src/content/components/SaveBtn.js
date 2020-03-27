import React, { PureComponent } from 'react';
import {Button, Col, Row} from 'antd';

class SaveBtn extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            iconLoading: false,
        };
    }

    enterLoading() {
        this.setState({ loading: true });
    };

    render() {
        return (
            <Row>
                <Col className="mt-4 pt-4 pt-md-3">
                    <Button type="primary" loading={this.state.loading} onClick={() => this.enterLoading()}>
                        Save
                    </Button>
                </Col>
            </Row>
        );
    }
};

export default SaveBtn;
