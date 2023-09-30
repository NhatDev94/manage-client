import { useEffect } from 'react'
import close from '../../assets/svg/close.svg'

interface PropsInterface {
    children: JSX.Element,
    closeModal: () => void,
    title?: string,
}

const ModalLayout = (props: PropsInterface) => {
    const { children, closeModal, title } = props

    useEffect(() => {
        window.document.body.style.overflow = 'hidden'
    }, [])

    return (
        <div className="w-screen h-screen fixed top-0 left-0 z-50">
            <div className="w-full h-full relative">
                <div
                    className="w-full h-full z-20 bg-black/40 relative"
                    onClick={closeModal}
                ></div>

                <div className="w-11/12 p-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between">
                        <div></div>
                        <div className="text-center text-sm font-semibold text-black">{title || ''}</div>
                        <img src={close} alt="close" onClick={closeModal} />
                    </div>
                    <div className="py-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLayout