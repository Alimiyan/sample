import { ReactNode } from "react"

interface CardProps {
    avatar?: string,
    heading?: string,
    children?: ReactNode
}
function Card({ avatar, children }: CardProps) {
    return (
        <>
            <div className="card flex flex-col md:flex-row w-full items-center bg-base-100 shadow-xl h-full ">
                {avatar &&
                    <figure className="p-4">
                        <img src={avatar} alt="Shoes" className="rounded-full w-28" />
                    </figure>
                }
                <div className="card-body items-start h-full w-full">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card