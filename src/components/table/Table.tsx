import type { TableData } from "@mantine/core";
import { Table } from "@mantine/core";

const tableData: TableData = {
  head: ['Status', 'Tests', 'Percentages'],
  body: [
    ['Passed', '17', '94.44%'],
    ['Failed', '0', '0%'],
    ['Skipped', '1', '5.55%'],
    ['Retry', '3', '16.66%'],
  ]
}

export const TableRender = () => {
  return (
    <Table
      horizontalSpacing='xl'
      verticalSpacing='md'
      withRowBorders={false}
      data={tableData}/>
  )
}