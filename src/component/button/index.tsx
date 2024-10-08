// ActionButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ActionButtonProps {
    title: string;
    onPress: () => void;
    color?: string;
    marginBottom?: number;
}

const ActionButton: React.FC<ActionButtonProps> = ({ title, onPress, color = '#28a745', marginBottom = 0 }) => {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color, marginBottom: marginBottom }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        borderRadius: 8,
        // marginVertical: 16,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 16,
    },
});

export default ActionButton;
