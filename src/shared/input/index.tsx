import React from 'react';

const Input = ({ formProps, ...props }: any) => {
    return (
        <input {...formProps} {...props} />
    );
}

export default Input;