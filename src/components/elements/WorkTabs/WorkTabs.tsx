import {
  Badge,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"

import { Link } from "@/components/elements/Link"
import { WorkListContainer } from "@/components/modules/WorkList"

import { TabData } from "./types"
import { getStatusState } from "./utils"

type Props = {
  data: TabData[]
  tabIndex: number
}
export const WorkTabs: React.FC<Props> = ({ data, tabIndex }) => {
  return (
    <Center mt={4}>
      <Tabs
        variant="soft-rounded"
        colorScheme="blue"
        defaultIndex={tabIndex}
        isLazy
      >
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
          {data.map((d) => (
            <Link href={d.href} key={d.href}>
              <Tab fontSize="xs">
                {d.text}
                <Badge rounded="lg" ml={1}>
                  {d.count}
                </Badge>
              </Tab>
            </Link>
          ))}
        </TabList>
        <TabPanels>
          {data.map((d) => (
            <TabPanel key={d.href}>
              <WorkListContainer
                state={getStatusState(d.href)}
                workCount={Number(d.count)}
              />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Center>
  )
}
