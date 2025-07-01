import { useState } from 'react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger, faPlus, faUserTie } from "@fortawesome/free-solid-svg-icons";
DataTable.use(DT);
const Portfolio = ({ title }) => {
    const [tableData, setTableData] = useState([
        ['1', 'System Architect', 'Event delegation is used to attach click events because DataTables does DOM manipulation outside of React.', '<button class="cursor-change">✏️</button> <button class="cursor-change">🗑️</button>'],
        ['2', 'System Architect', 'To fetch data using the Fetch API and display it in a React DataTable with an Action button for each row, follow these steps.', '<button class="cursor-change">✏️</button> <button class="cursor-change">🗑️</button>']
    ]);
    return (
        <>
            <hr />
            <div className="flex justify-between">
                <p className="text-[20px]">{title}</p>
                <button className="text-[20px] cursor-change"><FontAwesomeIcon className="text-indigo-600 font-bold" icon={faPlus}></FontAwesomeIcon></button>
            </div>
            <hr />
            <div className="border-1 border-[#7b7b7b] p-5" style={{ margin: "20px 0 0 0" }}>
                <DataTable data={tableData} className="display border"
                    options={{
                        responsive: true,
                        paging: true,
                        pageLength: 5,
                        lengthChange: false,
                    }}
                >
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Post Title</th>
                            <th>Short Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                </DataTable>
            </div>
        </>
    )
}
export default Portfolio;