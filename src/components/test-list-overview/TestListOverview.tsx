import type { TableData } from "@mantine/core";
import { Card, Table } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'

import { getAllFilesCountDuration } from './testListSlice';
import { CardTopBar } from "../card/CardInfo";

export const TestListRender = (props: any) => {
  const nestedFiles = useAppSelector(getAllFilesCountDuration)

  const tableData: TableData = {
    head: props.tableHead,
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