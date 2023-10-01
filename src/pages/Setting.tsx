import { useState } from "react"
import { CategoryInterface } from "../interfaces"
import { ButtonComponent, ModalAddAndEditCategory } from "../components"
import { useQueryCategorys } from "../hooks"

const Setting = () => {
    const [openContent, setOpenContent] = useState(false)
    const [openModalAddCategory, setOpenModalAddCategory] = useState(false)

    const { data: categorys, refetch } = useQueryCategorys()

    const toggleDrop = () => {
        setOpenContent(!openContent)
    }

    const closeModalAddCategory = () => {
        setOpenModalAddCategory(false)
    }

    return (
        <div className="">
            <div
                className="flex items-center justify-between bg-gray-100 px-4 h-10"
                onClick={toggleDrop}
            >
                <h4 className="">Category</h4>
            </div>
            {
                openContent && (
                    <div className="px-4 bg-white">
                        <div className="flex flex-wrap">
                            {
                                categorys?.map((item: CategoryInterface, i: number) => (
                                    <div
                                        className="w-fit p-1 mt-2 mr-2 rounded-md bg-orange-400 text-white text-sm font-semibold"
                                        key={i}
                                    >
                                        {item?.name}
                                    </div>
                                ))
                            }
                        </div>

                        <ButtonComponent
                            className="w-fit px-4 mt-4"
                            onClick={() => setOpenModalAddCategory(true)}
                        >
                            Add Category +
                        </ButtonComponent>
                    </div>
                )
            }

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