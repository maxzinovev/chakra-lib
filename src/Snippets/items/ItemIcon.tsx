import React from 'react';
import { Box, Flex, Icon, useColorModeValue } from '@chakra-ui/react';

export const ItemIcon = ({icon, ...props}) => {
  const themeBgContainer = useColorModeValue('gray.100', 'gray.700');
  const themeBgContainerHover = useColorModeValue('gray.200', 'gray.600');
  return (
    <Flex
      align="center"
      justify="center"
      //position="sticky"
      //left="26px"
      zIndex={2}
      transition="0.3s"
      _groupHover={{
        //backgroundColor: themeBgHover
      }}
      {...props}
    >
      <Box
        width="36px"
        height="36px"
        backgroundColor={themeBgContainer}
        borderRadius="50%"
        transition="0.3s"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _groupHover={{
          backgroundColor: themeBgContainerHover
        }}
      >
        <Icon as={icon} color="gray.400"/>
      </Box>
    </Flex>
  );
};
