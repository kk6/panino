import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

interface Props {
  watchingCount: number | undefined
  wannaWatchCount: number | undefined
  watchedCount: number | undefined
  onHoldCount: number | undefined
  stopWatchingCount: number | undefined
}
export const WorkTabs: React.FC<Props> = ({
  watchingCount,
  wannaWatchCount,
  watchedCount,
  onHoldCount,
  stopWatchingCount,
}) => {
  return (
    <Tabs variant="soft-rounded" colorScheme="blue">
      <TabList display="flex" flexWrap="wrap" justifyContent="center">
        <Tab fontSize="sm">
          見てる
          <Badge rounded="lg" ml={1}>
            {watchingCount}
          </Badge>
        </Tab>
        <Tab fontSize="sm">
          見た
          <Badge rounded="lg" ml={1}>
            {watchedCount}
          </Badge>
        </Tab>
        <Tab fontSize="sm">
          見たい
          <Badge rounded="lg" ml={1}>
            {wannaWatchCount}
          </Badge>
        </Tab>
        <Tab fontSize="sm">
          中断
          <Badge rounded="lg" ml={1}>
            {onHoldCount}
          </Badge>
        </Tab>
        <Tab fontSize="sm">
          中止
          <Badge rounded="lg" ml={1}>
            {stopWatchingCount}
          </Badge>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>見てる</p>
        </TabPanel>
        <TabPanel>
          <p>見た</p>
        </TabPanel>
        <TabPanel>
          <p>見たい</p>
        </TabPanel>
        <TabPanel>
          <p>一時中断</p>
        </TabPanel>
        <TabPanel>
          <p>視聴中止</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
