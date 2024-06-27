import { Colors } from "@/constants/Colors"
import { StyleSheet, Text } from "react-native"

interface AppTextProps {
    text: string,
    textStyle?: 'header' | 'body' | 'topHeader' | 'bottomBar',
    fontWeight?: "bold" | "700" | "400" | "regular" | "normal"
    color?: string
    fontFamily?: string
    marginBottom?: number
}

const AppText = (props: AppTextProps) => {

    const style = {
        ...styles[props.textStyle || 'body'],
        color: props.color || Colors.text,
        fontWeight: props.fontWeight || 'regular',
        fontFamily: props.fontFamily || "IBM Plex Mono",
        marginBottom: props.marginBottom || 0,
    }
    return <Text style={style}>{props.text}</Text>
}

const styles = StyleSheet.create({
    header: {
        fontSize: 24
    },
    body: {
        fontSize: 16
    },
    topHeader: {
        fontSize: 40,
        opacity: 0.6
    },
    bottomBar: {
        fontSize: 10
    }

})


export default AppText