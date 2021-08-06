import React from 'react';
import { Alert as ChakraAlert, AlertDescription, AlertIcon, CloseButton } from '@chakra-ui/react';

interface AlertProps {
    children: React.ReactNode;
    isDisableClose?: boolean;
    onCloseClick: any
}

export const Alert = ({ children, isDisableClose, onCloseClick, ...props }: AlertProps) => {
  return (
    <ChakraAlert status="error" borderRadius={6} {...props}>
      <AlertIcon />
      <AlertDescription
        fontSize="0.88rem"
        lineHeight="1.3"
        mr="20px"
      >
        {children}
      </AlertDescription>
      {!isDisableClose && (
        <CloseButton onClick={onCloseClick} position="absolute" right="8px" top="8px" />
      )}
    </ChakraAlert>
  );
};
