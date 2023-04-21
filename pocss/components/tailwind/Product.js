export function Product() {
  return (
    <div className='flex py-16 space-x-16 '>
      <div className='bg-orange-200 w-[300px] rounded-lg'></div>
      <div className='py-8 space-y-4 w-[400px]'>
        <h3 className='uppercase font-bold text-orange-400 text-lg'>
          Sneaker company
        </h3>
        <h1 className='text-4xl capitalize font-bold'>
          Fall limited edition sneakers
        </h1>
        <p className='text-gray-500 text-sm'>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole they ll withstand everything the
          weather can offer
        </p>
        <div>
          <div className='flex space-x-6 items-center'>
            <p className='font-bold text-xl'>125$.00</p>
            <span className='bg-yellow-100 text-sm px-2 rounded text-orange-400 font-bold'>
              50%
            </span>
          </div>
          <p className='text-gray-400 line-through'>250$</p>
        </div>
        <button className='bg-orange-400 rounded-lg shadow-lg shadow-orange-300 transition duration-300 ease-in-out hover:shadow-none px-16 py-2 text-white font-bold'>
          Add to cart
        </button>
      </div>
    </div>
  );
}
