import { BsThreeDots } from "react-icons/bs"

interface HamburgerProps {
    items?: JSX.Element[],
    onClick?: () => void,
    hamClass?: string,
}

function Hamburger({ items, onClick, hamClass }: HamburgerProps) {
    return (
        <div onClick={onClick}>
            <div className="dropdown dropdown-left">
                <label tabIndex={0} className="btn border-0 bg-inherit hover:bg-inherit">

                    <BsThreeDots className={`text-base-100 cursor-pointer hover:text-base-300 ${hamClass}`} size={25} />


                </label>
                <ul tabIndex={0} className="dropdown-content z-[1] p-1 shadow bg-base-100 rounded-lg flex flex-col justify-center text-black gap-1">
                    {items?.map((item, index) => (
                        <li key={index} >
                            {item}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div >
    )
}

export default Hamburger