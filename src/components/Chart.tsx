import { currency } from "../utils"

interface PropsInterface {
    name: string,
    used: number,
    limit: number,
    showTitle?: boolean,
    onOpenModalChangeLimit?: () => void
}

const Chart = (props: PropsInterface) => {
    const { name, used, limit, showTitle = true, onOpenModalChangeLimit } = props

    const percent = (used / limit) * 100 < 100 ? Math.round((used / limit) * 100) : 100
    return (
        <div className="flex items-end justify-between gap-x-10 py-3 px-4" style={{ borderBottom: showTitle ? '1px solid silver' : '' }}>
            <div className="w-1/3">
                <p className="text-gray-400 font-bold text-sm capitalize">{name}</p>
                <p
                    className="text-black text-md font-semibold"
                    onClick={onOpenModalChangeLimit}
                >{currency.formatVND(limit)}</p>
            </div>

            <div className="w-2/3">
                <div className="relative w-full h-4 rounded-sm mb-1 overflow-hidden">
                    <p className="w-full h-full bg-black/20 "></p>
                    <p
                        className="absolute top-0 left-0 h-full bg-blue-400"
                        style={{ width: percent + '%' }}
                    ></p>
                    <p className="absolute top-0 right-0 z-50 h-full flex items-center text-xs font-semibold text-black">{percent}%</p>
                </div>
                <div className="w-full flex items-center justify-between">
                    <p className="text-blue-500 text-sm font-semibold">{currency.formatVND(used)}</p>
                    <p className="text-black text-sm font-semibold">{currency.formatVND(limit - used)}</p>
                </div>
            </div>
        </div>
    )
}

export default Chart