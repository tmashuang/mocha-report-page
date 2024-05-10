import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from "../card/CardInfo";
import { DonutChart } from "../donut-chart/DonutChart";
import { TableRender } from "../table/Table";
import { percentageChrome, percentageFirefox } from '../utils';

export const BrowserBreakdown = () => {
  const tests = useAppSelector((state: any) => state.tests)

  const chromePercent = percentageChrome(tests)
  const ffPercent = percentageFirefox(tests)

  const a = [
    ['Chrome', tests.length, `${chromePercent} %`],
    ['Firefox', 0, `${ffPercent} %`]
  ]

  const props = {
    chartName: 'Browsers',
    tableHead: ['Browsers', 'Tests', 'Percentage'],
    tableBody: a,
    total: tests.length,
    browsers: [a[0][0]],
    counts: [tests.length]
  }

  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Browsers'/>
      </Card.Section>
        <Grid columns={24}
          style={{
            height: '400px',
            overflowX: 'hidden',
            overflowY: 'auto'
          }}
        >
          <Grid.Col span={12} >
              <DonutChart
                total={props.total}
                labels={props.browsers}
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