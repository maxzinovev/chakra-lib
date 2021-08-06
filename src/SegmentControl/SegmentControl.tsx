import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Box, Flex, Grid, useColorModeValue } from '@chakra-ui/react';

const Item = ({ children, value, onChange }) => {
  const handleClick = () => {
    onChange && onChange(value);
  };

  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        whiteSpace="nowrap"
        textAlign="center"
        cursor="pointer"
        fontSize="0.86rem"
        fontWeight="semibold"
        _focus={{
          boxShadow: "outline",
        }}
        height="100%"
        width="100%"
        onClick={handleClick}
      >
        {children}
      </Flex>
    </Box>
  );
};

export const SegmentControl = ({ options = [], value = '', onChange, ...props }) => {
  const container = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const itemCounts = options.length;
  const itemWidth = containerWidth / itemCounts;
  const activeIndex = value && options.findIndex(item => item.value === value);
  const colorBgContainer = useColorModeValue('gray.100', 'var(--chakra-colors-whiteAlpha-200)');
  const colorBgItem = useColorModeValue('white', 'var(--chakra-colors-whiteAlpha-400)');

  useLayoutEffect(() => {
    const setWidth = () => {
      setContainerWidth(container.current?.offsetWidth);
    }
    window.addEventListener('resize', setWidth );
    return () => {
      window.removeEventListener('resize', setWidth );
    };
  }, [containerWidth]);

  useEffect(() => {
    setContainerWidth(container.current?.offsetWidth);
  }, []);

  return (
    <Grid
      backgroundColor={colorBgContainer}
      borderRadius="6px"
      position="relative"
      height="32px"
      ref={container}
      padding="2px"
      overflow="hidden"
      {...props}
    >
      <Grid
        templateColumns={`repeat(${itemCounts}, 1fr)`}
        position="relative"
        zIndex={2}
      >
        {options.map((item) => (
          <Item key={item.value} value={item.value} onChange={onChange}>
            {item.label}
          </Item>
        ))}
      </Grid>
      {value !== '' && (
        <Box
          position="absolute"
          zIndex={1}
          width={`${itemWidth}px`}
          height="100%"
          padding="2px"
          transition="transform 0.2s"
          transform={`translate3d(${itemWidth*activeIndex}px, 0, 0)`}
        >
          <Box
            height="100%"
            width="100%"
            borderRadius="5px"
            backgroundColor={colorBgItem}
            boxShadow="lg"
          />
        </Box>
      )}
    </Grid>
  )
}
