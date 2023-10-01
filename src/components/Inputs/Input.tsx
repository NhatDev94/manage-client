import {  useEffect } from 'react'
import { Input as InputAnt, FormInstance, InputProps } from 'antd'
import { FormItemInterface } from '../../interfaces'

interface PropsInterface {
    form: FormInstance,
    formItem: FormItemInterface,
    value: string
}

const Input = (props: PropsInterface) => {
    const { form, formItem, value } = props

    const onChange: InputProps['onChange'] = (e) => {
        form.setFieldValue(formItem?.name, e?.target?.value)
    }

    useEffect(() => {
        form.setFieldValue(formItem?.name, value || '')
    }, [])

    return (
        <InputAnt
            defaultValue={value || ''}
            onChange={onChange}

            placeholder={formItem?.placeholder || 'Enter ' + formItem?.name + '...'}
            allowClear={true}
        />
    )
}

export default Input