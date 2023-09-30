import { useState } from 'react'
import plus from '../assets/svg/plus.svg'
import ModalCreateAndEditSpend from './Modals/ModalCreateAndEditSpend'

const CreateSpend = () => {
    const [open, setOpen] = useState(false)

    const openModalCreateSpend = () => {
        setOpen(true)
    }

    const closeModal = () => {
        setOpen(false)
    }

    return (
        <div className="">
            {
                open && (
                    <ModalCreateAndEditSpend
                        title='Create Spend'
                        closeModal={closeModal}
                    />
                )
            }
            <div
                className="w-10 h-10 rounded-full bg-red-500 text-white fixed bottom-16 right-4 flex items-center justify-center cursor-pointer"
                onClick={openModalCreateSpend}
            >
                <img src={plus} alt='plus' />
            </div>
        </div>
    )
}

export default CreateSpend