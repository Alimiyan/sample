import Hamburger from "../../components/Hamburger/Hamburger"
import Modal from "../../components/Modal/Modal"
import InputBox from "../../components/InputBox/InputBox"
import Button from "../../components/Button/Button"
import { Note } from "../../types/Types"
import { useEffect } from "react"

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

    useEffect(() => {
        console.log(editNote.filter((viewNote) => viewNote.id === note.id)[0]?.content || "")
    }, [])
    return (
        <>
            <Hamburger items={[
                <Modal name="Edit"
                    customClass="bg-customColor hover:bg-blue-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
                    title="Edit Note"
                    close={false}
                    customButton={<Button bgColor="bg-customColor" validate={handleUpdate}>Update</Button>}
                >
                    <div>
                        <InputBox type="text"
                            customClass="w-full"
                            state={(editNote.find((viewNote) => viewNote.id === note.id) || { content: "" }).content}
                            setState={
                                (e) => {
                                    const newData = [...editNote];
                                    (newData.find((viewNote) => viewNote.id === note.id) || { content: "" }).content = e;
                                    setEditNote(newData);
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