import left from '../assets/svg/left.svg'
import right from '../assets/svg/right.svg'

interface PropsInterface {
    year: number,
    month: number,
    setYear: (value: number) => void,
    setMonth: (value: number) => void,
}

const TimeRangeTitle = (props: PropsInterface) => {
    const { year, month, setYear, setMonth } = props
    const dayEndOfMonth = (new Date(year, month + 1, 0)).getDate()

    const timeStart = `01/${String(month + 1).padStart(2, '0')}`
    const timeEnd = `${dayEndOfMonth}/${String(month + 1).padStart(2, '0')}/${year}`

    const preMonth = () => {
        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
            return
        }
        setMonth(month - 1)
    }

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
            return
        }
        setMonth(month + 1)
    }

    return (
        <div className="w-full h-12 px-4 flex items-center justify-between text-sm font-semibold text-black">
            <img onClick={preMonth} src={left} alt="left" />
            <span>{timeStart} ~ {timeEnd}</span>
            <img onClick={nextMonth} src={right} alt="right" />
        </div>
    )
}

export default TimeRangeTitle