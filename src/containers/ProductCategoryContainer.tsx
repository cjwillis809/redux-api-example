import { connect } from "react-redux";
import ProductCategoryView from "../components/ProductCategoryView/ProductCategoryView";
import ProductCategory from "../models/ProductCategory";
import { AppState } from "../reducers";

export interface ProductCategoryViewProps {
    productCategories: ProductCategory[]
}

const mapStateToProps = (state: AppState) => ({
    productCategories: state.productCategories
})

export const ProductCategoryContainer = connect(mapStateToProps)(ProductCategoryView)