import { StatusBar } from "expo-status-bar";
import TabNavigation from "./src/navigation/TabNavigation";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#1B1A1E" style="light" />
      <TabNavigation />
    </>
  );
};

export default App;
