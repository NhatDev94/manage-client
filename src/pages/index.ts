import { PageInterface } from "../interfaces"
import Home from "./Home.tsx"
import Overview from "./Overview.tsx"
import Setting from "./Setting.tsx"


const pages: PageInterface[] = [
    {
        pathname: '/',
        element: Home
    },
    {
        pathname: '/overview',
        element: Overview
    },
    {
        pathname: '/setting',
        element: Setting
    }
]

export default pages