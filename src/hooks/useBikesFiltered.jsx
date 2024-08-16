import useAxiosData from "./useAxiosData";
import { useQuery } from "@tanstack/react-query";



const useBikesFiltered = (params) => {
    const {min,max,brands,categories} = params
    const axiosData = useAxiosData()
    const { refetch, data: bikesFiltered = [] } = useQuery({
        queryKey: ['bikeFiltered',min,max,brands,categories],
        queryFn: async () => {
            const res = await axiosData.get(`/bikes/filtered`, {params})
            return res.data
        }
    })
    return [refetch, bikesFiltered]
};


export default useBikesFiltered;