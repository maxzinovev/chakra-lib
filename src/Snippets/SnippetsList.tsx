import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spinner } from '../Spinner';
import { Box, Flex } from '@chakra-ui/react';

export const SnippetsList = (
  {
    totalPages,
    activePage,
    data,
    children,
    onNext,
    scrollableTarget = 'scrollableDiv',
    textIsEmpty = 'Нет данных',
    keyField = 'id'
  }
) => {
  const setNextPage = () => {
    onNext && onNext();
  };

  return (
    data && !!data.length ? (

        <InfiniteScroll
          scrollableTarget={scrollableTarget}
          hasMore={activePage < totalPages}
          dataLength={data.length}
          next={setNextPage}
          style={{ overflow: 'visible' }}
          pullDownToRefreshThreshold={300}
          loader={<Spinner/>}
        >
          {data.map((item, index) => (
            <Box
              key={item[keyField]}
              tabIndex="none"
              _focus={{
                outline: 'none'
              }}
            >
              {children(item, index)}
            </Box>
          ))}
        </InfiniteScroll>
    ) : (
      <Flex
        width="100%"
        height="200px"
        alignItems="center"
        justifyContent="center"
        color="gray.400"
      >
        {textIsEmpty}
      </Flex>
    )
  );
};
