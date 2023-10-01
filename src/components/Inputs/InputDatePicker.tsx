import { DatePicker, DatePickerProps } from 'antd'
import dayjs from 'dayjs'
import { FormInstance } from 'antd/es'
import { FormItemInterface } from '../../interfaces'
import moment from 'moment'
import { useEffect } from 'react'

interface PropsInterface {
    form: FormInstance,
    formItem: FormItemInterface,
    value: string 
}

const InputDatePicker = (props: PropsInterface) => {
    const { form, formItem, value } = props
    const now = moment(new Date()).format('YYYY-MM-DD')
    const dateFormat = 'YYYY-MM-DD'

    const onChange: DatePickerProps['onChange'] = (_, dataString) => {
        form.setFieldValue(formItem?.name, dataString)
    }

    const defaultDate = value ? dayjs(value, dateFormat) : dayjs(now, dateFormat)
    
    useEffect(() => {
        form.setFieldValue(formItem.name, defaultDate.format('YYYY-MM-DD'))
    }, [])
        
    return (
        <DatePicker
            onChange={onChange}
            defaultValue={defaultDate}
            className="w-full h-10 px-4 py-2 outline-none border border-black/20 rounded-md"
        />
    )
}

export default InputDatePicker