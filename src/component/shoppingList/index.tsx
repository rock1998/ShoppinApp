import React, { useState } from 'react';
import { ShoppingItem } from '../../types';
import { addItem, editItem, togglePurchased, deleteItem } from '../../redux/reducers/shopping_list_slice';
import { FlatList, View, StyleSheet, SafeAreaView, Alert, Animated, Keyboard } from 'react-native';
import InputField from '../input';
import ActionButton from '../button';
import CustomCheckbox from '../checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { shoppingItemData } from '../../redux/selector';

const ShoppingList = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(shoppingItemData);
    const [name, setName] = useState<string>('');
    const [quantity, setQuantity] = useState<string>('');
    const [unit, setUnit] = useState<string>('');
    const [editingItemId, setEditingItemId] = useState<number | null>(null); // Track the item being edited

    const handleAddOrEditItem = () => {
        // dismiss keyboard
        Keyboard.dismiss();
        if (name && quantity && unit) {
            const itemPayload = {
                id: editingItemId !== null ? editingItemId : Date.now(),
                name,
                quantity: Number(quantity),
                unit,
                purchased: false,
            };

            if (editingItemId !== null) {
                // If editing, dispatch edit action
                dispatch(editItem(itemPayload));
                setEditingItemId(null); // Reset after editing
            } else {
                // If not editing, dispatch add action
                dispatch(addItem(itemPayload));
            }

            // Clear input fields
            setName('');
            setQuantity('');
            setUnit('');
        } else {
            Alert.alert('Please fill all fields');
        }
    };

    const handleDelete = (id: number) => {
        // Animate on item deletion
        dispatch(deleteItem(id));
    };

    const handleEdit = (item: ShoppingItem) => {
        // Populate fields with the selected item's values
        setName(item.name);
        setQuantity(item.quantity.toString());
        setUnit(item.unit);
        setEditingItemId(item.id); // Set the item ID to indicate editing
    };

    const renderItem = ({ item }: { item: ShoppingItem }) => (
        <Animated.View style={styles.itemContainer}>
            <CustomCheckbox
                value={item.purchased}
                onValueChange={() => dispatch(togglePurchased(item.id))}
                label={`${item.name} (${item.quantity} ${item.unit})`}
            />
            <View style={styles.actionContainer}>
                <ActionButton title="Edit" onPress={() => handleEdit(item)} color="#007BFF" />
                <ActionButton title="Delete" onPress={() => handleDelete(item.id)} color="#dc3545" />
            </View>
        </Animated.View>
    );

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.mainContainer}>
                <InputField
                    value={name}
                    onChangeText={setName}
                    placeholder="Item name"
                />
                <InputField
                    value={quantity}
                    onChangeText={setQuantity}
                    placeholder="Quantity"
                    keyboardType="numeric"
                />
                <InputField
                    value={unit}
                    onChangeText={setUnit}
                    placeholder="Unit"
                />
                <ActionButton title={editingItemId !== null ? "Save Changes" : "Add Item"} onPress={handleAddOrEditItem} />
                <FlatList
                    data={items}
                    keyExtractor={(item: ShoppingItem) => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            </View>
        </SafeAreaView>
    );
};

export default ShoppingList;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: '#f8f8f8',
    },
    mainContainer: {
        flex: 1,
        padding: 16,
        alignItems: 'stretch',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff',
        borderRadius: 8,
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        gap: 10
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    listContainer: {
        paddingBottom: 20,
        gap: 10,
        marginTop: 30
    },
});
