import Badge from "../../components/Badge/Badge";
import Modal from "../../components/Modal/Modal";
import InputBox from "../../components/InputBox/InputBox";
import { useState } from "react";
import Button from "../../components/Button/Button";
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
  const [editUser, setEditUser] = useState(userData.map(user => ({ ...user })));




  const handleUpdate = () => {
    setUserData(editUser);
    console.log(editUser)
  };

  const handleCancel = () => {
    setEditUser(userData);
  }


  const handleDelete = (id: string) => {
    const newUsers = userData.filter((n) => n.id !== id);
    setUserData(newUsers);
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
        hamClass="text-stone-500 hover:text-stone-800"
        items={[
          <Modal
            key={user.id?.toString()} // Add a key here to help React track modals
            name="Edit"
            customClass="bg-customColor hover:bg-blue-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
            title="Edit Note"
            close={true}
            customButton2={
              <Button bgColor="bg-customColor" validate={handleUpdate}>
                Update
              </Button>
            }
            customButton={
              <Button customClass="text-black" validate={handleCancel}>Cancel</Button>
            }
          >
            <>
              <InputBox
                type="text"
                label="Username"
                customClass="w-full"
                state={editUser.filter((viewUser) => viewUser.id === user.id)[0].username}
                setState={(e) => {
                  const newData = [...editUser];
                  newData.filter((viewUser) => viewUser.id === user.id)[0].username = e;
                  setEditUser(newData);
                }}
              />
              <InputBox
                type="text"
                label="Full Name"
                customClass="w-full"
                state={editUser.filter((viewUser) => viewUser.id === user.id)[0].fullName}
                setState={(e) => {
                  const newData = [...editUser];
                  newData.filter((viewUser) => viewUser.id === user.id)[0].fullName = e;
                  setEditUser(newData);
                }}
              />
              <InputBox
                type="text"
                label="Status"
                customClass="w-full"
                state={editUser.filter((viewUser) => viewUser.id === user.id)[0].status}
                setState={(e) => {
                  const newData = [...editUser];
                  newData.filter((viewUser) => viewUser.id === user.id)[0].status = e;
                  setEditUser(newData);
                }}
              />
            </>
          </Modal>,

          <Modal name="Delete"
            customClass="bg-red-500 hover:bg-red-800 text-white min-h-fit text-base w-full h-fit flex justify-center p-1 font-semibold px-2"
            title="Edit User"
            customButton={<Button bgColor="bg-red-500" validate={() => handleDelete(user.id)}>Delete</Button>}
          >
            <></>
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
