import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from "../card/CardInfo";
import { DonutChart } from "../donut-chart/DonutChart";

import {
  filesCount,
  filesCountPercentages
} from '../utils.js'

import { TableRender } from "../table/Table";


export const FilesListRender = () => {
  const tests = useAppSelector((state: any) => state.tests)
  const files = useAppSelector((state: any) => {
    const files = filesCount(state.tests)
    return Object.keys(files)
  })
  const counts = useAppSelector((state: any) => {
    const files = filesCount(state.tests)
    return Object.values(files)
  })
  const fileCountsPercentages = useAppSelector((state: any) => {
    const files = filesCountPercentages(state.tests)
    return Object.entries(files).map(([filename, arr]: any) => [filename, ...arr]);
  })

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
        <Grid columns={24}
            style={{
              height: '400px',
            }}
        >
          <Grid.Col span={12}>
              <DonutChart
                total={props.total}
                labels={props.files}
                values={props.counts}
              />
          </Grid.Col>
          <Grid.Col span={12}
            style={{
              marginTop: '10px',
              height: '400px',
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
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
