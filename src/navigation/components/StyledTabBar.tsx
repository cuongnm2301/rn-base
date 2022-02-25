import React from 'react';
import { Platform, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Metrics from 'assets/metrics';

const StyledTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
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

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        // accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        style={[styles.tabButton]}
                    >
                        <Image
                            source={options?.icon}
                            style={[styles.tabIcon, { tintColor: isFocused ? 'red' : 'yellow' }]}
                        />
                        <Text style={[styles.tabLabel, { color: isFocused ? 'red' : 'yellow' }]}>
                            {options?.title}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        marginBottom: Platform.OS === 'ios' ? Metrics.safeBottomPadding : 0,
        borderTopColor: '#DEE2E6',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        alignItems: Platform.OS === 'ios' ? 'flex-end' : 'center',
        height: '8%',
    },
    tabButton: {
        alignItems: 'center',
    },
    tabIcon: {
        width: 24,
        height: 24,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    tabLabel: {
        paddingLeft: 4,
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '500',
    },
});

export default StyledTabBar;
