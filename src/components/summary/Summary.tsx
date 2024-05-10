import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from "../card/CardInfo";
import { DonutChart } from "../donut-chart/DonutChart";

import { TableRender } from "../table/Table";
import { retryCount } from "../utils";

export const Summary = () => {
  const tests = useAppSelector((state: any) => state.tests)
  const passes = useAppSelector((state: any) => state.passes)
  const failed =  useAppSelector((state: any) => state.failures)
  const retries = useAppSelector((state: any) => retryCount(state.tests))


  const props = {
    chartName: 'Summary',
    tableHead: ['Status', 'Tests', 'Percentage'],
    tableBody: [
      ['Passed', passes.length, '100 %'],
      ['Failed', failed.length, '0 %'],
      ['Retries',retries, '0 %']
    ],
    statuses: ['Passes', 'Failed', 'Retries'],
    counts: [passes.length, failed.length],
    total: tests.length,
  }

  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Summary'/>
      </Card.Section>
        <Grid columns={24} >
          <Grid.Col span={12}>
              <DonutChart
                total={props.total}
                labels={props.statuses}
                values={props.counts}
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