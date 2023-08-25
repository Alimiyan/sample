import Badge from "../components/Badge/Badge";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import InputBox from "../components/InputBox/InputBox";
import ShowAttachment from "../components/ShowAttachment/ShowAttachment";
import ShowBubble from "../components/ShowBubble/ShowBubble";
import { themeProps } from "../types/Types";
import { AiOutlineReload } from 'react-icons/ai'
import { useState } from "react";
import Button from "../components/Button/Button";

function TicketDetail({ theme }: themeProps) {
    const [comment, setComment] = useState("")

    const handleComment = () => {
    }
    return (
        <div className="flex mg:h-screen flex-col bg-base-200 min-h-screen" data-theme={theme}>
            <div className="md:h-8 px-8 pt-8 flex-grow">
                <Breadcrumbs />
                <div className="flex items-center justify-between">
                    <h2 className="ext-lg md:text-2xl font-bold">Ticket Details</h2>
                    <AiOutlineReload className="hover:cursor-pointer" />
                </div>
            </div>
            <div className="flex m-4 flex-col md:flex-row flex-grow gap-3">
                <div className={`w-full md:w-4/6 p-7 justify-between flex flex-col ${theme === "dark" ? "bg-black" : "bg-white "}  rounded-lg gap-3 md:gap-0`}>
                    <div>
                        <h6>Ticket ID</h6>
                        <h4 className="font-bold text-lg">784</h4>
                    </div>
                    <div>
                        <h6>Title</h6>
                        <h4 className="font-bold text-lg">Change fd interest</h4>
                    </div>
                    <div>
                        <h6>Description</h6>
                        <h6 className="font-bold">fd 3612, 3613 8.5%</h6>
                    </div>
                    <div className="flex justify-between md:flex-row flex-col gap-3 md:gap-0">
                        <div>
                            <h6>Priority</h6>
                            <Badge bgColor="bg-orange-500" >Very High</Badge>
                        </div>
                        <div>
                            <h6>Status</h6>
                            <Badge bgColor="text-orange-500" showStatus={"resolved"}>Resolved</Badge>
                        </div>
                        <div>
                            <h6>Created At</h6>
                            <h4 className="font-bold">11 Aug 2023 4:0 PM</h4>
                        </div>
                    </div>
                    <div>
                        <h6>Reported By</h6>
                        <h4 className="font-bold uppercase">Kakkodi vanitha</h4>
                    </div>
                    <div>
                        <h6>Category</h6>
                        <Badge bgColor="bg-base-200">Deposits</Badge>
                    </div>
                    <div>
                        <h6>Acknowledged By</h6>
                        <h4 className="font-bold">Megha</h4>
                    </div>
                    <div>
                        <h6>Attachment</h6>
                        <ShowAttachment customClass="text-customColor">Attachment</ShowAttachment>
                    </div>
                </div>
                <div className="w-full md:w-2/6 h-auto flex flex-col gap-3">
                    <div className={` ${theme === "dark" ? "bg-black" : "bg-white "} rounded-lg  p-8  h-4/6 justify-between flex flex-col gap-3 md:gap-0`}>
                        <div>
                            <div className="flex items-center justify-between">
                                <h6 className="font-bold">Comments <Badge bgColor="bg-orange-500">+5</Badge></h6>
                                <AiOutlineReload className="hover:cursor-pointer" />
                            </div>
                            <ShowBubble />
                        </div>
                        <div>
                            <InputBox placeholder="comment" type="textbox" customClass="w-full mb-2" state={comment} setState={setComment} />
                            <Button bgColor="bg-customColor" customClass="w-full" validate={handleComment}>Add Comment</Button>
                        </div>
                    </div>
                    <div className={`${theme === "dark" ? "bg-black" : "bg-white "} rounded-lg  p-8 h-2/6`} >
                        <h6 className="font-bold mb-2">List</h6>
                        <div className="max-h-28 overflow-y-auto flex flex-col gap-2 scrollbar-none ">
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                            <div className="bg-gray-800 text-white p-2 rounded-xl w-fit">You were the Chosen One!</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TicketDetail