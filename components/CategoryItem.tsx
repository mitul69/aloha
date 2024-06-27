import { Colors } from "@/constants/Colors";
import { StyleSheet, View, Dimensions, Image, Button, TouchableOpacity } from "react-native";
import AppText from "./AppText";
const { width } = Dimensions.get('screen')

interface CategoryItemProps {
    item: any
}

const CategoryItem = (props: CategoryItemProps) => {

    return (<View style={styles.boxContainer}>
        <Image source={require('@/assets/images/surfuing.png')} style={styles.categoryImage} />
        <View style={styles.boxContent}>
            <View style={styles.headerContainer}>
                <AppText text="Surfing" fontWeight="bold" textStyle="header" color={Colors.primary} />
            </View>
            <AppText text="Best Hawaiian islands for surfing." fontWeight="400" />
            <View style={styles.arrowButtonContainer}>
                <TouchableOpacity style={styles.arrowButton}>
                    <Image source={require("@/assets/icons/arrow_forward.png")} />
                </TouchableOpacity>
            </View>
        </View>
    </View>)

}

const styles = StyleSheet.create({
    boxContainer: {
        backgroundColor: Colors.white,
        width: width - 64,
        borderRadius: 20,
        marginLeft: 16,
        shadowColor: '#008080',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.16,
        shadowRadius: 5,
        elevation: 16,
        marginVertical: 10
    },
    categoryImage: {
        width: "100%",
        height: 170,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20
    },
    boxContent: {
        padding: 16
    },
    headerContainer: {
        marginBottom: 16
    },
    arrowButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        marginTop: 16
    },
    arrowButton: {
        backgroundColor: Colors.seecondary,
        padding: 12,
        borderRadius: 20,
        width: 40,
        alignItems: "center"
    }
})
export default CategoryItem;