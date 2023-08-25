import { BsCheck2Circle } from 'react-icons/bs'
interface BadgeProps {
    bgColor?: string,
    children: string | JSX.Element,
    customClass?: string,
    showStatus?: "resolved" | "open",
}

function Badge({ bgColor, children, customClass, showStatus }: BadgeProps) {
    return (
        <>
            <div className={`badge font-bold py-3 min-w-8 ${bgColor} ${customClass}`}>
                {showStatus === "resolved" ? <BsCheck2Circle className='text-green-500 mr-2' /> : null}
                {children}
            </div>
        </>
    )
}

export default Badge