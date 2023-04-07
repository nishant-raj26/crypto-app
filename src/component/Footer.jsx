import { Avatar, Box, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import founderImg from '../assets/founder.jpg'

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      color={'whiteAlpha.700'}
      minH={'48'}
      px={'16'}
      py={['16', '8']}
    >
      <Stack direction={['column', 'row']} h={'full'} alignItems={'center'}>
        <VStack w={'full'} alignItems={['center', 'flex-start']}>
          <Text fontWeight={'bold'}>
            <Text
              fontSize={'sm'}
              letterSpacing={'widest'}
              textAlign={['center', 'left']}
            >
              We are the best crypto service provider....
            </Text>
            About Us
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={'28'} mt={['4', '0']} src = {founderImg} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
