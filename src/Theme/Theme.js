import React from 'react';
import { extendTheme, ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
})

export const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            "html, body": {
            },
        },
    },
});

export const Theme = ({ children }) => {
    return (
        <>
            <ColorModeScript />
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </>
    )
}
