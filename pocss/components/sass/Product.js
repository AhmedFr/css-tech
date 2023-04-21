export function Product() {
  return (
    <div className='container'>
      <div className='image'></div>
      <div className='info-container'>
        <h3 className='company-name'>Sneaker company</h3>
        <h1>Fall limited edition sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole they ll withstand everything the
          weather can offer
        </p>
        <div className='price-infos-container'>
          <div className='price-container'>
            <p className='price'>125$.00</p>
            <span className='sale'>50%</span>
          </div>
          <p className='og-price'>250$</p>
        </div>
        <button className='final'>Add to cart</button>
      </div>
    </div>
  );
}
