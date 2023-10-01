import { useNavigate } from 'react-router-dom'

interface SideMenuInterface {
    pathname: string,
    name: string
}

const SideMenu = () => {
    const navigate = useNavigate()
    const menus: SideMenuInterface[] = [
        {
            pathname: '/',
            name: 'Home'
        },
        {
            pathname: '/overview',
            name: 'Overview'
        },
        {
            pathname: '/setting',
            name: 'Setting'
        }
    ]

    const goto = (pathname: string) => {
        navigate(pathname)
    }

    return (
        <div className="fixed bottom-0 left-0 w-screen h-14 bg-black text-white flex items-center justify-between gap-x-4">
            {
                menus?.map((menuItem: SideMenuInterface, i: number) => {
                    return (
                        <div
                            className="w-full flex items-center justify-center cursor-pointer"
                            key={i}
                            onClick={() => goto(menuItem.pathname)}
                        >
                            {menuItem.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default SideMenu