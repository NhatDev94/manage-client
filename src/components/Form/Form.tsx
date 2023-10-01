import React, { ChangeEvent } from "react";
import { FormItemInterface } from "../../interfaces";
import { Form as FormAnt } from 'antd'
import { FormInstance } from 'antd/es'
import { Input, InputCurrency, InputDatePicker, InputSelect } from '..'

interface PropsRenderInputInterface {
    formItem: FormItemInterface,
    value: string,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | number | string, name: string) => void,
    autoFocus: boolean,
    form: FormInstance
}

interface PropsInterface {
    values?: any,
    formItems: FormItemInterface[],
    form: FormInstance,
    handleSubmit?: (values: any) => Promise<void>
}


const Form = (props: PropsInterface) => {
    const { values = {}, formItems, form, handleSubmit } = props

    const submit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const values = await form.validateFields()
        handleSubmit && handleSubmit(values)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement> | number | string, name: string) => {
        if (typeof e === 'string' || typeof e === 'number') {
            form.setFieldValue(name, e)
            return
        }
        form.setFieldValue(name, e.target.value)
    }

    return (
        <FormAnt
            form={form}
        >
            {
                formItems.map((formItem: FormItemInterface, i: number) => (
                    <FormAnt.Item
                        key={i}
                        name={formItem?.name}
                    >
                        <div className="">
                            <p className="text-xs font-semibold text-black capitalize mb-2">{formItem.title}</p>
                            <RenderInput
                                formItem={formItem}
                                value={values[formItem.name]}
                                handleChange={handleChange}
                                key={i}
                                autoFocus={i === 0}
                                form={form}
                            />
                        </div>
                    </FormAnt.Item>
                ))
            }
            <div className="mt-6">
                <input type="submit" onClick={submit} className="w-full h-10 bg-green-500 rounded-lg text-white cursor-pointer" />
            </div>
        </FormAnt>
    )
}

export default Form

const RenderInput = (props: PropsRenderInputInterface) => {
    const { formItem, value, handleChange, form } = props

    switch (formItem.type) {
        case 'date':
            return (
                <InputDatePicker
                    form={form}
                    formItem={formItem}
                    value={value}
                />
            )
        case 'select':
            return (
                <InputSelect
                    form={form}
                    formItem={formItem}
                    value={value}
                />
            )
        case 'currency':
            return (
                <InputCurrency
                    form={form}
                    formItem={formItem}
                    value={value}
                />
            )
        default:
            return (
                <Input
                    form={form}
                    formItem={formItem}
                    value={value}
                />
            )
    }
}