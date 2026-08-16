import type { Product } from "../types/product";

interface ProductCardProps {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    const discountedPrice = product.price - (product.price * product.discountPercentage) / 100

    return (
        <div className="productCard">
            <img 
            src={product.thumbnail}
            alt={product.title}
            className="productCardImage"
            />

            <h4 className="productCardTitle">{product.title}</h4>
            <p className="productCardCategory">{product.category}</p>

            <div className="productCardPrice">
                <span className="pcpOriginal">${product.price.toFixed(2)}</span>
                <span className="pcpDiscounted">${discountedPrice.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default ProductCard