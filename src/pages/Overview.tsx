import { ModalAddAndEditCategory, CategoryChart, Header } from "../components"
import { CategoryInterface } from "../interfaces"
import { useState } from "react"
import { useQueryCategorys, useQuerySpends } from "../hooks"
import Chart from "../components/Chart"

const Overview = () => {
    const [openModalAddLimit, setOpenModalAddLimit] = useState(false)

    const { spends } = useQuerySpends({})
    const { data: categorys, refetch } = useQueryCategorys()

    const handleOpenModalAddLimit = () => {
        setOpenModalAddLimit(true)
    }

    const closeModalAddLimit = () => {
        setOpenModalAddLimit(false)
    }

    return (
        <div className="w-full h-full bg-black/10">
            <Header />

            <div className="px-4 py-2 bg-white mt-1">
                <h4 className="mb-2 text-sm font-semibold text-black">Expense</h4>
                <Chart name='Expense' limit={8000000} used={4400000} showTitle={false} />
            </div>

            <div className="px-4 py-2 bg-white mt-1">
                <h4 className="mb-2 text-sm font-semibold text-black">Danh sach gioi han:</h4>
                {
                    categorys?.filter((item: CategoryInterface) => item?.amount_limit > 0)?.map((item: CategoryInterface, i: number) => {
                        return (
                            <CategoryChart 
                            key={i}
                            category={item} 
                            spends={spends}
                            onOpenModalChangeLimit={handleOpenModalAddLimit} 
                             />
                        )
                    })
                }
            </div>

            {
                openModalAddLimit && (
                    <ModalAddAndEditCategory
                        title="Add Category Limit"
                        categorys={categorys}
                        refetch={refetch}
                        closeModal={closeModalAddLimit}
                    />
                )
            }
        </div>
    )
}

export default Overview