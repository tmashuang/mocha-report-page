import { Card, NavLink, Grid } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";
import { DonutChart } from "../donut-chart/DonutChart";
import { TableRender } from '../table/Table'

export const CardTopBar = (props: any) => {
  return (
    <NavLink
      color="rgba(232, 234, 235)"
      variant="filled"
      active
      autoContrast
      label={props.cardName}
      rightSection={
        <IconChevronDown />
      }
    />
  )
}

const DonutandBreakdown = (props: any) => {
  return (
    <Grid columns={24} >
    {props.showChart ?
      <Grid.Col span={12}>
          <DonutChart />
      </Grid.Col>
    : null
    }
    <Grid.Col span={10}>
      <TableRender />
    </Grid.Col>
  </Grid>
  )
}

export const CardInfo = (props: any) => {
  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName={props.cardName}/>
      </Card.Section>

      <DonutandBreakdown showChart={props.showChart}/>
    </Card>
    </>
  )
}