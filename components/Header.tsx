import { Image, StyleSheet, View } from "react-native"


const Header = () => {
    return (<View style={styles.header}>
        <Image source={require("@/assets/images/logo.png")} />
    </View>)
}

export default Header;

const styles = StyleSheet.create({
    header: {
        padding: 10,
        alignItems: "center"
    },
});