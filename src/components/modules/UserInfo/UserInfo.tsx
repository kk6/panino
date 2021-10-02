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

import { TUserInfo } from "./types"

type Props = {
  userInfo: TUserInfo
}

export const UserInfo: React.FC<Props> = ({ userInfo }) => {
  return (
    <>
      <Center>
        <Stack direction="row">
          <Flex justify="center" p={4}>
            <Avatar size="xl" src={userInfo.avatarUrl} />
          </Flex>
          <Flex p={2} alignItems="center">
            <Stack w="full">
              <Heading fontSize="xl" fontWeight={600} w="8rem">
                {userInfo.name}
              </Heading>
              <Text color="gray.500">@{userInfo.username}</Text>
            </Stack>
            <Divider />
            <Stat mx={2}>
              <StatLabel>Records</StatLabel>
              <StatNumber>{userInfo.recordsCount}</StatNumber>
            </Stat>
          </Flex>
        </Stack>
      </Center>
      <Center mt={4}>
        <WorkTabs
          watchingCount={userInfo.watchingCount}
          wannaWatchCount={userInfo.wannaWatchCount}
          watchedCount={userInfo.watchedCount}
          onHoldCount={userInfo.onHoldCount}
          stopWatchingCount={userInfo.stopWatchingCount}
        />
      </Center>
    </>
  )
}
