const ShopCard = ({title,brandName,category,dateAndTime,description,price,image}) => {
    return (
      <div >
        <div className="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
          <img
            className="object-cover w-full h-48 mt-2 p-3" // Updated with rounded-lg
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
            alt="image"
          />
          <div className="px-4 py-2 space-y-3">
            <h1 className="text-lg font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
            <div>
                <div className="flex justify-between items-center">
                    <h5 className="text-black/90 text-base">Brand: {brandName}</h5>
                    <p className="text-black/90 text-base">Category: {category}</p>
                </div>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Date and Time: {dateAndTime}</p>
            </div>
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-400">
              <span className="font-bold">Description: </span>
              {description}
            </p>
          </div>
          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-lg font-bold text-white">${price}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ShopCard;