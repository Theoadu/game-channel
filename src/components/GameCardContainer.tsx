import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius={10} overflow='hidden' width='100%'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
