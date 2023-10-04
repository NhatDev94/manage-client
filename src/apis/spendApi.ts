import axios from 'axios'
// import moment from "moment";
import { CategoryInterface, SpendInterface } from "../interfaces";

const spendApi = {
    endpoint: 'http://localhost:1994',
    getSpends: async (month: number, year: number) => {
        const data = await axios.get(spendApi.endpoint + '/spend/getAll', {
            params: {
                month,
                year
            }
        })
        return data?.data
    },
    createSpend: async (spend: SpendInterface) => {
        // const time = moment(new Date()).format('MM-DD-YYYY')
        const data = await axios.post(spendApi.endpoint + '/spend/create', {
            ...spend,
            amount: +String(spend?.amount).replaceAll(',', ''),
            date: spend?.date
        })
        return data
    },
    editSpend: async (spend_id: number, spend: SpendInterface) => {
        const data = await axios.put(spendApi.endpoint + '/spend/update', {
            ...spend,
            amount: +String(spend?.amount).replaceAll(',', ''),
            spend_id
        })
        return data
    },

    // CATEGORY
    getCategorys: async () => {
        const { data } = await axios.get(spendApi.endpoint + '/category/getAll')
        return data?.data
    },
    createCategory: async (category: CategoryInterface) => {
        const { data } = await axios.post(spendApi.endpoint + '/category/create', {
            ...category
        })
        return data
    },
    editCategory: async (category: CategoryInterface) => {
        const {data} = await axios.put(spendApi.endpoint + '/category/update', {
            ...category,
            category_id: Number(category?.category_id),
            amount_limit: Number(String(category?.amount_limit).replaceAll(',', ''))
        })
        return data
    }
}

export default spendApi