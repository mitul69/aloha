import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Image, } from "react-native";
import AppText from "./AppText";

const TopSports = () => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AppText text='Top Sports' fontWeight='700' />
            </View>
            {['Maui', 'Kauai', 'Honolulu'].map((item: string, index: number) => {
                return (
                    <View style={styles.boxContainer}>
                        <AppText text={`${index + 1} ${item}`} fontWeight="bold" color={Colors.primary} />
                        <Image source={require('@/assets/images/surfuing.png')} style={styles.categoryImage} />
                    </View>
                )
            })}
        </View>)

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    header: {
        marginTop: 20,
        marginBottom: 10
    },
    boxContainer: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        shadowColor: '#008080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 16,
        marginVertical: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
        justifyContent: "space-between"
    },
    categoryImage: {
        width: 120,
        height: 80,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5
    },

})
export default TopSports;