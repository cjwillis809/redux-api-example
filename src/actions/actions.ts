import { Dispatch } from "redux";
import ProductCategory from "../models/ProductCategory";

export enum ActionTypes {
    REQUEST_PRODUCTS = "REQUEST_PRODUCTS", // Async
    INVALIDATE_PRODUCTS = "INVALIDATE_PRODUCTS", // Async
    RECEIVE_PRODUCTS = "RECEIVE_PRODUCTS", // Async
    SEE_PRODUCTS = "SEE_PRODUCTS" // Sync
}

export interface FetchProductsAction {
    type: ActionTypes.REQUEST_PRODUCTS
}

export interface SeeProductsAction {
    type: ActionTypes.SEE_PRODUCTS
}

export interface ReceiveProductsAction {
    categories: ProductCategory[],
    receivedAt: number,
    type: ActionTypes.RECEIVE_PRODUCTS
}

export interface ProductErrorAction {
    type: ActionTypes.INVALIDATE_PRODUCTS
}

export function retrieveProducts(): SeeProductsAction {
    return {
        type: ActionTypes.SEE_PRODUCTS
    }
}

export function requestProducts(): FetchProductsAction {
    return {
        type: ActionTypes.REQUEST_PRODUCTS
    }
}

export function receiveProducts(json: any): ReceiveProductsAction {
    return {
        categories: json,
        receivedAt: Date.now(),
        type: ActionTypes.RECEIVE_PRODUCTS
    }
}

export function invalidateProducts(): ProductErrorAction {
    return {
        type: ActionTypes.INVALIDATE_PRODUCTS
    }
}

/**
 * Thunk action creator
 */
export function fetchProducts(): any {
    return (dispatch: Dispatch) => {
        // Inform app state API call is starting
        dispatch(requestProducts())

        return fetch('https://localhost:5001/api/values', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(
                response => response.json(),
                error => console.log('An error occured.', error)
            )
            .then(json => dispatch(receiveProducts(json)))
    }
}

export type Action = SeeProductsAction | FetchProductsAction | ReceiveProductsAction | ProductErrorAction