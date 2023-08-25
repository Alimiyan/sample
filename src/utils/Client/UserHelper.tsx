import { DataProps } from "../../types/Types";
import Badge from "../../components/Badge/Badge";
import { BsThreeDots } from "react-icons/bs";
import Modal from "../../components/Modal/Modal";
import InputBox from "../../components/InputBox/InputBox";
import { useState } from "react";
import Button from "../../components/Button/Button";
import HamUtility from "./HamUtility";
import Hamburger from "../../components/Hamburger/Hamburger";

function UserHelper() {
  // const [username, setUsername] = useState("John Doe")
  // const [fullName, setFullName] = useState("John Doe")
  // const [status, setStatus] = useState("Active")
  // const [createdAt, setCreatedAt] = useState("15 Apr 2023 2:00PM")
  // const [uploadedAt, setUploadedAt] = useState("15 Apr 2023 2:00PM")

  const [userData, setUserData] = useState([
    {
      id: "1",
      username: "John Doe",
      fullName: "John Doe",
      status: "Active",
      createdAt: "15 Apr 2023 2:00PM",
      uploadedAt: "15 Apr 2023 2:00PM",
    },
    {
      id: "2",
      username: "Doe John",
      fullName: "Doe JOhn",
      status: "Active",
      createdAt: "15 Apr 2023 2:00PM",
      uploadedAt: "15 Apr 2023 2:00PM",
    },
    {
      id: "3",
      username: "Doe John",
      fullName: "Doe JOhn",
      status: "Active",
      createdAt: "15 Apr 2023 2:00PM",
      uploadedAt: "15 Apr 2023 2:00PM",
    },
  ]);
  const [editUser, setEditUser] = useState(() => (
    userData.map(user => ({ ...user }))
  ));


  const handleUpdate = () => {
  };


  const handleDelete = () => {
  }

  const modalData = userData.map((user) => ({
    id: user.id,
    username: user.username,
    fullName: user.fullName,
    status: <Badge customClass="text-orange-400">{user.status}</Badge>,
    createdAt: user.createdAt,
    uploadedAt: user.uploadedAt,
    action: (
      <Hamburger
        
        items={[
          <Modal
            key={user.id?.toString()} // Add a key here to help React track modals
            name="Edit"
            customClass="bg-customColor hover:bg-blue-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
            title="Edit Note"
            customButton={
              <Button bgColor="bg-customColor" validate={handleUpdate}>
                Update
              </Button>
            }
          >
            <div >
              <InputBox
                type="text"
                label="Username"
                customClass="w-full"
                state={}
                setState={ }
              />
            </div>
          </Modal>,
          <Modal name="Delete"
            customClass="bg-red-500 hover:bg-red-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
            title="Edit Note"
            customButton={<Button bgColor="bg-red-500" validate={() => handleDelete()}>Delete</Button>}
          >
            <div>

            </div>
          </Modal>
        ]}
      />
    ),
  }));


  return modalData
}

export default UserHelper

export const modalHeader: string[] = [
  "ID",
  "Username",
  "Full Name",
  "Status",
  "Created At",
  "Uploaded At",
  "Action",
];
