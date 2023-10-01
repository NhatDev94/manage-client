import { CategoryInterface, SpendInterface } from "../interfaces"
import { currency } from "../utils"

interface PropsInterface {
    category: CategoryInterface,
    spends: SpendInterface[]
}

const CategoryChart = (props: PropsInterface) => {
    const { category, spends } = props

    const getUsedInfo = (used: number, limit: number) => {
        const usedPercen = (used * 100) / limit
        return {
            percent: usedPercen > 100 ? 100 : Math.round(usedPercen),
            background: 'green'
        }
    }

    const getTotalAmountByCategory = () => {
        let result: number = 0
        // spends?.forEach((item: SpendInterface) => {
        //     if (item.category)
        // })
    }

    return (
        <div className="mt-5">
            <p className="mb-1 text-black font-semibold text-sm">{category?.name}</p>
            <div className="w-full flex items-end justify-between">
                <div className="w-2/3 h-5 relative rounded-md">
                    <p className="absolute top-0 left-0 z-10 w-full h-full bg-gray-400"></p>
                    <div
                        className='absolute top-0 left-0 z-20 h-full rounded-sm flex items-center justify-center text-xs font-semibold text-white'
                        style={{
                            background: getUsedInfo(89, category?.amount_limit).background,
                            width: getUsedInfo(89, category?.amount_limit).percent + '%'
                        }}

                    >
                        {currency.formatVND(89)}
                    </div>
                </div>
                <p className="text-right w-1/3 text-sm font-semibold text-black">{currency.formatVND(category.amount_limit)}</p>
            </div>
        </div>
    )
}

export default CategoryChart