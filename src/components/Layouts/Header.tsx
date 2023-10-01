import { useState, useEffect} from 'react'
import left from '../../assets/svg/left.svg'
import right from '../../assets/svg/right.svg'
import { useQuerySpends } from '../../hooks'

const Header = () => {
    const now = new Date()

    const [year, setYear] = useState(now.getFullYear())
    const [month, setMonth] = useState(now.getMonth())
    
    const dayEndOfMonth = (new Date(year, month + 1, 0)).getDate()
    const timeStart = `01/${String(month + 1).padStart(2, '0')}`
    const timeEnd = `${dayEndOfMonth}/${String(month + 1).padStart(2, '0')}/${year}`

    const { refetch } = useQuerySpends({month, year})

    const preMonth = () => {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
            localStorage.setItem('currentMonth', '11')
            localStorage.setItem('currentYear', JSON.stringify(year - 1))
            return
        }
        setMonth(month - 1)
        localStorage.setItem('currentMonth', JSON.stringify(month - 1))
    }

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
            localStorage.setItem('currentMonth', '0')
            localStorage.setItem('currentYear', JSON.stringify(year + 1))
            return
        }
        setMonth(month + 1)
        localStorage.setItem('currentMonth', JSON.stringify(month + 1))
    }

    useEffect(() => {
        refetch()
    }, [month, year])

    return (
        <div className="w-full h-12 px-4 flex items-center justify-between text-sm font-semibold text-black">
            <img onClick={preMonth} src={left} alt="left" />
            <span>{timeStart} ~ {timeEnd}</span>
            <img onClick={nextMonth} src={right} alt="right" />
        </div>
    )
}

export default Header