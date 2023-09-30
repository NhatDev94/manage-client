interface PropsInterface {
    children: JSX.Element | string,
    type?: string,
    className?: string,
    onClick?: () => void,
}

const ButtonComponent = (props: PropsInterface) => {
    const { children, type = 'active', className = '', onClick = () => {}} = props
    return (
        <button
            className={`
                w-full h-10 rounded-lg outline-none shadow-md border cursor-pointer font-semibold text-sm
                ${type === 'disabled' && 'border-gray-200 bg-gray-200 text-white '}
                ${type === 'active' && 'border-green-500 bg-green-500 text-white '}
                ${className}
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default ButtonComponent