import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  ColumnDef,
} from "@tanstack/react-table";
import { FcSynchronize } from "react-icons/fc";
import { IoLinkOutline } from "react-icons/io5";
import ForkGreen from '../assets/ForkGreen.svg';
import Fork from '../assets/Fork.svg';
import { HiDotsHorizontal } from "react-icons/hi";
import { FiPlus } from "react-icons/fi";

type RowData = {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  col5: string;
  col6: string;
  col7: string;
};

const data: RowData[] = [
  {
    col1: "col1",
    col2: "col2",
    col3: "col3",
    col4: "col4",
    col5: "col5",
    col6: "col6",
    col7: "col7",
  },
];

const columns: ColumnDef<RowData>[] = [
  { accessorKey: "col1", 
    header: () => (
      <div className="text-sm px-4 py-2  ">
      </div>
      ),
    size: 20
  }, // Header for Column 1
  { accessorKey: "col2",
   header: () => (
      <div className="flex items-center gap-2 bg-[#E2E2E2] py-1 px-2 pr-82">
        <div className="flex items-center gap-2 bg-[#EEEEEE] px-2 rounded-md">
         < IoLinkOutline className="text-[#1A8CFF] text-xl"/>
          <p className="text-[#545454] font-normal text-sm py-1.5">Q3 Financial Overview</p>
        </div>
        <FcSynchronize className="text-red-600 text-lg cursor-pointer" onClick={() => alert("...clicked")}/>

      </div>
    ),
 },
  { accessorKey: "col3",
    header: () => (
      <div className="text-sm px-8 pr-20 bg-[#E2E2E2 ] " >
        <p className="text-[#545454] font-normal text-sm" ></p>
        </div>
        ),
 },
  { accessorKey: "col4",
     header: () => (
      <div className="text-sm bg-[#D2E0D4] flex py-2.5 pr-9 justify-center items-center gap-1 cursor-pointer" onClick={() => alert("...clicked")}>
        <img src={ForkGreen} className="ml-2" alt="Fork"/>
          <div className="flex justify-center items-center gap-2"><p className="text-[#4A5565] font-medium">ABC</p> <HiDotsHorizontal className="text-[#AFAFAF]"/></div>
        </div>
        ),
     },
  { accessorKey: "col5",
      header: () => (
      <div className="text-sm bg-[#DCCFFC]  pr-3 flex py-2.5 justify-center items-center gap-1 border-x-1 border-white cursor-pointer" onClick={() => alert("...clicked")}>
        <img src={Fork} className="ml-2" alt="Fork"/>
          <div className="flex justify-center items-center gap-2"><p className="text-[#4A5565] font-medium">Answer a question</p> <HiDotsHorizontal className="text-[#AFAFAF]"/></div>
        </div>
        ),
     },
  { accessorKey: "col6",
          header: () => (
      <div className="text-sm bg-[#FAC2AF] flex py-2.5 justify-center items-center gap-1 cursor-pointer" onClick={() => alert("...clicked")}>
        <img src={Fork} className="ml-2" alt="Fork"/>
          <div className="flex justify-center items-center gap-2"><p className="text-[#4A5565] font-medium">Extract</p> <HiDotsHorizontal className="text-[#AFAFAF]"/></div>
        </div>
        ),
     },
  { accessorKey: "col7",
      header: () => (
      <div className="bg-[#EEEEEE] flex justify-center items-center py-1 gap-1 px-7.5 text-3xl mr-2 border-b-1 border-[#EEEEEE] cursor-pointer" onClick={() => alert("...clicked")}>
         <FiPlus />
        </div>
        ),
     },
];

function TableComponent() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto w-full" >
      <table className="table-auto border-b border-white w-full overflow-x-auto">
        <thead >
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default TableComponent;

