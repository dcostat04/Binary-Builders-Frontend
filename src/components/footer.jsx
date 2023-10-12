

import {
    Box,
    Container,
    Image,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
    Heading,
} from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr 1fr' }}
                    spacing={8}>
                    <Stack spacing={6}>
                        <Box>
                            <Image src='/img/logo.png' />
                        </Box>
                        <Text fontSize={'sm'}>© 2023 Listening Ear. All rights reserved</Text>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <Heading>Support</Heading>
                        <Box as="a" href={'#'}>
                            Help Center
                        </Box>
                        <Box as="a" href={'#'}>
                            Terms of Service
                        </Box>
                        <Box as="a" href={'#'}>
                            Legal
                        </Box>
                        <Box as="a" href={'#'}>
                            Privacy Policy
                        </Box>
                        <Box as="a" href={'#'}>
                            Status
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <Heading>Follow Us</Heading>
                        <Box as="a" href={'#'}>
                            Facebook
                        </Box>
                        <Box as="a" href={'#'}>
                            Twitter
                        </Box>
                        <Box as="a" href={'#'}>
                            Instagram
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}