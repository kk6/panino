import {
  Avatar,
  Center,
  Divider,
  Flex,
  Heading,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Text,
} from "@chakra-ui/react"

import { WorkTabs } from "@/components/modules/WorkTabs"

interface Props {
  name: string | undefined
  username: string | undefined
  avatarUrl: string | undefined
  watchingCount: number | undefined
  wannaWatchCount: number | undefined
  watchedCount: number | undefined
  onHoldCount: number | undefined
  stopWatchingCount: number | undefined
  recordsCount: number | undefined
}

export const UserInfo: React.FC<Props> = ({
  name,
  username,
  avatarUrl,
  watchingCount,
  wannaWatchCount,
  watchedCount,
  onHoldCount,
  stopWatchingCount,
  recordsCount,
}) => {
  return (
    <>
      <Center>
        <Stack direction="row">
          <Flex justify="center" p={4}>
            <Avatar size="xl" src={avatarUrl} />
          </Flex>
          <Flex p={2} alignItems="center">
            <Stack w="full">
              <Heading fontSize="xl" fontWeight={600} w="8rem">
                {name}
              </Heading>
              <Text color="gray.500">@{username}</Text>
            </Stack>
            <Divider />
            <Stat mx={2}>
              <StatLabel>Records</StatLabel>
              <StatNumber>{recordsCount}</StatNumber>
            </Stat>
          </Flex>
        </Stack>
      </Center>
      <Center mt={4}>
        <WorkTabs
          watchingCount={watchingCount}
          wannaWatchCount={wannaWatchCount}
          watchedCount={watchedCount}
          onHoldCount={onHoldCount}
          stopWatchingCount={stopWatchingCount}
        />
      </Center>
    </>
  )
}
