import { ModalAddAndEditCategory, CategoryChart, Header } from "../components"
import { CategoryInterface } from "../interfaces"
import { useState } from "react"
import { useQueryCategorys, useQuerySpends } from "../hooks"
import Chart from "../components/Chart"

const Overview = () => {
    const [categoryIsEdit, setCategoryIsEdit] = useState<CategoryInterface | null>(null)
    const [filter, setFilter] = useState('monthly')

    const { spends } = useQuerySpends({})
    const { data: categorys, refetch } = useQueryCategorys()

    const handleOpenModalAddLimit = (category: CategoryInterface) => {
        setCategoryIsEdit(category)
    }

    const closeModalAddLimit = () => {
        setCategoryIsEdit(null)
    }

    return (
        <div className="w-full h-full bg-black/10">
            <Header />

            <div className="flex items-center justify-between bg-white h-10">
                <p
                    className={`w-1/2 h-full flex items-center justify-center text-xs  text-black border-b-2 ${filter === 'monthly' ? 'border-orange-500 font-bold' : 'border-black/10 font-semibold'}`}
                    onClick={() => setFilter('monthly')}
                >Monthly</p>
                <p className={`w-1/2 h-full flex items-center justify-center text-xs text-black border-b-2 ${filter === 'daily' ? 'border-orange-500 font-bold' : 'border-black/10 font-semibold'}`}
                    onClick={() => setFilter('daily')}
                >Daily</p>
            </div>

            <div className=" py-2 bg-white pt-8">
                <Chart name='Monthly' limit={8000000} used={4400000} showTitle={false} />
            </div>

            <div className="pt-2 bg-white mt-1">
                <h4 className="px-4 text-sm font-semibold text-black">Danh sach gioi han:</h4>
                {
                    categorys?.filter((item: CategoryInterface) => item?.amount_limit > 0)?.map((item: CategoryInterface, i: number) => {
                        return (
                            <CategoryChart
                                key={i}
                                category={item}
                                spends={spends}
                                onOpenModalChangeLimit={() => { handleOpenModalAddLimit(item) }}
                            />
                        )
                    })
                }
            </div>

            {
                categoryIsEdit && (
                    <ModalAddAndEditCategory
                        title="Edit Category Limit"
                        type="edit"
                        categoryIsEdit={categoryIsEdit}
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