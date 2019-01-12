import React from 'react';
import { Field, FieldProps } from 'formik';
import { OwnInnerFieldProps } from '../PostForm/PostForm';

const TextField: React.FunctionComponent<OwnInnerFieldProps> = ({
    title,
    field,
    form
}) => {
    const className = `field ${
        form.touched.title && form.errors.title ? 'error' : null
    }`;
    return (
        <div className={className}>
            <label htmlFor="title">Title</label>
            <Field type="text" name="title" placeholder="Title"/>

            {form.touched.title && form.errors.title ? (
                <div className="ui pointing red basic label">
                    {form.errors.title}
                </div>
            ) : null}
        </div>
    );
};

export default TextField;
