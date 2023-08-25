import { useState } from "react";
import FilterBar from "../components/FilterBar/FilterBar";
import Modal from "../components/Modal/Modal";
import Pagination from "../components/Pagination/Pagination";
import Table from "../components/Table/Table";
import Tabs from "../components/Tabs/Tabs";
import { themeProps } from "../types/Types";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import { data, headData } from "../utils/TableData";

function IncidentList({ theme }: themeProps) {
    const [activeTab, setActiveTab] = useState(1)
    const [currPage, setCurrPage] = useState(1)
    return (
      <div className="flex flex-col min-h-screen min-w-full" data-theme={theme}>
        <div className="flex flex-col p-4 md:p-8 h-auto md:h-2/6 w-full md:w-auto">
          <Breadcrumbs />
          <div className="flex items-center py-2 md:py-4 justify-between">
            <h2 className="text-lg md:text-2xl font-bold">Tickets</h2>
            <Modal customClass="bg-customColor hover:bg-blue-800 text-white" name="+ Raise Ticket" title="Raise Ticket" />
          </div>
          <FilterBar />
        </div>
        <div className="h-auto md:h-4/6 p-4 md:p-8 w-full md:w-auto">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="items-center flex flex-col justify-between h-full md:px-8">
            <Pagination state={currPage} setState={setCurrPage} customClass="pb-8" />
            <Table tableData={data} tableHeader={headData}/>
            <Pagination state={currPage} setState={setCurrPage} customClass="pt-8 mt-auto" />
          </div>
        </div>
      </div>




    )
  }

export default IncidentList