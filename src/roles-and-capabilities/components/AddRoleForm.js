import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button } from 'antd';
import {getCapabilities, getRoles} from "../actions";
import {createRole} from "../actions/roles";

class AddRoleForm extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            roleName: '',
            formItemLayout: {
                labelCol: {
                    span: 4,
                },
                wrapperCol: {
                    span: 10,
                },
            },
            buttonItemLayout: {
                wrapperCol: {
                    span: 14,
                    offset: 4,
                },
            }
        }
    }

    onChangeRoleName(roleName) {
        this.setState({
            roleName
        });
    }

    onSaveRole(event) {
        event.persist();
        this.props.createRole(this.state.roleName);
    }

    render() {
        return(
            <div>
                <Form
                    {...this.state.formItemLayout}
                >
                    <Form.Item label="Role name">
                        <Input onChange={(event) => this.onChangeRoleName(event.target.value)} />
                    </Form.Item>
                    <Form.Item {...this.state.buttonItemLayout}>
                        <Button type="primary" onClick={(event) => this.onSaveRole(event)}>Add new role</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}

export default connect(null, { createRole })(AddRoleForm);
