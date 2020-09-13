import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    titleText: {
        fontSize: 18,
        fontFamily: 'syne-bold'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#999',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
        marginBottom: 10
    },
    errText: {
        color: 'crimson',
        marginBottom: 10
    }
})

export const reviewImgs = {
    imgs: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-1.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png')
    }
}