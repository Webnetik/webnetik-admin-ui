import React from 'react';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

function Confirm({onConfirm, id}) {
    return (
        <Popconfirm
            onConfirm={() => onConfirm(id)}
            title="Delete row"
            icon={<QuestionCircleOutlined
                style={{ color: 'red' }} />}>
            <a href="#">Delete</a>
        </Popconfirm>
    );
};

export default Confirm;
