import { ButtonComponent, ModalAddAndEditCategory, CategoryChart, Header } from "../components"
import { CategoryInterface } from "../interfaces"
import { useState } from "react"
import { useQueryCategorys, useQuerySpends } from "../hooks"

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
        <div className="">
            <Header />
            <div className="w-full h-12 flex items-center justify-center text-sm font-semibold text-black">Overview</div>

            <div className="px-4">
                <h4 className="text-sm font-semibold text-black">Danh sach gioi han:</h4>
                {
                    categorys?.filter((item: CategoryInterface) => item?.amount_limit > 0)?.map((item: CategoryInterface, i: number) => {
                        return (
                            <CategoryChart category={item} spends={spends} key={i} />
                        )
                    })
                }
                <ButtonComponent
                    className='mt-6'
                    onClick={handleOpenModalAddLimit}
                >Thêm giới hạn</ButtonComponent>
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