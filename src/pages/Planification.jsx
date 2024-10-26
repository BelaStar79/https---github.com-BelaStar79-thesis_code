import React from "react";
import SideMenu from "./components/sideMenu/SideMenu.jsx";
import TableComponent from "./components/tableComponent/TableComponent.jsx";
import { users } from "./components/tableComponent/tablaComponent.js";

export function Planification() {
    return (
        
        <div>
            <TableComponent
                rowsPerPage={5}
                columnNames={["name", "role", "status"]}
                data={users}
            />
        </div>
        
    );
}

export default Planification;
