import { config } from '@gluestack-ui/config';
import { Box, GluestackUIProvider, Text } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <Box>
        <Text>Helloooo</Text>
      </Box>
    </GluestackUIProvider>
  );
}



