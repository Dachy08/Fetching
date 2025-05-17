import "./ProductCard.css"

function ProductCard({ product }) {
  const { title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images } = product

  const isBestSeller = rating > 3
  const isOutOfStock = stock === 0

  const discountedPrice = price - price * (discountPercentage / 100)

  return (
    <div className="product-card">
      {isBestSeller && <div className="best-seller-badge">Best Seller</div>}
      {isOutOfStock && <div className="out-of-stock">Out of Stock</div>}

      <div className="product-image">
        <img src={thumbnail || "/placeholder.svg"} alt={title} />
      </div>

      <div className="product-info">
        <h2>{title}</h2>
        <p className="brand">{brand}</p>
        <p className="category">{category}</p>
        <p className="description">{description}</p>

        <div className="price-container">
          {discountPercentage > 0 ? (
            <>
              <p className="original-price">${price.toFixed(2)}</p>
              <p className="discounted-price">${discountedPrice.toFixed(2)}</p>
              <p className="discount-percentage">-{discountPercentage}%</p>
            </>
          ) : (
            <p className="price">${price.toFixed(2)}</p>
          )}
        </div>

        <div className="rating">
          <span className="stars">
            {"★".repeat(Math.floor(rating))}
            {"☆".repeat(5 - Math.floor(rating))}
          </span>
          <span className="rating-value">{rating}</span>
        </div>

        <p className="stock">In Stock: {stock}</p>
      </div>
    </div>
  )
}

export default ProductCard
