import {
  Badge,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

import { WorkListContainer } from "@/components/modules/WorkList"
import { StatusState } from "@/generated/graphql"

const TAB_PATHS = [
  "watching",
  "watched",
  "wanna-watch",
  "on-hold",
  "stop-watching",
]

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
  const router = useRouter()
  const displayCount = 10
  const tabIndex = TAB_PATHS.indexOf(String(router.query.path))
  return (
    <Tabs variant="soft-rounded" colorScheme="blue" defaultIndex={tabIndex}>
      <TabList
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        position="sticky"
        top={0}
        bg="white"
        shadow="md"
        px={2}
        roundedBottom="xl"
        pb={2}
      >
        <Link href="watching">
          <Tab fontSize="xs">
            見てる
            <Badge rounded="lg" ml={1}>
              {watchingCount}
            </Badge>
          </Tab>
        </Link>
        <Link href="watched">
          <Tab fontSize="xs">
            見た
            <Badge rounded="lg" ml={1}>
              {watchedCount}
            </Badge>
          </Tab>
        </Link>
        <Link href="wanna-watch">
          <Tab fontSize="xs">
            見たい
            <Badge rounded="lg" ml={1}>
              {wannaWatchCount}
            </Badge>
          </Tab>
        </Link>
        <Link href="on-hold">
          <Tab fontSize="xs">
            中断
            <Badge rounded="lg" ml={1}>
              {onHoldCount}
            </Badge>
          </Tab>
        </Link>
        <Link href="stop-watching">
          <Tab fontSize="xs">
            中止
            <Badge rounded="lg" ml={1}>
              {stopWatchingCount}
            </Badge>
          </Tab>
        </Link>
      </TabList>
      <TabPanels>
        <TabPanel>
          <WorkListContainer
            count={displayCount}
            state={StatusState.Watching}
            workCount={Number(watchingCount)}
          />
        </TabPanel>
        <TabPanel>
          <WorkListContainer
            count={displayCount}
            state={StatusState.Watched}
            workCount={Number(watchedCount)}
          />
        </TabPanel>
        <TabPanel>
          <WorkListContainer
            count={displayCount}
            state={StatusState.WannaWatch}
            workCount={Number(wannaWatchCount)}
          />
        </TabPanel>
        <TabPanel>
          <WorkListContainer
            count={displayCount}
            state={StatusState.OnHold}
            workCount={Number(onHoldCount)}
          />
        </TabPanel>
        <TabPanel>
          <WorkListContainer
            count={displayCount}
            state={StatusState.StopWatching}
            workCount={Number(stopWatchingCount)}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
