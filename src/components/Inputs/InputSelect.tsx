import { useEffect } from 'react'
import { FormInstance, Select } from "antd"
import { FormItemInterface } from "../../interfaces"

interface PropsInterface {
    form: FormInstance,
    formItem: FormItemInterface,
    value: string,
}

const InputSelect = (props: PropsInterface) => {
    const {
        form,
        formItem,
        value
    } = props

    const onChange = (value: string | number) => {
        form.setFieldValue(formItem?.name, value)
    }

    useEffect(() => {
        form.setFieldValue(formItem?.name, value || formItem?.options && formItem?.options[0]?.value)
    }, [])

    return (
        <Select
            className="w-full h-10 outline-none border border-black/20 rounded-md"
            defaultValue={value || formItem?.options && formItem?.options[0]?.value}
            options={formItem?.options}
            showSearch={formItem?.showSearch}
            placeholder={formItem?.placeholder || 'Enter ' + formItem?.name + '...'}
            onChange={onChange}
            disabled={formItem?.disabled}
        />
    )
}

export default InputSelect