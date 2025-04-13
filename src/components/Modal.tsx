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
      <div className="absolute h-5/6 w-5/6 bg-white bg-opacity-15 backdrop-blur-sm rounded-xl">
        <div className="h-full w-full p-8 flex flex-col justify-center gap-2">
          <div className="flex justify-between items-center gap-2 h-6">
            <div className="h-full">
              <h1 className='text-xl font-bold'>{title}</h1>
            </div>
            <div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              onClick={close}
            >
              {hover === false ? (
                <FaRegWindowClose color="#ffffff" size={25} />
              ) : (
                <FaWindowClose color="#ffffff" size={25} />
              )}
            </div>
          </div>
          <div className="h-full w-full rounded-lg">
            {type === "video" ? (
                <video src='/sample-video.mp4' className='h-full w-full object-contain' autoPlay loop controls poster='/Thumbnail.jpg' />
            ) : (
                <img alt='Image' className='w-full h-full object-contain rounded-2xl' src='https://images.unsplash.com/photo-1726549384638-e530b978ac3e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal