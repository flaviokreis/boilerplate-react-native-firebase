import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default Container = ({ onPress, children }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
            {children}
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});