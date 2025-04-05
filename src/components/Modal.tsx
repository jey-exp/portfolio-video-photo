import React, { useState } from 'react'
import { FaRegWindowClose } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";


interface ModalProps {
    close : ()=> void,
    title : String,
    content : String,
    type : String
}

const Modal = ({close, title, content, type} : ModalProps) => {
    const [hover, setHover] = useState<boolean>(false);
  return (
    <div className="inset-0 h-screen w-screen fixed bg-black/40 backdrop-blur-lg flex items-center justify-center z-50">
      <div className="absolute h-5/6 w-5/6 bg-white/70 backdrop-blur-xl rounded-xl">
        <div className="h-full w-full p-5 flex flex-col justify-center gap-2">
          <div className="flex justify-between items-center gap-2 h-6">
            <div className="h-full">
              <h1>Hey</h1>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={close}
            >
              {hover === false ? (
                <FaRegWindowClose color="#FF9800" size={25} />
              ) : (
                <FaWindowClose color="#FF9800" size={25} />
              )}
            </div>
          </div>
          <div className="h-full w-full bg-slate-600">
            {type === "video" ? (
              <div>
                <h2>video</h2>
              </div>
            ) : (
              <div>
                <h2>photo</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal