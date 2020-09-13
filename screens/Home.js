import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons';
import AddReview from './AddReview';

function Home({ navigation }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [reviews, setReviews] = useState([
        { title: "Review One", rating: 5, content: "Lorem ipsum", key: "1" },
        { title: "Review Two", rating: 4, content: "Lorem ipsum", key: "2" },
        { title: "Review Three", rating: 2, content: "Lorem ipsum", key: "3" },
        { title: "Review Four", rating: 5, content: "Lorem ipsum", key: "4" },
    ])

    /* const onpressHandler = () => {
        navigation.navigate('ReviewDetails');
        // navigation.push('ReviewDetails');
    } */
    // console.log(props)

    const addReview = review => {
        review.key = Math.random().toString();
        setReviews(prevReviews => {
            return [review, ...prevReviews]
        });
        console.log(review)
        setModalVisible(false)
    }

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalVisible} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons style={{ ...styles.modalToggle, ...styles.modalClose }} onPress={() => setModalVisible(false)} name="close" size={28} color="black" />
                        <AddReview addReview={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons style={styles.modalToggle} onPress={() => setModalVisible(true)} name="add" size={28} color="black" />
            <FlatList
                data={reviews}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                            <Card>
                                <Text style={globalStyles.titleText}>{item.title}</Text>
                            </Card>
                        </TouchableOpacity>
                    )
                }}
            />

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    modalToggle: {
        alignSelf: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 3,
        padding: 5
    },
    modalClose: {
        marginTop: 20
    },
    modalContent: {
        flex: 1
    }
})