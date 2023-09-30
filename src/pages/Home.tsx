import CreateSpend from "../components/CreateSpend"
import ListSpend from "../components/ListSpend"
import TimeRangeTitle from "../components/TimeRangeTitle"
import spendApi from "../apis/spendApi"
import { useQuery } from "react-query"
import { useEffect, useState } from "react"

const Home = () => {
    const now = new Date()

    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth())

    const { data = {}, refetch } = useQuery({
        queryKey: 'spend',
        queryFn: () => spendApi.getSpends(month + 1, year),
        cacheTime: 6000,
        staleTime: 6000,
    })

    const { data: spends, income, expense } = data

    useEffect(() => {
        refetch()
    }, [month, year])

    return (
        <div className="w-full bg-gray-100">
            <TimeRangeTitle
                year={year}
                month={month}
                setYear={setYear}
                setMonth={setMonth}
            />
            
            {
                spends && (
                    <ListSpend
                        spendsOfMonth={spends}
                        income={income}
                        expense={expense}
                    />
                )
            }

            <CreateSpend />
        </div>
    )
}

export default Home