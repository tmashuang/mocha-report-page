import { Card, Table } from "@mantine/core";
import { fileInfoFormat, durationToSecs } from "../utils";
import { CardTopBar } from '../card/CardInfo'
import { useAppSelector } from "../../app/hooks";

export const FilesInfo = () => {
  const filesInfo = useAppSelector((state) => fileInfoFormat(state))

  const rows = (filesInfo.map((file: any, i: any) => {
    return (
        <Table.Tr key={i}>
          <Table.Td>{file.name}</Table.Td>
          <Table.Td>{file.count}</Table.Td>
          <Table.Td>{durationToSecs(file.executionTime)}</Table.Td>
          <Table.Td
            style={{
              backgroundColor: '#75FA8D'
            }}
          >
            {file.passed}
          </Table.Td>
          <Table.Td
              style={{
                backgroundColor: '#F96464'
              }}
          >
            {file.failed}
          </Table.Td>
          <Table.Td
              style={{
                backgroundColor: '#F9FA80'
              }}
          >
            {file.retries}
          </Table.Td>
        </Table.Tr>
    )
  }));

const head = (
  <>
    <Table.Tr>
      <Table.Th>Filename</Table.Th>
      <Table.Th>Tests</Table.Th>
      <Table.Th>Execution Time</Table.Th>
      <Table.Th>
        Passed
      </Table.Th>
      <Table.Th>
        Failed
      </Table.Th>
      <Table.Th>
        Retries
      </Table.Th>
    </Table.Tr>
  </>
)

  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Status by test file'/>
      </Card.Section>
        <Table horizontalSpacing='xs'>
          <Table.Thead>{head}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Card>
    </>
  )
}