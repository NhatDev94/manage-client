import { useState } from "react"
import { SpendInterface } from "../interfaces"
import ModalCreateAndEditSpend from "./Modals/ModalCreateAndEditSpend"
import { currency } from "../utils"

interface PropsInterface {
    spend: SpendInterface
}

const Spend = (props: PropsInterface) => {
    const { spend } = props

    const [open, setOpen] = useState(false)

    const openModalEditSpend = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }
    
    return (
        <>
            <div
                className="py-2 px-4 flex items-center"
                onClick={openModalEditSpend}
            >
                <p className="w-1/5 text-xs font-normal text-gray-400">{spend.category}</p>
                <div className="w-2/5 text-left">
                    <p className="text-xs font-semibold text-black">{spend.note}</p>
                    <p className="text-xs font-normal text-gray-400">{'Tiền mặt'}</p>
                </div>
                <p className="w-1/5 text-left text-xs font-semibold text-blue-500">{spend.type === 'income' ? currency.formatVND(spend.amount) : ''}</p>
                <p className="w-1/5 text-right text-xs font-semibold text-red-500">{spend.type === 'expense' ? currency.formatVND(spend.amount) : ''}</p>
            </div>
            {
                open && (
                    <ModalCreateAndEditSpend
                        title="Edit Spend"
                        closeModal={closeModal}
                        values={spend}
                        type='edit'
                    />
                )
            }
        </>
    )
}

export default Spend