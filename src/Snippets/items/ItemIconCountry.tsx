import React from 'react';
import { Box, Flex, Icon, Image, useColorModeValue } from '@chakra-ui/react';
import FlagAm from '../../../images/flag-am.svg';
import FlagRu from '../../../images/flag-ru.svg';

const TYPE_FLAG = {
  'RUSSIA': FlagRu,
  'ARMENIA': FlagAm
}

export const ItemIconCountry = ({ lang, children, ...props }) => {
  return (
        <Flex
          align="center"
          {...props}
        >
            <Image
                boxSize="20px"
                src={TYPE_FLAG[lang]}
                mr="10px"
            />
            <Box>{children}</Box>
        </Flex>
    );
};
