import React from 'react';
import { Field, FieldProps, Formik, FormikErrors, FormikProps } from 'formik';
import { object, string } from 'yup';
import TextField from '../TextField/TextField';
import { Post } from '../../reducers/postsReducer';

export interface FormValues {
    title: string;
    author: string;
}

export type OwnPostFormProps = {
    onSubmit: (post: Post) => void;
    initialValues: FormValues;
    currentPost?: Post;
};

export type OwnInnerFieldProps = FieldProps<FormValues> & FormValues;

export const PostForm: React.FunctionComponent<OwnPostFormProps> = props => {
    const enchanceId = (values: FormValues): Post => {
        return {
            ...values,
            id: props.currentPost
                ? props.currentPost.id
                : Math.round(Math.random() * 10e4)
        };
    };

    return (
        <div>
            <h2>Posts New:</h2>
            <Formik
                initialValues={props.initialValues}
                onSubmit={(values: FormValues) =>
                    props.onSubmit(enchanceId(values))
                }
                validationSchema={object().shape({
                    title: string()
                        .required('Entering your first name is required.')
                        .min(5, 'Minimum 5')
                })}
                render={({
                    touched,
                    handleSubmit
                }: FormikProps<FormValues>) => (
                    <form onSubmit={handleSubmit} className="ui form">
                        <Field
                            name="title"
                            render={(innerProps: OwnInnerFieldProps) => (
                                <TextField {...innerProps} title="Title" />
                            )}
                        />
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
