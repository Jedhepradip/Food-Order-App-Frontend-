import { configureStore } from "@reduxjs/toolkit";
import UserReducers from "../Features/UserSlice"
import MenuReducers from "../Features/MenuSlice"
import OrderReducres from "../Features/OrderMenuSlice"
import MenuAllDataReducer from "../Features/AllMenuSlice"
import SetAllUserData from "../Features/AllUserDataSlice";
import RestaurantReducers from "../Features/RestaurantSlice"
import OrderAllDataShow from "../Features/AllOrdersDataSlice";
import AllrestaurantReducer from "../Features/RestaurantAllSlice"
import FiltercuisinesReducer from "../Features/CuisinesFilterSlice"
import SetSearchByCountryReducer from "../Features/SearchByCountrtSlice"

export const store = configureStore({
    reducer: {
        User: UserReducers,
        Menu: MenuReducers,
        Order: OrderReducres,
        AllUser: SetAllUserData,
        OrderAll: OrderAllDataShow,
        MenuAll: MenuAllDataReducer,
        Restaurant: RestaurantReducers,
        Cuisines: FiltercuisinesReducer,
        Search: SetSearchByCountryReducer,
        AllRestaurant: AllrestaurantReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;