import CreateSpend from "../components/CreateSpend"
import ListSpend from "../components/ListSpend"
import { useQuerySpends } from "../hooks"
import Header from "../components/Layouts/Header"

const Home = () => {

    const { spends, income, expense } = useQuerySpends({})
    console.log(spends);
    
    return (
        <div className="w-full bg-gray-100">
           <Header />

            {
                spends && (
                    <ListSpend
                        spendsOfMonth={spends}
                        income={income}
                        expense={expense}
                    />
                )
            }

            <CreateSpend />
        </div>
    )
}

export default Home