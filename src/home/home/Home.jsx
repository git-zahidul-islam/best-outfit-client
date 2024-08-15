import { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Home = () => {
  const axiosPublic = useAxiosPublic()
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchProducts = async () => {
    try {
      const response = await axiosPublic.get("/products", {
        params: {
          page,
          limit: 6, // Number of products per page
          search,
          brand,
          category,
          minPrice,
          maxPrice,
          sortBy,
          sortOrder,
        },
      });
      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page, search, brand, category, minPrice, maxPrice, sortBy, sortOrder]);

  return (
    <div className="md:w-[92%] w-[95%] mx-auto">
      {/* Search and Filters */}
      <div className="flex md:flex-row flex-col justify-center my-8">
        <input
          type="text"
          placeholder="Search by product name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded mb-2 mr-2"
        />
        <select
          onChange={(e) => setBrand(e.target.value)}
          className="border p-2 rounded mb-2 mr-2"
        >
          <option value="">All Brands</option>
          <option value="Gucci">Gucci</option>
          <option value="Ralph Lauren">Ralph Lauren</option>
          <option value="Calvin Klein">Calvin Klein</option>
          <option value="Hugo Boss">Hugo Boss</option>
        </select>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded mb-2 mr-2"
        >
          <option value="">All Categories</option>
          <option value="Shoe(s)">Shoe(s)</option>
          <option value="Shirt">Shirt</option>
          <option value="T-shirt">T-shirt</option>
          <option value="Pant">Pant</option>
        </select>
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border p-2 rounded mb-2 mr-2 md:w-40 w-full"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border p-2 rounded mb-2 mr-2 md:w-40 w-full"
        />

        {/* Sort By Dropdown */}
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border p-2 rounded mb-2 mr-2"
        >
          <option value="">Sort By</option>
          <option value="price">Price</option>
          <option value="creationDate">Date</option> {/* Updated Label */}
        </select>

        {/* Conditionally Render Sort Options */}
        {sortBy === "price" && (
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded mb-2"
          >
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
        )}

        {sortBy === "creationDate" && (
          <select
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded mb-2"
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        )}

      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ShopCard
              key={product._id}
              brandName={product?.brandName}
              category={product?.category}
              dateAndTime={product?.creationDate}
              description={product?.description}
              price={product?.price}
              image={product?.productImage}
              title={product?.productName}
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center my-5">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="bg-blue-600 text-white border px-3 py-1 mx-1 rounded"
        >
          Previous
        </button>
        <span className="px-3 py-1 mx-1">{`Page ${page} of ${totalPages}`}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className="border px-3 py-1 mx-1 rounded bg-blue-600 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
