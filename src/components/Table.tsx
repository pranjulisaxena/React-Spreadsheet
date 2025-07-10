import {
  useReactTable,
  getCoreRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";
import BriefCase from "../assets/BriefCase.svg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Calender from "../assets/Calender.svg";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa";
import  HandNEmoji from '../assets/HandEmoji.svg';


type JobRequest = {
  id: number;
  Job : string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

const JobRequestsTable = () => {
  const [sortStates, setSortStates] = useState<{ [key: string]: boolean }>({});

const toggleSort = (column: string) => {
  setSortStates((prev) => ({
    ...prev,
    [column]: !prev[column],
  }));
  console.log(`${column} sort toggled`, !sortStates[column]);
};


  const [data] = useState<JobRequest[]>([
    {
      id: 1,
      Job: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapai...",
      assigned: "Sophie Chou...",
      priority: "Medium",
      dueDate: "20-11-2024",
      estValue: "6,200,000",
    },
    {
      id: 2,
      Job: "Update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankha...",
      assigned: "Tejas Pandey",
      priority: "High",
      dueDate: "30-10-2024",
      estValue: "3,500,000",
    },
    {
      id: 3,
      Job: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjoh...",
      assigned: "Rachel Lee",
      priority: "Medium",
      dueDate: "10-12-2024",
      estValue: "4,750,000",
    },
    {
      id: 4,
      Job: "Design for new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygr...",
      assigned: "Tom Wright",
      priority: "Low",
      dueDate: "15-01-2025",
      estValue: "5,900,000",
    },
    {
      id: 5,
      Job: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicab...",
      assigned: "Kevin Smith",
      priority: "Low",
      dueDate: "30-01-2025",
      estValue: "2,800,000",
    },
    // Empty rows
    { id: 6 } as JobRequest,
    { id: 7 } as JobRequest,
    { id: 8 } as JobRequest,
    { id: 9 } as JobRequest,
    { id: 10 } as JobRequest,
    { id: 11 } as JobRequest,
    { id: 12} as JobRequest,
    { id: 13} as JobRequest,
    { id: 14 } as JobRequest,
    { id: 15} as JobRequest,
    { id: 16} as JobRequest,
    { id: 17} as JobRequest,
    { id: 18 } as JobRequest,
    { id: 19 } as JobRequest,
    { id: 20} as JobRequest,
    { id: 21} as JobRequest,
    { id: 22 } as JobRequest,
    { id: 23} as JobRequest,
    { id: 24} as JobRequest,
    { id: 25} as JobRequest,
    { id: 26} as JobRequest,
  ]);

  const columns: ColumnDef<JobRequest>[] = [
    {
      id: "rowNumber",
          header: () => (
    <div className="flex items-center justify-between">
     <p className="pl-2 text-gray-400 text-2xl font-light">#</p>
    </div>


  ),
      cell: ({ row }) => <span>{row.index + 1}</span>,
      size: 20,
    },
      {
    accessorKey: "Job", // <-- Add this block for Job Description
    header: () => (
    <div className="flex items-center justify-between cursor-pointer " onClick={() => toggleSort("Job") }>
      <div className="flex items-center justify-start gap-1 text-sm">
      <img src={BriefCase} className="h-5 pl-2" /> <p className="text-sm">Job Request</p>
    </div>
      <MdOutlineKeyboardArrowDown  className={`text-gray-400 mr-2  ${
          sortStates["Job"] ? "rotate-180" : ""
        }`} />
    </div>


  ),
    size: 230,
    cell: ({getValue}) => {
        const jobDescription = getValue() as string;
        return (
            <span className="text-gray-800 text-xs font-semibold">
                {jobDescription}
            </span>
        );
    }
  },
    {
      accessorKey: "submitted",
      header: () => (
    <div className="flex items-center justify-between cursor-pointer"  onClick={() => toggleSort("Submitted")}>
      <div className="flex items-center justify-start gap-1 text-sm">
      <img src={Calender} className="h-5 pl-2" /> <p className="text-sm">Submitted</p>
    </div>
        <MdOutlineKeyboardArrowDown  className={`text-gray-400 mr-2  ${
          sortStates["Submitted"] ? "rotate-180" : ""
        }`} />
    </div>
      ),
      size: 120,
      cell: ({getValue}) => {
        const jobDescription = getValue() as string;
        return (
            <span className="text-gray-800 text-xs font-semibold flex justify-end">
                {jobDescription}
            </span>
        );
    }

    },
    {
      accessorKey: "status",
      header: () => (
    <div className="flex items-center justify-between cursor-pointer"  onClick={() => toggleSort("Status")}>
      <div className="flex items-center justify-start gap-1 text-sm">
      <IoIosArrowDropdownCircle className="text-[#BCBCBC] text-lg ml-2" /> <p className="text-sm">Status</p>
    </div>
     <MdOutlineKeyboardArrowDown  className={`text-gray-400 mr-2  ${
          sortStates["Status"] ? "rotate-180" : ""
        }`} />
    </div>
      ),
      cell: ({ getValue }) => {
        const status = getValue() as string;
        let bgColor = "";
        
        if (status === "In-process") bgColor = "bg-[#FFF3D6] text-[#85640B]"; ;
        if (status === "Need to start") bgColor = "bg-[#E2E8F0] text-[#475569]";
        if (status === "Complete") bgColor = "bg-[#D3F2E3] text-[#0A6E3D]";
        if (status === "Blocked") bgColor = "bg-[#FFE1DE] text-[#C22219]";
        
        return (
          <span className={`px-2 py-1 rounded-xl text-xs font-semibold  ${bgColor}`}>
            {status}
          </span>
        );
      },
      size: 110,
    },
    {
      accessorKey: "submitter",
      header: () => (
    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSort("Submitter")}>
      <div className="flex items-center justify-start gap-1 text-sm">
      <FaUser className="text-[#BCBCBC] text-lg ml-2" /> <p className="text-sm">Submitter</p>
    </div>
         <MdOutlineKeyboardArrowDown  className={`text-gray-400 mr-2  ${
          sortStates["Submitter"] ? "rotate-180" : ""
        }`} />
    </div>
      ),
      size: 80,
        cell: ({ getValue }) => {
            const submitter = getValue() as string;
            return (
            <span className="text-gray-800 text-xs font-semibold">
                {submitter}
            </span>
            );
        },
    },
    {
      accessorKey: "url",
      header: () => (
    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSort("URL")}>
      <div className="flex items-center justify-start gap-1 text-sm"  >
      <FaGlobe className="text-[#BCBCBC] text-lg ml-2" /> <p className="text-sm ">URL</p>
    </div>
       <MdOutlineKeyboardArrowDown  className={`text-gray-400 mr-2  ${
          sortStates["URL"] ? "rotate-180" : ""
        }`} />
    </div>
      ),
      size: 100,
      cell: ({ getValue }) => {
        const status = getValue() as string;
       
        return (
          <span className={`px-2 py-1 rounded-xl text-xs font-semibold  underline`}>
            {status}
          </span>
        );
      },
    },
    {
      accessorKey: "assigned",
            header: () => (
      <div className="flex items-center justify-start gap-1 text-sm p-2 bg-[#E8F0E9] cursor-pointer"  onClick={() => toggleSort("Assigned")}>
     <img src={HandNEmoji} className="h-4  pl-2" /> <p className="text-sm text-[#666C66]">Assigned </p>
    </div>
      ),
      size: 120,
        cell: ({ getValue }) => {
            const assigned = getValue() as string;
            return (
            <span className="text-gray-800 text-sm font-arial">
                {assigned}
            </span>
            );
        },
    },
    {
      accessorKey: "priority",
      header: () => (
      <div className="flex items-center justify-start gap-1 text-sm p-2 bg-[#EAE3FC] border-white border-x-1 cursor-pointer">
       <p className="text-[#655C80]">Priority</p>
    </div>
      ),
      cell: ({ getValue }) => {
        const priority = getValue() as string;
        let textColor = "";
        
        if (priority === "High") textColor = "text-[#EF4D44]";
        if (priority === "Medium") textColor = "text-[#C29210]";
        if (priority === "Low") textColor = "text-[#1A8CFF]";
        
        return <span className={`${textColor} font-semibold text-sm`}>{priority}</span>;
      },
      size: 100,
    },
    {
      accessorKey: "dueDate",
      header: () => (
      <div className="flex items-center justify-start gap-1 cursor-pointer text-sm p-2 bg-[#EAE3FC]  border-white  border-r-1">
       <p className="text-[#655C80] ">Due Date</p>
      </div>
      ),
      size: 100,
      cell: ({ getValue }) => {
        const dueDate = getValue() as string;
        return (
          <span className="text-gray-800 text-sm font-semibold">
            {dueDate}
          </span>
        );
      },
    },
    {
      accessorKey: "estValue",
      header: () => (
      <div className="flex items-center justify-start gap-1 cursor-pointer text-sm p-2 bg-[#FFE9E0]">
       <p className="text-[#695149]">Est. Value</p>
    </div>
      ),
      size: 100,
      cell: ({ getValue }) => {
        const estValue = getValue() as string;
        const rupee = estValue ? "₹" : "";
        return (
         <div className="flex justify-center items-center gap-1 ">
           <span className="text-gray-800 text-sm font-semibold">
            {estValue}
          </span>
          <p className="text-gray-400">{rupee}</p>
         </div>
        );
      }
    },
    // Empty column
    {
      id: "empty1",
      header: "",
      cell: () => <span></span>,
      size: 100,
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="max-w-full m-0 overflow-auto pr-2">
      <div className=" m-0 overflow-auto">
        <table className="w-full border-collapse">
         <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border border-gray-200 text-left font-medium text-gray-700 bg-[#EEEEEE]"
                    style={{ width: header.getSize() }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border p-2 text-gray-800 border-gray-200 hover:border-[#6C8B70] hover:border-2"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>


        </table>
      </div>
    </div>
  );
};

export default JobRequestsTable;