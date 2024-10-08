import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface CustomCheckboxProps {
    value: boolean;
    onValueChange: () => void;
    label: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ value, onValueChange, label }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onValueChange} style={styles.checkbox}>
                {value ? <View style={styles.checked} /> : null}
            </TouchableOpacity>
            <Text style={styles.label}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: 8,
        flex: 1
    },
    checkbox: {
        width: 24,
        height: 24,
        borderWidth: 2,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    checked: {
        width: 14,
        height: 14,
        backgroundColor: '#000',
    },
    label: {
        fontSize: 16,
        flex: 1
    },
});

export default CustomCheckbox;
