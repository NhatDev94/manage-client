import { ModalLayout } from ".."
import { CategoryInterface, FormItemInterface } from "../../interfaces"
import Form from "../Form/Form"
import spendApi from "../../apis/spendApi"
import { Form as FormAnt} from 'antd'

interface PropsInterface {
    title: string,
    type?: string,
    closeModal: () => void,
    categorys: CategoryInterface[],
    refetch: () => void,
}

const ModalAddAndEditCategory = (props: PropsInterface) => {
    const [form] = FormAnt.useForm()
    const { closeModal, title, type, categorys, refetch } = props

    const handleSubmit = async (value: CategoryInterface) => {
        if (type === 'create') {
            const data = await spendApi.createCategory(value)
            if (data?.data) {
                closeModal()
                refetch()
            }
        }
    }

    const optionAddLimit = () => {
        return categorys?.filter((item: CategoryInterface) => item?.amount_limit > 0)
            .map((item: CategoryInterface) => ({ label: item.name, value: String(item.category_id) }))
    }

    const formItemsEdit: FormItemInterface[] = [
        {
            title: 'Category',
            name: 'category',
            type: 'select',
            options: optionAddLimit()
        },
        {
            title: 'Amount limit',
            name: 'amount_limit',
            type: 'currency'
        }
    ]

    const formItemCreate: FormItemInterface[] = [
        {
            title: 'Name',
            name: 'name'
        },
        {
            title: "Amount limit",
            name: 'amount_limit',
            type: 'currency'
        }
    ]
    return (
        <ModalLayout
            title={title}
            closeModal={closeModal}
        >
            <Form
                form={form}
                formItems={type === 'create' ? formItemCreate : formItemsEdit}
                handleSubmit={handleSubmit}
            />
        </ModalLayout>
    )
}

export default ModalAddAndEditCategory