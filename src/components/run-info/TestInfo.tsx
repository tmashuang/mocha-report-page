import { Card, Grid } from "@mantine/core";
import { useAppSelector } from '../../app/hooks'
import { CardTopBar } from '../card/CardInfo'

import {
  durationToSecs
} from '../utils.js'

export const TestInfo = () => {
  const dateTimeStarted = useAppSelector((state: any) => new Date(state.stats.start).toUTCString())
  const dateTimeEnded = useAppSelector((state: any) => new Date(state.stats.end).toUTCString())
  const timeInSecs = useAppSelector((state: any) => durationToSecs(state.stats.duration))

  return (
    <>
      <Card shadow="sm" radius="md" withBorder>
      <Card.Section>
        <CardTopBar cardName='Run Info'/>
      </Card.Section>
      <Grid columns={2}
        justify="center"
        align="stretch"
        style={{
          minHeight: '350px',
          marginTop: '10px',
        }}
      >
        <Grid.Col span={1}>
          Project
        </Grid.Col>
        <Grid.Col span={1}>
          Test E2E Chrome
        </Grid.Col>
        <Grid.Col span={1}>
          Release
        </Grid.Col>
        <Grid.Col span={1}>
          11.14.4
        </Grid.Col>
        <Grid.Col span={1}>
          MetaMask Environment
        </Grid.Col>
        <Grid.Col span={1}>
          'testing'
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
          {timeInSecs}
        </Grid.Col>
      </Grid>
      </Card>

    </>
  )
}