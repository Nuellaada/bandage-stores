import { useState } from "react";
import { useGetProductsQuery } from "../products/productsApi";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
    const [limit, setLimit] = useState(10)
    const { data, isLoading, isError } = useGetProductsQuery(limit)

    return (
        <section id="featuredProducts">
            <div id="featuredProductsHeadingCont">
                <h4>Featured Products</h4>
                <h3>BESTSELLER PRODUCTS</h3>
                <p id="paragraph">Problems trying to resolve the conflict between </p>
            </div>

            <div id="featuredProductsContainer">
                {isLoading && <p id="paragraph">Loading products...</p>}
                {isError && (
                    <p id="paragraph">Something went wrong loading products. Please try again.</p>
                )}

                {data && data.products.length > 0 && (
                    <div id="featuredProductsGrid">{data.products.map((product) => (<ProductCard key={product.id} product={product} />
                    ))}
                    </div>
                )}

                {data && data.products.length < data.total && (
                    <button id="secondaryButton" onClick={() => setLimit((prev) => prev + 10)}>Load More Products</button>
                )}

            </div>
        </section>
    )
}

export default FeaturedProducts