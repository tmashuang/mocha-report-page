import { Grid } from "@mantine/core";
import { TestInfo } from '../run-info/TestInfo'
import { CardInfo } from "./CardInfo";
import { TestListRender } from "../test-list-overview/TestListOverview";

export const CardGrid = () => {
  const props = {
    cardName: 'Something'
  }
  return (
    <Grid grow>
      <Grid.Col span={6}>
        <TestInfo/>
      </Grid.Col>
      <Grid.Col span={6}>
        <CardInfo
         {...props}
          showChart
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <CardInfo
         {...props}
         showChart
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <CardInfo
          {...props}
          showChart
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TestListRender />
      </Grid.Col>
    </Grid>
  )
}