import { useEffect, useState } from "react"
import { CategoryInterface, FormItemInterface, SpendInterface } from "../../interfaces"
import Form from "../Form/Form"
import moment from "moment"
import spendApi from "../../apis/spendApi"
import { useQuery } from "react-query"
import { ModalLayout } from ".."

interface PropsInterface {
    title: string
    closeModal: () => void,
    values?: SpendInterface,
    type?: string
}

const initValue = {
    date: moment(new Date()).format('YYYY-MM-DD'),
    category: 'ăn uống',
    amount: 0
}

const ModalCreateAndEditSpend = (props: PropsInterface) => {
    // Phai kiem tra -> neu chua co categorys -> redirect qua trang tao category
    const { closeModal, title, values = initValue, type = 'create' } = props
    const [defaultValue, setDefaultValue] = useState<SpendInterface>(values)

    const { refetch } = useQuery({ queryKey: 'spend' })

    const { data: category } = useQuery({
        queryKey: 'category',
        queryFn: spendApi.getCategorys,
        cacheTime: 600000,
        staleTime: 600000,
    })

    const formItems: FormItemInterface[] = [
        {
            title: 'date',
            name: 'date',
            type: 'date'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'select',
            options: category?.map((item: CategoryInterface) => ({ name: item?.name, value: item?.categor_id }))
        },
        {
            title: 'Amount',
            name: 'amount',
            type: 'currency'
        },
        {
            title: 'Note',
            name: 'note'
        },
        {
            title: 'Type',
            name: 'type',
            type: 'select',
            options: [
                {
                    name: 'Expense',
                    value: 'expense'
                },
                {
                    name: 'Income',
                    value: 'income'
                },
            ]
        }
    ]

    const handleSubmit = async (value: SpendInterface) => {
        if (type === 'create') {
            const data = await spendApi.createSpend(value)
            if (data) {
                refetch()
                closeModal()
            }
            return
        }
        const data = await spendApi.editSpend(values.date, value)
        if (data) {
            refetch()
            closeModal()
        }
    }

    useEffect(() => {
        values && setDefaultValue({
            ...values,
            date: values?.date || moment(values.date).format('YYYY-MM-DD')
        })
    }, [])

    return (
        <ModalLayout
            title={title}
            closeModal={closeModal}
        >
            <Form
                formItems={formItems}
                values={defaultValue}
                handleSubmit={handleSubmit}
            />
        </ModalLayout>
    )
}

export default ModalCreateAndEditSpend