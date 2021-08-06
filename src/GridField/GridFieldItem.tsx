import React from 'react';
import { Box, Grid, Skeleton, Text, useColorModeValue } from '@chakra-ui/react';

export const GridFieldItem = ({ label, children, isLoading = true, isReady = false }) => {
  const themeBorderColor = useColorModeValue('gray.100', 'var(--chakra-colors-whiteAlpha-200)');
  const themeBg =  useColorModeValue('gray.50', 'transparent');
  const themeColorFontEmpty = useColorModeValue('gray.400', 'gray.600');
  return (
    <Grid
      templateColumns={label ? '1fr 1fr' : '1fr'}
      gap="16px"
      minHeight="52px"
      alignItems="center"
      borderBottomWidth="1px"
      borderColor={themeBorderColor}
      pl="16px"
      pr="16px"
      pt="8px"
      pb="8px"
      _even={{ bg: themeBg }}
    >
      {label && (
        <Box>{label}</Box>
      )}
      {isLoading || !isReady ? (
        <Skeleton
          borderRadius={8}
          height="12px"
          width="100px"
        />
      ):(
        <Box wordBreak="break-all">
          {children ? children : <Text color={themeColorFontEmpty}>Нет данных</Text>}
        </Box>
      )}
    </Grid>
  );
};
