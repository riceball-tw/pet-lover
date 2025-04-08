'use client';

import { useRef, useEffect } from "react";
import type { Dispatch, SetStateAction } from 'react'

type Props = {
  isDialogOpen: boolean
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
} 
  & Readonly<{
  children: React.ReactNode;
}>

export default function Dialog({
  children,
  isDialogOpen,
  setIsDialogOpen
}: Props) {

  const dialogRef = useRef<HTMLDialogElement>(null)

  function setDialog(targetState: boolean) {
    if(!dialogRef.current) {
      return
    }
    if (targetState) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }

  useEffect(() => {
    setDialog(isDialogOpen)
  }, [isDialogOpen])

  return (
   <>
    <dialog className="backdrop:bg-black/70 bg-transparent backdrop:backdrop-blur-md w-full h-full text-global-dialog-foreground" ref={dialogRef}>
      <button onClick={() => setIsDialogOpen(false)} className="fixed top-4 right-3 p-2 cursor-pointer" type="button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <g id="close">
          <path id="Path 2" d="M17.6568 17.6569L6.34313 6.34315" stroke="white" strokeLinecap="round"/>
          <path id="Path 2_2" d="M17.6569 6.34315L6.34317 17.6569" stroke="white" strokeLinecap="round"/>
          </g>
        </svg>
      </button>
      <div className="flex justify-center items-center w-full h-full">
      { children }
      </div>
    </dialog>
   </>
  );
}
