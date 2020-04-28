import React from 'react';
import { notification } from 'antd';

function openNotification({ title, message }) {
    notification.open({
        message: title,
        description: message,
        duration: 1
    });
};

export default openNotification;
