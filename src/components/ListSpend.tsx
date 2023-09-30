import { spendOfMonthInterface } from "../interfaces"
import DailySpend from "./DailySpend"
import OverviewInListSpend from "./OverviewInListSpend"

interface PropsInterface {
    spendsOfMonth: spendOfMonthInterface,
    income: number,
    expense: number,
}

const ListSpend = (props: PropsInterface) => {
    const { spendsOfMonth = {}, income, expense } = props

    return (
        <div className="pb-4">
            <OverviewInListSpend
                income={income}
                expense={expense}
            />

            <div className="w-full h-[calc(100vh-114px)] overflow-y-scroll pb-20">
                {
                    Object.keys(spendsOfMonth)?.map((keyName: string, i: number) => {
                        const spendOfDay = spendsOfMonth[keyName]
                        return (
                            <DailySpend
                                key={i}
                                time={keyName}
                                spendOfDay={spendOfDay}

                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListSpend