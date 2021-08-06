import React from 'react';
import { HStack, Text, useColorModeValue } from '@chakra-ui/react';

export const PersonFullName = ({ firstName, lastName, middleName }) => {
  const themeColorEmpty = useColorModeValue('gray.300', 'gray.600');
  return (
    <HStack spacing={1}>
      {lastName === null || lastName === '' ? (
        <Text color={themeColorEmpty}><s>Фамилия</s></Text>
      ) : (
        <Text>{lastName}</Text>
      )}
      {firstName === null || firstName === '' ? (
        <Text color={themeColorEmpty}><s>Имя</s></Text>
      ) : (
        <Text>{firstName}</Text>
      )}
      {middleName === null || middleName === '' ? (
        <Text color={themeColorEmpty}><s>Отчество</s></Text>
      ) : (
        <Text>{middleName}</Text>
      )}
    </HStack>
  );
};
