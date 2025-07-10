import { RxDoubleArrowRight } from "react-icons/rx";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { HiOutlineArrowsUpDown } from "react-icons/hi2";
import { LuListFilter } from "react-icons/lu";
import { VscEyeClosed } from "react-icons/vsc";
import { RxPinBottom } from "react-icons/rx";
import { RxPinTop } from "react-icons/rx";
import { FaRegShareFromSquare } from "react-icons/fa6";
import Fork from '../assets/Fork.svg'

const MenuBar = () => {
  return (
    <div className="h-12 flex border-b-1 border-b-gray-300 justify-between py-1 px-1">
     <div className="flex ">
           <div className="toolBar flex justify-center cursor-pointer items-center px-3 border-r-2 border-gray-300 gap-1 text-sm" onClick={() => console.log("Tool bar clicked")}>
            <p >Tool bar</p>
            <p ><RxDoubleArrowRight /></p>
        </div>
        <div className=" flex justify-center cursor-pointer items-center px-3 gap-1 text-sm" onClick={() => console.log("Hide fields clicked")}>
           
           <h4>< VscEyeClosed/></h4>
            <p>Hide fields</p>
        </div>
        <div className="flex justify-center cursor-pointer items-center px-3 gap-1 text-sm " onClick={() => console.log("Sort clicked")}>
            <p><HiOutlineArrowsUpDown/></p>
            <p>Sort</p>
        </div>
        <div className="flex justify-center cursor-pointer items-center px-3 gap-1 text-sm " onClick={() => console.log("Filter clicked")}>
            <p><LuListFilter/></p>
            <p>Filter</p>
        </div>
        <div className="flex justify-center cursor-pointer items-center px-3 gap-1 text-sm " onClick={() => console.log("Cell View clicked")}>
            <p><TbArrowAutofitHeight/></p>
            <p>Cell View</p>
        </div>
     </div>
     <div className="flex gap-5">
        <div className="flex justify-center hover:bg-gray-100 transition-colors cursor-pointer items-center gap-1 text-gray-600 border-1 border-gray-300 px-2 rounded-sm" onClick={() => console.log("Import clicked")}>
            <p><RxPinBottom/></p>
            <p>Import</p>
        </div>
        <div className="flex justify-center  hover:bg-gray-100 transition-colors cursor-pointer items-center gap-1 text-gray-600 border-1 border-gray-300 px-2 rounded-sm" onClick={() => console.log("Export clicked")}>
            <p><RxPinTop/></p>
            <p>Export</p>
        </div>
        <div className="flex justify-center  hover:bg-gray-100 transition-colors cursor-pointer items-center gap-1 text-gray-600 border-1 border-gray-300 px-2 rounded-sm" onClick={() => console.log("Share clicked")}>
            <p><FaRegShareFromSquare/></p>
            <p>Share</p>
        </div>
        <div className="text-sm flex cursor-pointer justify-center items-center gap-1 bg-[#4B6A4F] hover:bg-[#3e5a42] w-36 rounded-md px-2" onClick={() => console.log("New action clicked")}>
           <img src={Fork} alt="Fork icon"/>
           <p className="text-white">New Action</p>

        </div>
     </div>
      
    </div>
  )
}

export default MenuBar
