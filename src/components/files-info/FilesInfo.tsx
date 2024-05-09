import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from "../card/CardInfo";
import { DonutChart } from "../donut-chart/DonutChart";

import { getAllTests, getAllFiles, getAllCounts, getALLFilesCountPercentages } from "../test-list-overview/testListSlice";
import { TableRender } from "../table/Table";


export const FilesListRender = () => {
  const tests = useAppSelector(getAllTests)
  const files = useAppSelector(getAllFiles)
  const counts = useAppSelector(getAllCounts)
  const fileCountsPercentages = useAppSelector(getALLFilesCountPercentages)

  const props = {
    chartName: 'Files',
    tableHead: ['Filename', 'Tests', 'Percentages'],
    tableBody: fileCountsPercentages,
    total: tests.length,
    files,
    counts,
  }


  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Files'/>
      </Card.Section>
        <Grid columns={24} >
          <Grid.Col span={12}>
              <DonutChart
                total={props.total}
                files={props.files}
                counts={props.counts}
              />
          </Grid.Col>
          <Grid.Col span={10}>
            <TableRender
              tableHead={props.tableHead}
              tableBody={props.tableBody}
            />
          </Grid.Col>
        </Grid>
      </Card>
    </>
  )
}
