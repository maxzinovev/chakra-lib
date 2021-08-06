import React from 'react';
import {
    Input as ChakraInput,
    FormControl,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Box
} from '@chakra-ui/react';
import { FormLabel } from '../FormLabel';

export const Input = React.forwardRef((
    {
        name,
        isInvalid = null,
        leftAddon = null,
        rightAddon = null,
        label = null,
        mask = null,
        placeholder = null,
        value,
        size = 'md',
        textAlign = 'left',
        ...props
    }, ref) => {
    return (
        <FormControl isInvalid={isInvalid}>
            {label && (
              <FormLabel name={name}>
                {label}
              </FormLabel>
            )}
            <InputGroup size={size}>
                {leftAddon && (
                    <InputLeftAddon children={leftAddon} />
                )}
                <ChakraInput
                    ref={ref}
                    id={name}
                    placeholder={placeholder}
                    size={size}
                    textAlign={textAlign}
                    value={value || ''}
                    {...props}
                />
                {rightAddon && (
                    <InputRightAddon children={rightAddon} />
                )}
            </InputGroup>
            {props.description && (
                <Box fontSize="0.7rem" color="gray.400" mt={2}>
                    {props.description}
                </Box>
            )}
        </FormControl>
    );
});
