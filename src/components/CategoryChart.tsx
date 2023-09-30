import { CategoryInterface } from "../interfaces"

interface PropsInterface {
    category: CategoryInterface
}

const CategoryChart = (props: PropsInterface) => {
    const { category } = props

    const getUsedInfo = (used: number, limit: number) => {
        const usedPercen = (used * 100) / limit
        return {
            percent: usedPercen > 100 ? 100 : Math.round(usedPercen),
            background: 'green'
        }
    }

    return (
        <div className="mt-4">
            <p className="mb-1 text-black font-semibold text-sm">{category?.name}</p>
            <div className="flex items-end justify-between">
                <div className="w-4/5 h-5 relative rounded-sm">
                    <p className="absolute top-0 left-0 z-10 w-full h-full bg-gray-200"></p>
                    <p
                        className='absolute top-0 left-0 z-20 h-full rounded-sm'
                        style={{
                            background: getUsedInfo(89, category?.amount_limit).background,
                            width: getUsedInfo(89, category?.amount_limit).percent + '%'
                        }}

                    ></p>
                </div>
                <p className="text-sm font-semibold text-black">{getUsedInfo(915, category?.amount_limit).percent}%</p>
            </div>
        </div>
    )
}

export default CategoryChart