import copyImg from '../assets/images/copy.svg';
import { toast, Toaster } from 'react-hot-toast';

import '../styles/room-code.scss'

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps){
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code)

    toast.success('Codigo copiado com sucesso', { duration: 3000 })
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      {/* <Toaster
        position="bottom-left"
        reverseOrder={false}
      /> */}
      <span>Sala {props.code}</span>
    </button>
  )
}