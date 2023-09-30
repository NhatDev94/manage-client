import { ChangeEvent } from 'react'
import { NumericFormat } from 'react-number-format'

interface PropsInterface {
    defaultValue: number | string,
    name: string,
    placeholder?: string,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
}

const InputCurrency = (props: PropsInterface) => {
    const { name, defaultValue, placeholder = '', onChange } = props
    return (
        <NumericFormat
            value={defaultValue || ''}
            name={name}
            placeholder={placeholder}
            onChange={onChange}

            allowLeadingZeros={false}
            thousandSeparator='.'
            decimalSeparator=','
            className="w-full h-10 px-4 py-2 outline-none border border-black/20 rounded-md"
        />
    )
}

export default InputCurrency