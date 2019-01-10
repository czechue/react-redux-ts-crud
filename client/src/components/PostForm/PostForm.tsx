import React from 'react';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { object, string } from 'yup';

interface FormValues {
    title: string;
    author: string;
}

const initialValues: FormValues = {
    title: '',
    author: 'Anonymous'
};

export const PostForm: React.FunctionComponent = () => {
    return (
        <div>
            <h2>Posts New:</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={(values: FormValues) => console.log(values)}
                validationSchema={object().shape({
                    title: string()
                        .required('Entering your first name is required.')
                        .min(5, 'Minimum 5')
                })}
                render={({
                    touched,
                    handleSubmit,
                    errors
                }: FormikProps<FormValues>) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <div className="field">
                            <label htmlFor="title">Title</label>
                            <Field
                                type="text"
                                name="title"
                                placeholder="Title"
                            />
                            {touched.title && errors.title ? (
                                <div>{errors.title}</div>
                            ) : null}
                        </div>
                        <div className="field">
                            <label htmlFor="author">Author</label>
                            <Field
                                type="text"
                                name="author"
                                placeholder="Author"
                            />
                        </div>
                        <button className="ui button" type="submit">
                            Submit
                        </button>
                    </form>
                )}
            />
        </div>
    );
};
