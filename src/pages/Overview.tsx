import { useQuery } from "react-query"
import { ButtonComponent, ModalAddAndEditCategory, CategoryChart } from "../components"
import spendApi from "../apis/spendApi"
import { CategoryInterface } from "../interfaces"
import { useState } from "react"

const Overview = () => {
    const [openModalAddLimit, setOpenModalAddLimit] = useState(false)

    const { data: categorys, refetch } = useQuery({
        queryKey: 'category',
        queryFn: spendApi.getCategorys,
        cacheTime: 600000,
        staleTime: 600000,
    })

    const handleOpenModalAddLimit = () => {
        setOpenModalAddLimit(true)
    }

    const closeModalAddLimit = () => {
        setOpenModalAddLimit(false)
    }

    return (
        <div className="">
            <div className="w-full h-12 flex items-center justify-center text-sm font-semibold text-black">Overview</div>

            <div className="px-4">
                <h4 className="text-sm font-semibold text-black">Danh sach gioi han:</h4>
                {
                    categorys?.filter((item: CategoryInterface) => item?.amount_limit > 0)?.map((item: CategoryInterface, i: number) => {
                        return (
                            <CategoryChart category={item} key={i} />
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