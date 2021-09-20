import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import Link from "next/link"

interface Props {
  annictId: number | undefined
  title: string | undefined
  episodesCount: number | undefined
  imageUrl: string | undefined
}
export const WorkCard: React.FC<Props> = ({
  annictId,
  title,
  episodesCount,
  imageUrl,
}) => {
  const href = `works/${annictId}/episodes`
  return (
    <Flex p={2} alignItems="center" justifyContent="center" w="full">
      <Link href={href}>
        <Box mx="auto" rounded="lg" shadow="md" maxW="2xl" bg="white">
          <Image
            src={imageUrl ? imageUrl : "no-image.png"}
            roundedTop="lg"
            w="full"
            h={48}
            fit="cover"
          />
          <Box p={4} bg="white" roundedBottom="lg">
            <Heading fontSize="sm">{title}</Heading>
          </Box>
        </Box>
      </Link>
    </Flex>
  )
}
