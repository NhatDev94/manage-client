import { CategoryInterface, FormItemInterface, SpendInterface } from "../../interfaces"
import Form from "../Form/Form"
import spendApi from "../../apis/spendApi"
import { ModalLayout } from ".."
import { Form as FormAnt, Spin } from 'antd'
import { useQueryCategorys, useQuerySpends } from "../../hooks"

interface PropsInterface {
    title: string
    closeModal: () => void,
    values?: SpendInterface,
    type?: string
}

const ModalCreateAndEditSpend = (props: PropsInterface) => {
    // Phai kiem tra -> neu chua co categorys -> redirect qua trang tao category
    const { closeModal, title, values, type = 'create' } = props

    const [form] = FormAnt.useForm()

    const { refetch } = useQuerySpends({})

    const { data: categorys, isLoading: categoryLoading } = useQueryCategorys()

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
            options: categorys?.map((item: CategoryInterface) => ({ label: item?.name, value: String(item?.category_id) }))
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
                    label: 'Expense',
                    value: 'expense'
                },
                {
                    label: 'Income',
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
        if (values) {
            const data = await spendApi.editSpend(values?.spend_id, value)
            if (data) {
                refetch()
                closeModal()
            }
        }
    }

    return (
        <Spin spinning={categoryLoading}>
            <ModalLayout
                title={title}
                closeModal={closeModal}
            >
                {
                    categorys && (
                        <Form
                            form={form}
                            formItems={formItems}
                            values={(values && type === 'create') ? {} : values}
                            handleSubmit={handleSubmit}
                        />
                    )
                }
            </ModalLayout>
        </Spin>
    )
}

export default ModalCreateAndEditSpend