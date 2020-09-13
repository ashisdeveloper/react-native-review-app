import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'
import { globalStyles, reviewImgs } from '../styles/global'
import Card from '../shared/card'

function ReviewDetails({ navigation }) {
    const onpressHandler = () => {
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Card>
                <Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
                <Text>{navigation.getParam('content')}</Text>
                <View style={styles.rating}>
                    <Text>Rating</Text>
                    <Image source={reviewImgs.imgs[navigation.getParam('rating')]} />
                </View>

                <Button title="Back to home" onPress={onpressHandler} />
            </Card>
        </View>
    )
}

export default ReviewDetails

const styles = StyleSheet.create({
    rating: {
        marginVertical: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
})