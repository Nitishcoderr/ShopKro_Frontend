import React from 'react'

const ProductList = ({products,addToCart}) => {
  return (
    <div className="container mb-5">
    <div
      className="row"
      id="products">
        {
            products.map(product =>
                <div className="col-xl-3 col-lg-4 col-md-6 position-relative">
                <div className="card product-item">
                  <i className="bi bi-heart-fill position-absolute liked"></i>
                  <i className="bi bi-heart-fill position-absolute like"></i>
                  <img
                    onClick="goToProductDetails()"
                    src={`./images/${product.image}.jpg`}
                    className="card-img-top"
                    alt="..."
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-title="Click to See Product Details" />
                  <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted fw-light">{product.category}</h6>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text price">
                      {product.price}
                      <span className="float-end">
                        <i className="bi bi-star-fill rating-stars"></i>
                        <i className="bi bi-star-fill rating-stars"></i>
                        <i className="bi bi-star-fill rating-stars"></i>
                        <i className="bi bi-star-fill rating-stars"></i>
                        <i className="bi bi-star-fill rating-stars"></i>
                      </span>
                    </p>
                    <div className="text-center">
                      <a
                        href="#"
                        role="button"
                        className="btn btn-dark w-100"
                        onClick={()=>addToCart(product)}
                        >Add To Cart</a
                      >
                    </div>
                  </div>
                </div>
              </div>
                ) 
        }
    
    </div>
  </div>
  )
}

export default ProductList