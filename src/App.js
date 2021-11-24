import React from "react";
import { Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import EditTool from "./components/editTool";
import CreateTool from "./components/createTool";
import ToolList from "./components/toolList";
import Dashboard from "./components/dashboard";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Login from "./components/login";
import useToken from "./components/useToken";
import Footer from "./components/footer";

const App = () => {
  const { token, setToken } = useToken();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
  <ChakraProvider theme={theme}>
    <div>
      <Navbar />
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/recordList">
        <RecordList />
      </Route>
      <Route path="/toolList">
        <ToolList />
      </Route>
      <Route path="/editTool/:id" component={EditTool} />
      <Route path="/createTool">
        <CreateTool />
      </Route>
    </div>
    <Footer />
    </ChakraProvider>
  );
};
export default App;