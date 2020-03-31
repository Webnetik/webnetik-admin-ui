import React from 'react';

const Box = ({ children }) => {
    return(
        <div style={{ marginTop: '10px' }}>
            {children}
        </div>
    );
};

export default Box;