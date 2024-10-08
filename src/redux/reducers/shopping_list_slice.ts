import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ShoppingItem {
  id: number;
  name: string;
  quantity: number;
  unit: string;
  purchased: boolean;
}

interface ShoppingListState {
  items: ShoppingItem[];  // Array of shopping items
}

const initialState: ShoppingListState = {
  items: [], // Initialize the items array
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ShoppingItem>) => {
      state.items.push(action.payload); // Push to the items array
    },
    editItem: (state, action: PayloadAction<ShoppingItem>) => {
      const index = state.items.findIndex(item => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; // Update the specific item
      }
    },
    togglePurchased: (state, action: PayloadAction<number>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased; // Toggle the purchased status
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(item => item.id !== action.payload); // Filter out the deleted item
    },
  },
});

export const { addItem, editItem, togglePurchased, deleteItem } = shoppingListSlice.actions;
export default shoppingListSlice.reducer;
