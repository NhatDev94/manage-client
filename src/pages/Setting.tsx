import { useState } from "react"
import { CategoryInterface } from "../interfaces"
import { ModalAddAndEditCategory } from "../components"
import { useQueryCategorys } from "../hooks"

import plus from '../assets/svg/plus-dark.svg'
import trash from '../assets/svg/trash.svg'
import edit from '../assets/svg/edit.svg'

const Setting = () => {
    const [openModalAddCategory, setOpenModalAddCategory] = useState(false)

    const { data: categorys, refetch } = useQueryCategorys()

    const closeModalAddCategory = () => {
        setOpenModalAddCategory(false)
    }

    return (
        <div className="">
            <div
                className="flex items-center justify-between bg-gray-100 px-4 h-12"
            >
                <h4 className="text-sm font-semibold text-black">Expense Category</h4>
                <img 
                src={plus} 
                alt='plus' 
                className="text-black" 
                onClick={() => setOpenModalAddCategory(true)}
                />
            </div>

            <div className="bg-white">
                <div className="">
                    {
                        categorys?.map((item: CategoryInterface, i: number) => (
                            <div
                                className="w-full px-4 flex items-center justify-between py-3 border-b border-black/10"
                                key={i}
                            >
                                <div className="relative z-10 text-xs font-semibold">{item?.name}</div>
                                <div className="flex items-center gap-x-5">
                                    <img src={edit} alt='edit' />
                                    <img src={trash} alt='delete' />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {
                openModalAddCategory && (
                    <ModalAddAndEditCategory
                        title="Add Category"
                        type='create'
                        categorys={categorys}
                        refetch={refetch}
                        closeModal={closeModalAddCategory}
                    />
                )
            }
        </div>
    )
}

export default Setting