import React from 'react'

const ProductDetails = ({product,addToCart}) => {
  return (
    <>
      <div className="container mb-5 mt-5">
      <div className="row d-flex flex-row">
        <div className="col-md-5 product-image">
          <img
            className="img-fluid"
            src={`/images/${product.img[0]}.jpg`}
            alt="" />
        </div>
        <div
          className="col-md-2 product-small d-flex flex-md-column justify-content-start order-md-first">
          <img
            className="img-fluid"
            src={`/images/${product.img[0]}.jpg`}
            alt="" />
          <img
            className="img-fluid"
            src={`/images/${product.img[1]}.jpg`}
            alt="" />

          <img
            className="img-fluid"
            src={`/images/${product.img[2]}.jpg`}
            alt="" />
        </div>
        <div className="col-md-5">
          <h6 className="text-uppercase text-secondry">{product.name}</h6>
          <h2 className="fs-3">{product.category}</h2>
          <h5 className="text-secondry fs-6 fw-bold">{product.price} $</h5>
          <div className="text-secondry text-small">Color:{product.color} </div>
          <div className="my-2">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked={product.color=='red'} />
              <label className="btn btn-danger color-label" htmlFor="btnradio1"><i className="bi bi-check2"></i></label>
            
              <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked={product.color=='green'} />
              <label className="btn btn-success color-label" htmlFor="btnradio2"><i className="bi bi-check2"></i></label>
            
              <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked={product.color=='black'} />
              <label className="btn btn-dark color-label" htmlFor="btnradio3"><i className="bi bi-check2"></i></label>
            </div>
          </div>
          <div className="text-secondry text-small">Size:{product.size}</div>
          <div className="my-2">
            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
              <input type="radio" className="btn-check" name="size" id="btnradio4" autocomplete="off" checked={product.size=='S'} />
              <label className="btn btn-outline-dark " htmlFor="btnradio4">S</label>
            
              <input type="radio" className="btn-check" name="size" id="btnradio5" autocomplete="off" checked={product.size=='M'} />
              <label className="btn btn-outline-dark " htmlFor="btnradio5">M</label>
            
              <input type="radio" className="btn-check" name="size" id="btnradio6" autocomplete="off" checked={product.size=='L'} />
              <label className="btn btn-outline-dark" htmlFor="btnradio6">L</label>
            </div>
          </div>
          
          <button className="btn btn-dark w-100 my-5" onClick={()=>addToCart(product)}>
            <i
              className="bi bi-cart-plus-fill" ></i>
            Add to Cart
          </button>
          <div>
            <span className="text-secondry text-small">Details:</span>
            <div
              className="accordion accordion-flush"
              id="accordionExample">
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne">
                    Accordion Item #1
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classNamees that we use to
                    style each element. These classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo">
                    Accordion Item #2
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classNamees that we use to
                    style each element. These classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2
                  className="accordion-header"
                  id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Accordion Item #3
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by
                    default, until the collapse plugin adds the appropriate classNamees that we use to
                    style each element. These classNamees control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any of this with custom
                    CSS or overriding our default variables. It's also worth noting that just about
                    any HTML can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProductDetails
