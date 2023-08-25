import { IoIosAttach } from 'react-icons/io'

interface ShowAttachmentProps {
  children?: string,
  customClass?: string,
}

function ShowAttachment({ children, customClass }: ShowAttachmentProps) {
  return (
    <div className='flex items-center'>
      <IoIosAttach className={`mr-2 ${customClass}`} />
      <span className='font-bold'>{children}</span>
    </div>
  )
}

export default ShowAttachment