import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Image } from "react-native";
import AppText from "./AppText";
import AppButton from "./AppButton";



const TravelGuidCard = () => {

    return (<View>
        <View style={styles.header}>
            <AppText text='Travel Guide' fontWeight='700' />
        </View>
        <View style={styles.boxContainer}>

            <View>
                <AppText text="Hadwin Malone" fontWeight="700" textStyle="header" marginBottom={10} />
                <AppText text="Guide since 2012" fontWeight="400" />
                <View style={{ marginTop: 16 }}>
                    <AppButton text="Contact" buttonStyle="outline" />
                </View>
            </View>
            <Image source={require("@/assets/images/user.png")} style={styles.userImage} />
        </View>
    </View>)

}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 10
    },
    boxContainer: {
        backgroundColor: Colors.white,
        borderRadius: 20,
        shadowColor: '#008080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 16,
        marginVertical: 10,
        flexDirection: "row",
        padding: 16,
        justifyContent: "space-between"
    },
    userImage: {
        height: 74,
        width: 74,
        borderRadius: 37
    }
})
export default TravelGuidCard;