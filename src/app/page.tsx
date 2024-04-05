import HomePage from "@/components/pages/homePage";
import { createTheme, MantineProvider } from '@mantine/core';
const theme = createTheme({
  /** Put your mantine theme override here */
});
export default function Home() {
  return (
    <MantineProvider theme={theme}>
      <HomePage />
    </MantineProvider>
  );
}
