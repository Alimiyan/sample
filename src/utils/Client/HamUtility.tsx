import Hamburger from "../../components/Hamburger/Hamburger"
import Modal from "../../components/Modal/Modal"
import InputBox from "../../components/InputBox/InputBox"
import Button from "../../components/Button/Button"
import { useState } from "react"
import { Note } from "../../types/Types"

interface HamUtilityProps {
    note: Note,
    state: Note[],
    index?: number,
    setState: (val: Note[]) => void,
    editNote: Note[],
    setEditNote: (val: Note[]) => void
}

function HamUtility({ note, state, setState, index, editNote, setEditNote }: HamUtilityProps) {

    const handleUpdate = () => {
        setState(editNote);
    };
    const handleDelete = (note: Note) => {
        const newNotes = state.filter((n) => n.id !== note.id);
        setState(newNotes);
    }
    return (
        <>
            <Hamburger items={[
                <Modal name="Edit"
                    customClass="bg-customColor hover:bg-blue-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
                    title="Edit Note"
                    customButton={<Button bgColor="bg-customColor" validate={handleUpdate}>Update</Button>}
                >
                    <div>
                        <InputBox type="text"
                            customClass="w-full"
                            state={editNote[index!].content}
                            setState={
                                (val) => {
                                    const newEditNote = [...editNote];
                                    newEditNote[index!].content = val;
                                    setEditNote(newEditNote);
                                }
                            }
                        />
                    </div>
                </Modal>
                ,
                <Modal name="Delete"
                    customClass="bg-red-500 hover:bg-red-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
                    title="Edit Note"
                    customButton={<Button bgColor="bg-red-500" validate={() => handleDelete(note)}>Delete</Button>}
                >
                    <div>

                    </div>
                </Modal>
            ]} />
        </>
    )
}

export default HamUtility