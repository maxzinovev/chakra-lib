import React from 'react';
import { Tab as ChakraTab, useColorModeValue } from '@chakra-ui/react';

export const Tab = React.forwardRef((
  {
    children,
    isDisabled,
    ...props
  }, ref) => {
  const themeColorFont = useColorModeValue('black', 'white');
  const themeColorFontDisabled = useColorModeValue('gray.400', 'gray.600');
  return (
    <ChakraTab
      ref={ref}
      color={isDisabled ? themeColorFontDisabled : themeColorFont}
      isDisabled={isDisabled}
      _focus={{
        boxShadow: 'none'
      }}
      {...props}
    >
      {children}
    </ChakraTab>
  );
});
