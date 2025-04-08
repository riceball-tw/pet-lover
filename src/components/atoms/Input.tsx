"use client";

interface Props {
  value: string,
  setValue: (e: string) => void,
}

export default function Input({value, setValue}: Props) {

  function clearSearch() {
    setValue('')
  }

  return (
   <div className="flex items-center px-2.5 py-1 gap-2.5 bg-global-input-background focus-within:bg-global-input-background--focus transition-colors">
      <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="search">
      <path id="Path 5" d="M14.4121 14.4121L20 20" stroke="currentColor" strokeLinecap="round"/>
      <path id="Oval" fillRule="evenodd" clipRule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z" stroke="currentColor"/>
      </g>
      </svg>

    <input value={value} onChange={e => setValue(e.target.value)} className="peer w-full placeholder:text-global-input-placeholder outline-0" type="search" placeholder="Click to search"/>
    
    <button onMouseDown={clearSearch} className="peer-focus:peer-placeholder-shown:hidden peer-focus:block hidden cursor-pointer" type="button">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="close">
        <path id="Path 2" d="M17.6569 17.6569L6.34315 6.34315" stroke="currentColor" strokeLinecap="round"/>
        <path id="Path 2_2" d="M17.6569 6.34315L6.34314 17.6569" stroke="currentColor" strokeLinecap="round"/>
        </g>
      </svg>
    </button>
   </div> 
  );
}
