
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import AppText from './AppText';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {

    const icons: any = {
        'index': (color: string) => <Image tintColor={color} source={require("@/assets/icons/home.png")} />,
        'surfing': (color: string) => <Image tintColor={color} source={require("@/assets/icons/surfing.png")} />,
        'hula': (color: string) => <Image tintColor={color} source={require("@/assets/icons/hula.png")} />,
        'vulcano': (color: string) => <Image tintColor={color} source={require("@/assets/icons/vulcano.png")} />,
    }
    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                // const icon = options.tabBarIcon({ color: isFocused ? Colors.primary : Colors.black });
                const color = isFocused ? Colors.primary : Colors.black
                return (
                    <TouchableOpacity
                        key={route.key}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={isFocused ? styles.acivetTab : styles.tab}
                    >


                        {icons[route.name](color)}
                        <AppText text={options.title || ""} textStyle='bottomBar' color={color} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        marginBottom: 15
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 72,
        borderBottomColor: Colors.white,
        borderBottomWidth: 4
    },
    acivetTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 72,
        borderBottomColor: Colors.primary,
        borderBottomWidth: 4
    },
});

export default CustomTabBar;
