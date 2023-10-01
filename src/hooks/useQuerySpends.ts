import { useQuery } from "react-query"
import spendApi from "../apis/spendApi"

interface PropsInterface {
    month?: number,
    year?: number
}

const useQuerySpends = (props: PropsInterface) => {
    const now = new Date()
    const { month = now.getMonth(), year = now.getFullYear() } = props

    const { data, isLoading, refetch } = useQuery({
        queryKey: 'spends',
        queryFn: () => spendApi.getSpends(month + 1, year),
        cacheTime: 6000,
        staleTime: 6000,
    })

    return {
        data,
        isLoading,
        refetch
    }
}

export default useQuerySpends