import React from 'react'
import { View, TouchableWithoutFeedback, Text, StyleSheet } from 'react-native'

function FlatButton({ title, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonTitle}>{title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FlatButton
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#f011d7',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5
    },
    buttonTitle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})