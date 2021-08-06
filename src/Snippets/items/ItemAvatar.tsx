import React from 'react';
import { Flex, Avatar } from '@chakra-ui/react';

export const ItemAvatar = ({ src, name = 'Russia', props }) => {
    return (
        <Flex align="center" justify="center" {...props}>
            <Avatar
                width={36}
                height={36}
                name={name}
                src={src}
            />
        </Flex>
    );
};
