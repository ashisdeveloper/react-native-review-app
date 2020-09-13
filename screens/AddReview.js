import React from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    content: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', val => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    })
})

function AddReview({ addReview }) {

    return (
        <View style={styles.reviewBox}>
            <Formik
                initialValues={{ title: '', rating: '', content: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    addReview(values)
                    actions.resetForm();
                    // console.log(values)
                }}
            >
                {(props) => {
                    return (
                        <View>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Enter Title"
                                onChangeText={props.handleChange('title')}
                                value={props.values.title}
                                onBlur={props.handleBlur('title')}
                            />
                            <Text style={globalStyles.errText}>{props.touched.title && props.errors.title}</Text>
                            <TextInput
                                multiline
                                minHeight={100}
                                style={globalStyles.input}
                                placeholder="Enter Content"
                                onChangeText={props.handleChange('content')}
                                value={props.values.content}
                                onBlur={props.handleBlur('content')}
                            />
                            <Text style={globalStyles.errText}>{props.touched.content && props.errors.content}</Text>
                            <TextInput
                                style={globalStyles.input}
                                placeholder="Enter Rating"
                                onChangeText={props.handleChange('rating')}
                                value={props.values.rating}
                                onBlur={props.handleBlur('rating')}
                                keyboardType="numeric"
                            />
                            <Text style={globalStyles.errText}>{props.touched.rating && props.errors.rating}</Text>

                            <FlatButton onPress={props.handleSubmit} title="Add review" />

                            {/* <Button onPress={props.handleSubmit} title="Add review" color="maroon" /> */}
                        </View>

                    )
                }}
            </Formik>
        </View>
    )
}

export default AddReview

const styles = StyleSheet.create({
    reviewBox: {
        paddingHorizontal: 40
    }
})