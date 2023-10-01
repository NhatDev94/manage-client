import { currency } from "../utils"

interface PropsInterface {
    name: string,
    used: number,
    limit: number,
    showTitle?: boolean,
    onOpenModalChangeLimit?: () => void
}

const Chart = (props: PropsInterface) => {
    const { name, used, limit, showTitle = false, onOpenModalChangeLimit } = props

    const percent = (used / limit) * 100 < 100 ? Math.round((used / limit) * 100) : 100
    return (
        <div className="mb-5">
            <div className="flex items-center justify-between mb-1">
                {
                    showTitle ? <p className="text-black font-semibold text-sm">{name}</p> : <p></p>
                }
                <p 
                className="text-right text-sm font-semibold text-black"
                onClick={onOpenModalChangeLimit && onOpenModalChangeLimit}
                >{currency.formatVND(limit)} ({percent})%</p>
            </div>
            <div className="w-full flex items-end justify-between">
                <div className="w-full h-5 relative rounded-r-sm overflow-hidden">
                    <p className="absolute top-0 left-0 z-10 w-full h-full bg-neutral-600"></p>
                    <div
                        className='absolute top-0 left-0 z-20 h-full rounded-r-sm overflow-hidden flex items-center justify-center'
                        style={{
                            background: 'green',
                            width: (percent) + '%'
                        }}

                    >
                    </div>
                    <span
                        className="h-full absolute top-0 z-30 text-xs font-semibold text-white flex items-center justify-center"
                        style={{
                            left: percent < 20 ? percent + '%' : (percent / 2) + '%',
                            transform: `translate(${percent >= 20 ? '-50%' : 0})`
                        }}
                    >{currency.formatVND(used)}</span>
                </div>

            </div>
        </div>
    )
}

export default Chart