import { Badge, Box, Flex, Heading, Image } from "@chakra-ui/react"

import { Link } from "@/components/elements/Link"

type Props = {
  annictId: number | undefined
  title: string | undefined
  episodesCount: number | undefined
  imageUrl: string | undefined
  media: string | undefined
}
export const WorkCard: React.FC<Props> = ({
  annictId,
  title,
  episodesCount,
  imageUrl,
  media,
}) => {
  const href = `/works/${annictId}/episodes`
  return (
    <Flex p={2} alignItems="center" justifyContent="center" w="full">
      <Link href={href}>
        <Box mx="auto" rounded="lg" shadow="md" maxW="2xl" bg="white">
          <Image
            src={imageUrl ? imageUrl : "/no-image.png"}
            roundedTop="lg"
            w="full"
            h={48}
            fit="cover"
          />
          <Flex p={4} bg="white" roundedBottom="lg">
            <Badge>{media}</Badge>
            <Heading ml={2} fontSize="sm">
              {title}
            </Heading>
          </Flex>
        </Box>
      </Link>
    </Flex>
  )
}
