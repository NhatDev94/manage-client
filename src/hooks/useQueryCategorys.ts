import { useQuery } from "react-query"
import spendApi from "../apis/spendApi"

const useQueryCategorys = () => {
    const { data, isLoading, refetch} = useQuery({
        queryKey: 'categorys',
        queryFn: spendApi.getCategorys,
        cacheTime: 60000,
        staleTime: 60000
    })
    
    return {
        data,
        isLoading,
        refetch
    }
}

export default useQueryCategorys