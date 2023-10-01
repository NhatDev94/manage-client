import { useMemo} from 'react'
import { CategoryInterface, SpendInterface, spendOfMonthInterface } from "../interfaces"
import Chart from "./Chart"

interface PropsInterface {
    category: CategoryInterface,
    spends: spendOfMonthInterface,
    onOpenModalChangeLimit?: () => void
}

const CategoryChart = (props: PropsInterface) => {
    const { category, spends, onOpenModalChangeLimit } = props
    
    const listSpend = useMemo(() => {
        let result: SpendInterface[] = []
        for (const key in spends) {
            result = [...result, ...spends[key]]
        }
        return result
    }, [spends])

    const getUsedAmount = () => {
        let result: number = 0
        listSpend?.forEach((item: SpendInterface) => {
            if (+item.category === +category?.category_id) {
                result = result + Number(item?.amount)
            }
        })
        return result
    }
    
    return (
        <Chart
            name={category?.name}
            used={getUsedAmount()}
            limit={category?.amount_limit}
            onOpenModalChangeLimit={onOpenModalChangeLimit && onOpenModalChangeLimit}
        />
    )
}

export default CategoryChart