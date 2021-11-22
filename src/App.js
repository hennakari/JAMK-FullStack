import React, {useState} from "react";

// To define the different routes of our application
import { Route } from "react-router-dom";

import Navbar from "./components/newnavbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
import EditTool from "./components/edittool";
import Addtool from "./components/addtool";
import ToolList from "./components/toolList";
import ChakraGridPage from "./components/chakra";
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
        <ChakraGridPage />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/tapahtumat">
        <RecordList />
      </Route>
      <Route path="/tools">
        <ToolList />
      </Route>
      <Route path="/edittool/:id" component={EditTool} />
      <Route path="/addtool">
        <Addtool />
      </Route>
    </div>
    <Footer />
    </ChakraProvider>
  );
};

export default App;