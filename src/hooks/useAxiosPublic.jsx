import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://server-wheat-three.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;

