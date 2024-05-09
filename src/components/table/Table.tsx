import type { TableData } from "@mantine/core";
import { Table } from "@mantine/core";


export const TableRender = (props: any) => {
  const tableData: TableData = {
    head: props.tableHead,
    body: props.tableBody
  }

  return (
    <Table
      horizontalSpacing='xl'
      withRowBorders={false}
      data={tableData}/>
  )
}