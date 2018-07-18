import * as React from 'react';
import Product from '../../models/Product';
import './ProductTile.css';

interface Props {
    product: Product
}

const ProductTile = (props: Props) => {
    return (
        <div className="tileDiv">
            <img src={props.product.tileThumbnail} className="imageSize"/>
            <p className="titleText">{props.product.productTitle}</p>
            <p>{props.product.productDescription}</p>
        </div>
    );
}

export default ProductTile;