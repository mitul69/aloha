import { StyleSheet, View, Image } from "react-native";

import { Colors } from "@/constants/Colors";

import AppText from "./AppText";

const Categories = () => {

    return (
        <View>
            <View style={styles.header}>
                <AppText text='Catergories' fontWeight='700' />
            </View>
            {['Adventure', 'Culinary', 'Eco-tourism', 'Family', 'Sport'].map((item: string, index: number) => {
                return (
                    <View style={styles.container}>
                        <AppText text={item} />
                        <Image source={require("@/assets/icons/arrow_forward.png")} />
                    </View>
                )
            })}
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 10
    },
    container: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        marginBottom: 8,
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

})
export default Categories;