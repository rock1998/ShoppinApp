import { combineReducers } from "redux"
import shoppingListSlice from "./shopping_list_slice";


const rootReducers = combineReducers({
    shoppingList: shoppingListSlice
})

export default rootReducers