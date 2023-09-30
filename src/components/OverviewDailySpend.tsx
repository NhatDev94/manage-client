import moment from 'moment'
import { currency } from '../utils'

interface PropsInterface {
    time: string,
    income: number,
    expense: number
}

const OverviewDailySpen = (props: PropsInterface) => {
    const { time, income, expense } = props

    const day = moment(time).format('DD')
    const dayString = moment(time).format('ddd')
    const monthAndYear = moment(time).format('MM/YYYY')

    return (
        <div className="w-full flex items-center justify-between px-4 border-b border-t border-black/10 py-1">
            <div className="flex items-center justify-start w-3/5">
                <span className='text-base font-bold text-black'>{day}</span>
                <span className='text-xs font-normal text-white px-1.5 rounded-sm bg-gray-400 mx-1.5'>{dayString}</span>
                <span className='text-xs font-normal text-gray-400'>{monthAndYear}</span>
            </div>
            <div className="w-2/5 flex items-center justify-between ">
                <span className="text-xs font-semibold text-blue-500">{currency.formatVND(income)}</span>
                <span className="text-xs font-semibold text-red-500">{currency.formatVND(expense)}</span>
            </div>
        </div>
    )
}

export default OverviewDailySpen