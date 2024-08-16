import axios from "axios";

const axiosData = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosData = () => {
    return axiosData 
};

export default useAxiosData;