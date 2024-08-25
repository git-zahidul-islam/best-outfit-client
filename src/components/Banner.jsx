import img from '../assets/images/best-outfit-banner.webp'

const Banner = () => {
return (
    <div className="relative bg-cover bg-center h-64 md:h-80 lg:h-96" style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-gray-900 opacity-15"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        
        
        </div>
    </div>
);
};

export default Banner;
