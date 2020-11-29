import * as React from 'react'
import { Box, Center, chakra, Text } from '@chakra-ui/react'

import BackgroundVideo from 'woke-content/images/bg.mp4'

const VideoEl = chakra('video')

export default function OfflinePlacholder() {
  return (
    <Box position="relative">
      <Center position="absolute" w="full" h="full" zIndex={100}>
        <Text
          fontFamily="Oswald"
          fontSize="3xl"
          color="flame.600"
          textShadow="0 0 5px black"
        >
          WOKE.NET is currently offline.
        </Text>
      </Center>
      <VideoEl src={BackgroundVideo} opacity=".075" autoPlay muted loop />
    </Box>
  )
}