import { FormInstance } from 'antd'
import { ChangeEvent, useEffect } from 'react'
import { NumericFormat } from 'react-number-format'
import { FormItemInterface } from '../../interfaces'

interface PropsInterface {
   form: FormInstance,
   formItem: FormItemInterface,
   value: string
}

const InputCurrency = (props: PropsInterface) => {
    const { form, formItem, value } = props

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        form.setFieldValue(formItem?.name, e?.target?.value)
    }

    useEffect(() => {
        form.setFieldValue(formItem?.name, value)
    },[])

    return (
        <NumericFormat
            value={Number(value) || ''}
            placeholder={formItem?.placeholder}
            onChange={onChange}

            allowLeadingZeros={false}
            thousandSeparator=','
            decimalSeparator='.'
            className="w-full h-10 px-4 py-2 outline-none border border-black/20 rounded-md"
        />
    )
}

export default InputCurrency