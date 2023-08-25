import { PiSlidersLight } from 'react-icons/pi'
import { BsSearch } from 'react-icons/bs'
import InputBox from '../InputBox/InputBox'
import { useState } from 'react'
import Dropdown from '../Dropdown/Dropdown'

function FilterBar() {
    const [search, setSearch] = useState("")
    const dropItems = ['High', 'Medium', 'Low']
    const [priority, setPriority] = useState("Priority")
    const [status, setStatus] = useState("Status")
    const [category, setCategory] = useState("Category")

    return (
        <>
            <div className="navbar bg-base-200 rounded-lg p-2 md:px-4 lg:px-6 flex md:flex-row items-center justify-between">
                <div className="form-control relative mb-2 md:mb-0 hidden md:flex" >
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <BsSearch />
                    </div>
                    <InputBox type="text" placeholder="Search" customClass="indent-6 w-80 " state={search} setState={setSearch} />
                </div>
                <div className="flex md:items-center space-x-2">
                    <PiSlidersLight className='mr-3' />
                    <Dropdown customClass='hidden' items={dropItems} state={priority} setState={setPriority} />
                    <Dropdown items={dropItems} state={status} setState={setStatus} />
                    <Dropdown items={dropItems} state={category} setState={setCategory} />
                </div>
            </div>

        </>
    )
}

export default FilterBar