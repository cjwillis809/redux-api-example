import * as React from 'react';
import { ProductCategoryViewProps } from '../../containers/ProductCategoryContainer';
import ProductList from '../ProductList/ProductList';

const ProductCategoryView = (props: ProductCategoryViewProps) => {
    return (
        <div>
            {
                props.productCategories.map(pc => 
                    <ProductList
                        key={pc.id} 
                        productCategory={pc} />
                )
            }
        </div>
    );
}

export default ProductCategoryView;