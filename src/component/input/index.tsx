// InputField.tsx
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { getMargin } from '../../constants/helper';

interface InputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder: string;
    keyboardType?: 'default' | 'numeric';
}

const InputField: React.FC<InputFieldProps> = ({ value, onChangeText, placeholder, keyboardType }) => {
    return (
        <TextInput
            style={styles.inputContainer}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
        />
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        height: getMargin(40),
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 8,
        marginBottom: 12,
        backgroundColor: '#ffffff',
    },
});

export default InputField;
