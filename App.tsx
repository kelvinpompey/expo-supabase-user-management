import React from "react";
import { NativeBaseProvider } from "native-base";
import Navigation from "./components/Navigation";
import AuthProvider from "./features/auth/AuthContext";
import { theme } from "./theme";
import "react-native-url-polyfill/auto";

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
};
export default App;
