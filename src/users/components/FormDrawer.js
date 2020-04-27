import React, { Component } from 'react';
import { Drawer, Button } from 'antd';

class FormDrawer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Drawer
                    title={this.props.title}
                    placement="right"
                    closable={true}
                    width={600}
                    onClose={ this.props.closeDrawer }
                    visible={this.props.visible}
                >
                    {this.props.children}
                </Drawer>
            </div>
        );
    }
}

export default FormDrawer;
