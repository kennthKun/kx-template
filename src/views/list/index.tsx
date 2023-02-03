import { Component } from "kx_component"
import tableSchema from "./schema/table"
const { TableBox } = Component;
const { columns } = tableSchema
const TablePage = () => {
  return <>
    <div style={{ padding: "20px" }}>
      <TableBox columns={columns()} />
    </div>
  </>
}

export default TablePage