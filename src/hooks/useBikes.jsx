import useAxiosData from "./useAxiosData";
import { useQuery } from "@tanstack/react-query";



const useBikes = () => {
    const axiosData = useAxiosData()
    const { refetch, data: bikes = [] } = useQuery({
        queryKey: ['bike', ""],
        queryFn: async () => {
            const res = await axiosData.get(`/bikes`)
            return res.data
        }
    })
    return [refetch, bikes]
};


export default useBikes;