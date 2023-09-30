import React, { ChangeEvent, useState } from "react";
import { FormItemInterface, OptionSelectInterface } from "../../interfaces";
import moment from "moment";
import { InputCurrency } from "..";


interface PropsRenderInputInterface {
    formItem: FormItemInterface,
    value: string,
    handleChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    autoFocus: boolean
}

interface PropsInterface {
    values?: any,
    formItems: FormItemInterface[],
    handleSubmit?: (values: any) => Promise<void>
}


const Form = (props: PropsInterface) => {
    const { values = {}, formItems, handleSubmit } = props

    const [formValue, setFormValue] = useState(values)

    const submit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        handleSubmit && handleSubmit(formValue)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={submit}>
            {
                formItems.map((formItem: FormItemInterface, i: number) => (
                    <div className="mb-4" key={i}>
                        <p className="text-xs font-semibold text-black capitalize mb-2">{formItem.title}</p>
                        <RenderInput
                            formItem={formItem}
                            value={values[formItem.name]}
                            handleChange={handleChange}
                            key={i}
                            autoFocus={i === 0}
                        />
                    </div>

                ))
            }
            <div className="mt-6">
                <input type="submit" className="w-full h-10 bg-green-500 rounded-lg text-white cursor-pointer" />
            </div>
        </form>
    )
}

export default Form

const RenderInput = (props: PropsRenderInputInterface) => {
    const { formItem, value = '', handleChange, autoFocus = false } = props

    switch (formItem.type) {
        case 'date':
            return (
                <input
                    className="w-full px-4 py-2 outline-none border border-black/20 rounded-md"
                    type="date"
                    defaultValue={value || moment(new Date()).format('YYYY-MM-DD')}
                    name={formItem.name}
                    onChange={handleChange}
                />
            )
        case 'select':
            return (
                <select
                    name={formItem.name}
                    className="w-full px-4 py-2 outline-none border border-black/20 rounded-md overflow-hidden"
                    defaultValue={value}
                    onChange={handleChange}
                >
                    {
                        formItem.options && formItem.options.map((option: OptionSelectInterface, index: number) => (
                            <option
                                className="w-full outline-none border-none"
                                key={index}
                                value={option.value}
                            >
                                {option.name}
                            </option>
                        ))
                    }
                </select>
            )
        case 'currency':
            return (
                <InputCurrency
                    defaultValue={value}
                    name={formItem.name}
                    placeholder={'Enter ' + formItem.name + '...'}
                    onChange={handleChange}
                />
            )
        default:
            return (
                <input
                    className="w-full px-4 py-2 outline-none border border-black/20 rounded-md"
                    defaultValue={value}
                    name={formItem.name}
                    placeholder={'Enter ' + formItem.name + '...'}
                    onChange={handleChange}
                    autoFocus={autoFocus}
                />
            )
    }
}