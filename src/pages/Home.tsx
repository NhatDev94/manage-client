import CreateSpend from "../components/CreateSpend"
import ListSpend from "../components/ListSpend"
import TimeRangeTitle from "../components/TimeRangeTitle"
import { useEffect, useState } from "react"
import { useQuerySpends } from "../hooks"

const Home = () => {
    const now = new Date()

    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth())

    const { data = {}, refetch } = useQuerySpends({month, year})

    const { data: spends, income, expense } = data

    useEffect(() => {
        refetch()
    }, [month, year, refetch])

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