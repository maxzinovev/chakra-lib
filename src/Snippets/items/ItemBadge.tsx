import React from 'react';
import { Badge } from '@chakra-ui/react';

export const ItemBadge = ({ children, ...props}) => {
    return (
        <Badge
            padding="1px 10px"
            borderRadius={100}
            fontSize="0.68rem"
            {...props}
        >
            {children}
        </Badge>
    );
};
