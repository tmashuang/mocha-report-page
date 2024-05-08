import type { TableData } from "@mantine/core";
import { Card, Table } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'

import { getAllFileNamesNested } from './testListSlice';
import { CardTopBar } from "../card/CardInfo";

export const TestListRender = () => {
  const nestedFiles = useAppSelector(getAllFileNamesNested)

  const tableData: TableData = {
    head: ['Filename', 'Tests', 'Execution Time', 'Passed', 'Failed', 'Retry'],
    body: nestedFiles,
  }

  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Status by test file'/>
      </Card.Section>
        <Table
          horizontalSpacing='xl'
          data={tableData}
        />
      </Card>
    </>
  )
}