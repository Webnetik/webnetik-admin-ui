import React from 'react';
import { PageHeader } from 'antd';

const pageTitle = ({title}) => {
    return(
        <PageHeader
            avatar={{ }}
            className="site-page-header pt-2 pt-md-0"
            style={{ padding: 0, paddingBottom: "10px" }}
            title={title}
        />
    );
};

export default pageTitle;
