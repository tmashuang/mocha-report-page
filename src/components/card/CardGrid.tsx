import { Grid } from "@mantine/core";
import { TestInfo } from '../run-info/TestInfo'
import { CardInfo } from "./CardInfo";
import { TestListRender } from "../test-list-overview/TestListOverview";
import { FilesListRender } from "../files-info/FilesInfo";

export const CardGrid = () => {
  const props = {
    cardName: 'Something',
    tableHead: ['Filename', 'Tests', 'Execution Time', 'Passed', 'Failed', 'Retry'],
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
        <FilesListRender />
      </Grid.Col>
      <Grid.Col span={6}>
        <CardInfo
          {...props}
          showChart
        />
      </Grid.Col>
      <Grid.Col span={6}>
        <TestListRender tableHead={props.tableHead} />
      </Grid.Col>
    </Grid>
  )
}