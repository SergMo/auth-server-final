import { StyleSheet } from "react-native"
import { colours } from "./base"

export const styles = StyleSheet.create({
    swimReviewGroup: {
        padding: '2%',
        // borderRadius: 20,
        // borderStyle: 'solid',
        // borderColor: 'white',
        // borderWidth: 1,
        // elevation: 10,
        display: 'flex',
        gap: 10
    },
    swimReviewItem: {
        padding: '2%',
        backgroundColor: 'white',
        height: 'auto',
        borderRadius: 20,
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        elevation: 10,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        width: 'auto'
    },
    textContainer: {
        flex: 1,
    },
    nickname: {

    },
    notes: {
    },
    stars: {

    },
    showContent: {
        opacity:1
    },
    hideContent: {
        opacity: 0,
        height: 0
    },
    profileImage: {
        objectFit: 'contain',
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: 'black'
    }
})

export const props = {
    KeyboardAvoidingView: {
        behavior: Platform.OS === 'ios' ? 'padding' : 'height',
        keyboardVerticalOffset: Platform.OS === 'ios' ? 0 : -300
    }
}