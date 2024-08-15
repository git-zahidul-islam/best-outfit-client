import { useEffect, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import ShopCard from '../../components/ShopCard';

const Home = () => {
    const [products, setProducts] = useState([]);
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axiosPublic.get('/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className='mx-auto w-[95%] my-5'>
            <div className='flex items-center justify-center gap-5'>
                <p>search</p>
                <p>filter</p>
            </div>

            <div className='flex justify-between items-center my-5'>
                <p>Category</p>
                <p>Sorting</p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-5'>
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
                    <p className='text-red-400 font-bold text-3xl'>Loading products...</p>
                )}
            </div>
        </div>
    );
};

export default Home;