import { Action, ActionTypes } from "../actions/actions";
import ProductCategory from "../models/ProductCategory";

export interface AppState {
    hasError: boolean,
    isLoading: boolean,
    lastUpdated: number,
    productCategories: ProductCategory[]
}

export const initialState: AppState = {
    hasError: false,
    isLoading: false,
    lastUpdated: 0,
    productCategories: []
}

export default function reducer(state: AppState, action: Action) {
    switch(action.type) {
        case ActionTypes.SEE_PRODUCTS:
        case ActionTypes.REQUEST_PRODUCTS:
            return Object.assign({}, state, {
                hasError: false,
                isLoading: true
            })
        case ActionTypes.RECEIVE_PRODUCTS:
            return Object.assign({}, state, {
                hasError: false,
                isLoading: false,
                lastUpdated: action.receivedAt,
                productCategories: action.categories
            })
        default:
            return state
    }
}