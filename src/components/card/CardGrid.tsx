import { Grid } from "@mantine/core";
import { TestInfo } from '../run-info/TestInfo'
import { FilesListRender } from "../files-info/FilesInfo";
import { BrowserBreakdown } from "../browserbreakdown/BrowserBreakdown";
import { Summary } from "../summary/Summary";
import { FilesInfo } from "../table/FileInfoTable";

export const CardGrid = () => {
  return (
    <Grid grow align="stretch" justify="flex-start">
      <Grid.Col span={6}>
        <TestInfo/>
      </Grid.Col>
      <Grid.Col span={6}>
        <Summary />
      </Grid.Col>
      <Grid.Col span={6}>
        <FilesListRender />
      </Grid.Col>
      <Grid.Col span={6}>
      <BrowserBreakdown />
      </Grid.Col>
      <Grid.Col span={6}>
        <FilesInfo />
      </Grid.Col>
    </Grid>
  )
}