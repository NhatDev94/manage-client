import { useQuery } from "react-query"
import spendApi from "../apis/spendApi"

interface PropsInterface {
    month?: number,
    year?: number
}

const useQuerySpends = (props: PropsInterface) => {
    const now = new Date()
    const { month, year } = props

    const monthLocaStorage = localStorage.getItem('currentMonth')
    const yearLocaStorage = localStorage.getItem('currentYear')

    const currentMonth = month || monthLocaStorage && JSON.parse(monthLocaStorage) || now.getMonth()
    const currentYear = year || yearLocaStorage && JSON.parse(yearLocaStorage) || now.getFullYear()

    const { data, isLoading, refetch } = useQuery({
        queryKey: 'spends',
        queryFn: () => spendApi.getSpends(currentMonth + 1, currentYear),
        cacheTime: 6000,
        staleTime: 6000,
    })

    return {
        spends: data?.data,
        income: data?.income,
        expense: data?.expense,
        isLoading,
        refetch
    }
}

export default useQuerySpends