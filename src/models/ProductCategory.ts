import Product from './Product';

export default interface ProductCategory {
    id: number,
    name: string,
    products: Product[]
}