import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Card from "../components/Card/Card";
import Table from "../components/Table/Table";
import { themeProps } from "../types/Types";
import avatar from "../static/avatar.png"
import { BsFillTelephoneFill } from "react-icons/bs"
import { MdEmail } from 'react-icons/md'
import Modal from "../components/Modal/Modal";
import { BsThreeDots, BsPatchPlus, BsSearch } from "react-icons/bs"
import InputBox from "../components/InputBox/InputBox";
import { useState, useEffect } from "react";
import Button from "../components/Button/Button";
import { PiSlidersLight } from 'react-icons/pi'
import { data, headData } from "../utils/TableData"
import clientUserHelper, { modalHeader } from "../utils/Client/UserHelper";
import Hamburger from "../components/Hamburger/Hamburger";
import { BiEdit, BiTrash } from 'react-icons/bi'
import HamUtility from "../utils/Client/HamUtility";
import { Note } from "../types/Types";




function Clients({ theme }: themeProps) {
    const modalData = clientUserHelper()

    const [userSearch, setUserSearch] = useState("")
    const [addNote, setAddNote] = useState("")
    const [notes, setNotes] = useState<Note[]>([
        { id: 1, content: "Pending verification Process" },
        { id: 2, content: "Had interaction on Monday" },
    ])
    const [editNote, setEditNote] = useState<Note[]>(notes.map(note => ({ ...note })));

    const handleClick = () => { }
    const handleAddNotes = () => {
        const newNotes = [...notes, { id: notes.length + 1, content: addNote }]
        setNotes(newNotes);
        setAddNote("");
    }

 
    

    return (
        <div className="flex justify-center flex-col p-8 h-full" data-theme={theme}>
            <div className="h-1/6">
                <Breadcrumbs />
                <div className="flex justify-between items-center">
                    <h2 className="text-xl md:text-2xl font-bold">Clients</h2>
                    <Button bgColor="bg-customColor" validate={handleClick}>Edit</Button>
                </div>

            </div>
            <div className="flex flex-col md:px-8 h-5/6 gap-4 ">
                <div className="w-full">
                    <Card
                        avatar={avatar}
                    >
                        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between w-full">
                            <div className="items-start flex flex-col">
                                <h2 className="card-title text-2xl h-1/4">Cooperative Service Bank Kakkodi</h2>
                                <div className="flex pl-4 pt-4 justify-center md:h-3/4 gap-2">
                                    <div className="flex flex-col">
                                        <div className="flex items-center gap-4">
                                            <BsFillTelephoneFill />
                                            <h4 >+91 9876543210</h4>

                                        </div>
                                        <div className="flex items-center gap-4">
                                            <MdEmail />
                                            <h4 >co.operative.kakkodi@gmail.com</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal customClass="font-bold" name="View Users" title="Users" modalClass="max-w-fit">
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center justify-end p-4">
                                        <PiSlidersLight className='mr-4' size={25} />
                                        <div className="form-control relative mb-2 md:mb-0 flex" >
                                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <BsSearch />
                                            </div>
                                            <InputBox type="text" placeholder="Search" customClass="indent-6     w-50 md:w-80 " state={userSearch} setState={setUserSearch} />
                                        </div>
                                    </div>
                                    <div>
                                        <Table tableData={modalData} tableHeader={modalHeader} />
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </Card>
                </div>
                <div className="flex gap-4 flex-col md:flex-row h-full">
                    <div className="w-full md:w-2/6">
                        <Card>
                            <div className="w-full h-full">
                                <h2 className="card-title text-2xl h-1/4">Address details</h2>
                                <div className="flex flex-wrap pt-4 pl-4 gap-y-4 h-3/4">
                                    <div className="w-1/2 ">
                                        <h4>Address</h4>
                                        <h4 className="font-bold text-lg">Kakkodi ,Kozhikode</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>City / District</h4>
                                        <h4 className="font-bold text-lg">Kozhikode</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>State</h4>
                                        <h4 className="font-bold text-lg">Kerala</h4>
                                    </div>
                                    <div className="w-1/2">
                                        <h4>Latitude & Longitude</h4>
                                        <h4 className="font-bold text-lg">48.8566, 48.8566</h4>
                                    </div>

                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="w-full md:w-4/6">
                        <Card>
                            <div className="flex flex-col w-full gap-4 h-full">
                                <div className="flex justify-between items-center h-1/4">
                                    <h2 className="card-title text-2xl ">Notes</h2>
                                    <Modal name={<BsPatchPlus className="cursor-pointer" size={25} />}
                                        title="Add Notes"
                                        customButton={<Button bgColor="bg-customColor" validate={handleAddNotes}>ADD</Button>}>
                                        <div className="p-4">
                                            <InputBox type="text" customClass="w-full" placeholder="Add a note" state={addNote} setState={setAddNote} />
                                        </div>
                                    </Modal>
                                </div>
                                <div className=" text-white flex flex-col gap-3 p-4 max-h-56 h-56 overflow-y-auto">
                                    {notes.map((note, index) => (
                                        <div key={note.id} className="bg-customColor  rounded-lg px-4 flex items-center" >
                                            <p className=" text-lg">
                                                {note.content}
                                            </p>
                                            <HamUtility note={note} state={notes} setState={setNotes} index={index} editNote={editNote} setEditNote={setEditNote} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
            <div className="flex pt-8 md:p-8 h-2/6 flex-col ">
                <h3 className="font-bold mb-3 md:text-lg">Contracts Table</h3>
                <Table tableData={data} tableHeader={headData} />
            </div>
        </div>
    )
}

export default Clients
