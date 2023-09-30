import { SpendInterface } from "../interfaces"
import OverviewDailySpend from "./OverviewDailySpend";
import Spend from "./Spend";

interface PropsInterface {
    spendOfDay: SpendInterface[]
    time: string
}

const DailySpend = (props: PropsInterface) => {
    const { spendOfDay, time } = props
    let income = 0
    let expense = 0

    spendOfDay?.forEach((spend: SpendInterface) => {
        if (spend.type === 'expense') {
            expense = expense + spend.amount
            return
        }
        income = income + spend.amount
    })

    return (
        <div className="bg-white mb-2">
            <OverviewDailySpend
                time={time}
                income={income}
                expense={expense}
            />

            {
                spendOfDay?.map((spend: SpendInterface, i: number) => {
                    return (
                        <Spend
                            key={i}
                            spend={spend}
                        />
                    )
                })
            }
        </div>
    )
}

export default DailySpend