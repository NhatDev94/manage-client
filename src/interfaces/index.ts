import { FC } from "react"

interface PageInterface {
    pathname: string,
    element: FC
}

interface SpendInterface {
    date: string,
    category: string,
    amount: string,
    note: string,
    type: string,
    spend_id: number
}

interface OptionSelectInterface {
    label: string,
    value: string
}

interface FormItemInterface {
    title?: string,
    name: string,
    type?: string,
    options?: OptionSelectInterface[],
    showSearch?: boolean,
    placeholder?: string
}

interface spendOfMonthInterface {
    [name: string]: SpendInterface[]
}

interface ValuesInterface {
    [name: string]: string
}

interface CategoryInterface {
    category_id: number,
    name: string,
    amount_limit: number
}

interface FormValuesInterface {
    date?: string,
    category?: string,
    amount?: number,
    note?: string,
    amount_limit?: number,
}

export type {
    PageInterface,
    SpendInterface,
    FormItemInterface,
    spendOfMonthInterface,
    OptionSelectInterface,
    ValuesInterface,
    CategoryInterface,
    FormValuesInterface
}