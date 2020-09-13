import React from 'react'
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

function Header({ title, navigation }) {
    // console.log(navigation)
    const openHandler = () => {
        navigation.toggleDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons onPress={openHandler} style={styles.headerIcon} name="menu" size={28} color="black" />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerLogo} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerIcon: {
        position: 'absolute',
        left: 0
    },
    headerTitle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        letterSpacing: 1
    },
    headerLogo: {
        width: 20,
        height: 20,
        marginHorizontal: 10
    }
})