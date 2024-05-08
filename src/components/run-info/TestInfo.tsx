import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from '../card/CardInfo'

import { getTestStarted, getTestEnded, getTestDuration } from './testInfoSlice'


export const TestInfo = () => {
  // const testStarted = useAppSelector((state: any) => state.stats.start)
  // const testEnded = useAppSelector((state: any) => state.stats.end)
  // const totalRunTime = useAppSelector((state: any) => state.stats.duration)
  const dateTimeStarted = useAppSelector(getTestStarted)
  const dateTimeEnded = useAppSelector(getTestEnded)
  const timeInSecs = useAppSelector(getTestDuration)


  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Run Info'/>
      </Card.Section>
      <Grid columns={2} justify="space-around" align="stretch">
        <Grid.Col span={1}>
          Project
        </Grid.Col>
        <Grid.Col span={1}>
          Test E2E RPC
        </Grid.Col>
        <Grid.Col span={1}>
          Release
        </Grid.Col>
        <Grid.Col span={1}>
          11.4.3
        </Grid.Col>
        <Grid.Col span={1}>
          Test Environment
        </Grid.Col>
        <Grid.Col span={1}>
          Test
        </Grid.Col>
        <Grid.Col span={1}>
          Execution Start Time
        </Grid.Col>
        <Grid.Col span={1}>
          {dateTimeStarted}
        </Grid.Col>
        <Grid.Col span={1}>
        Execution End Time
        </Grid.Col>
        <Grid.Col span={1}>
          {dateTimeEnded}
        </Grid.Col>
        <Grid.Col span={1}>
          Total Execution Time
        </Grid.Col>
        <Grid.Col span={1}>
          {`${timeInSecs}s`}
        </Grid.Col>
      </Grid>
      </Card>

    </>
  )
}