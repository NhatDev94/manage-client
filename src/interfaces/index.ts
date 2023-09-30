import { FC } from "react"

interface PageInterface {
    pathname: string,
    element: FC
}

interface SpendInterface {
    date: string,
    category: string,
    amount: number,
    note?: string,
    type?: string,
    id?: number
}

interface OptionSelectInterface {
    name: string,
    value: string | number
}

interface FormItemInterface {
    title?: string,
    name: string,
    type?: string,
    options?: OptionSelectInterface[]
}

interface spendOfMonthInterface {
    [name: string]: SpendInterface[]
}

interface ValuesInterface {
    [name: string]: string
}

interface CategoryInterface {
    categor_id: number,
    name: string,
    amount_limit: number
}

export type {
    PageInterface,
    SpendInterface,
    FormItemInterface,
    spendOfMonthInterface,
    OptionSelectInterface,
    ValuesInterface,
    CategoryInterface
}