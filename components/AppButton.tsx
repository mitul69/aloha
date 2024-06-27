import { Colors } from "@/constants/Colors"
import { StyleSheet, TouchableOpacity } from "react-native"
import AppText from "./AppText"

interface AppTextProps {
    text: string,
    buttonStyle?: 'filled' | 'outline',
    fontWeight?: "bold" | "700" | "400" | "regular" | "normal"
    color?: string
    fontFamily?: string
    marginBottom?: number
}

const AppButton = (props: AppTextProps) => {

    const buttonStyle = {
        ...styles[props.buttonStyle || 'filled'],
    }
    const color = props.color ? props.color : props.buttonStyle === "filled" ? Colors.white : Colors.primary;
    return <TouchableOpacity style={buttonStyle}>
        <AppText  {...props} text={props.text} fontWeight='700' color={color} />
    </TouchableOpacity>

}

const styles = StyleSheet.create({
    filled: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: "center"
    },
    outline: {
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        alignItems: "center"
    }
})


export default AppButton