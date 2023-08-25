import { useState, useEffect } from 'react'

interface DropdownProps {
    items: string[] ,
    customClass?: string,
    state: string,
    setState: (val: string) => void,
}

function Dropdown({ items, customClass, state, setState }: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const closeDropdown = () => {
            setIsOpen(false);
        };

        if (isOpen) {
            window.addEventListener('click', closeDropdown);
        }

        return () => {
            window.removeEventListener('click', closeDropdown);
        };
    }, [isOpen]);

    const handleItemClick = (item: string) => {
        setState(item);
        setIsOpen(false); // Close the dropdown after selecting an item
    };
    return (
        <>
            <div className={`dropdown ${customClass} sm:flex dropdown-end`}>
                <ul className="menu menu-horizontal rounded-box ">
                    <li>
                        <details open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                            <summary>{state}</summary>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                {items.map((item, index) => (
                                    <li key={index} onClick={() => { handleItemClick(item) }}>
                                        <span>{item}</span>
                                    </li>
                                ))
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Dropdown