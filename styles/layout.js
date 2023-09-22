import { colours } from "../styles/base";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    scroll: {
      padding: 30,
      marginTop: 30,
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    header: {
      fontSize: 35,
      fontWeight: "bold",
      marginBottom: 25,
      color: colours.accent1,
    },
    input: {
      width: "100%",
      borderColor: colours.accent4,
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      color: colours.accent1,
    },
    input_focused: {
      borderColor: colours.accent4,
      borderWidth: 2,
    },
    button__container: {
      flexDirection: "row",
      justifyContent: "center",
      marginBottom: 10,
      alignItems: "center",
      marginTop: 10,
    },
    button: {
      width: "60%",
      alignItems: "center",
      backgroundColor: colours.accent2,
      padding: 15,
      borderRadius: 5,
      marginBottom: 5,
    },
    button__accent: {
      backgroundColor: colours.accent3,
    },
    button__text: {
      alignItems: "center",
      color: "#fff",
      fontWeight: "bold",
    },
    upload__button: {
      flex: 1,
      marginRight: 15,
      width: "40%",
      alignItems: "center",
      backgroundColor: colours.accent4,
      padding: 10,
      borderRadius: 5,
      marginBottom: 5,
    },
    camera__button: {
      flex: 1,
      width: "40%",
      alignItems: "center",
      backgroundColor: colours.accent4,
      padding: 10,
      borderRadius: 5,
      marginBottom: 5,
    },
    progressBarContainerHidden: {
          width: "100%",
          height: 20,
          backgroundColor: "grey",
          borderRadius: 20,
          marginBottom: 10,
          overflow: "hidden",
          opacity: 0
      },
    progressBarContainerShow: {
          width: "100%",
          height: 20,
          backgroundColor: "grey",
          borderRadius: 20,
          marginBottom: 10,
          overflow: "hidden"
      },
      progressBar: {
          height: "100%",
          backgroundColor: colours.accent2,
      },
      textHide: {
          width: 0,
          height: 0,
          overflow: "hidden",
          opacity: 0
      },
      textShow: {
          overflow: "hidden",
          fontSize: 10,
          color: 'red',
          marginBottom: 10,
      },
      generic__error: {
        overflow: "hidden",
        fontSize: 10,
        color: 'red',
        marginTop: -7,
        alignItems: "center"
      },
      textInput: {
        width: "100%",
        borderColor: colours.accent4,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        color: colours.accent1,
      },
      errorText: {
        fontSize: 10,
        color: 'red',
        marginBottom: 10,
      },
      errorInput: {
        borderColor: 'red',
      }
  });

  
 