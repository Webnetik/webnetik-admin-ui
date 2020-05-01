import React from 'react';
import { notification } from 'antd';

function openNotification({ title, message, type }) {
    notification[type]({
        message: title,
        description: message,
        duration: 2
    });
};

export default openNotification;
