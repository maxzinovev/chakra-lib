import React from 'react';
import {
  AlertDialog as ChakraDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

export const AlertDialog = ({ title, isOpen, onClose, footer, children, ...props }) => {
  return (
    <ChakraDialog
      isOpen={isOpen}
      onClose={onClose}
      {...props}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>
            {children}
          </AlertDialogBody>

          <AlertDialogFooter mb="8px">
            {footer}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </ChakraDialog>
  );
};
