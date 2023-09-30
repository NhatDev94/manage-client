import { currency } from "../utils"

interface PropsInterface {
    income: number,
    expense: number
}


const OverviewInListSpend = (props: PropsInterface) => {
    const { income, expense} = props
    return (
        <div className="flex items-center justify-between border-b border-black/30 py-1">
            <div className="w-full text-center">
                <p className="text-xs font-semibold">Income</p>
                <span className="text-xs font-semibold text-blue-500">{currency.formatVND(income)}</span>
            </div>
            <div className="w-full text-center">
                <p className="text-xs font-semibold">Expense</p>
                <span className="text-xs font-semibold text-red-500">{currency.formatVND(expense)}</span>
            </div>
            <div className="w-full text-center">
                <p className="text-xs font-semibold">Total</p>
                <span className="text-xs font-semibold text-black">{currency.formatVND(income - expense)}</span>
            </div>
        </div>
    )
}

export default OverviewInListSpend