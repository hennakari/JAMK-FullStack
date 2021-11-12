import React, {useState} from "react";

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/newnavbar";
import Edit from "./components/edit";
import Create from "./components/create";
import RecordList from "./components/recordList";
// import RecordItem from "./components/recordItem";
import EditTool from "./components/edittool";
import Addtool from "./components/addtool";
import ToolList from "./components/toolList";
// import Details from "./components/lomake";
// import Auth0ProviderWithHistory from "./auth0Provider";
// import Home from "./components/home";
// import Dashboard from "./components/dashboard";
// import MyFirstGrid from "./components/grid";
// import Demo from "./components/demo";
// import ShowcaseLayout from "./components/showcase";
import ChakraGridPage from "./components/chakra";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import Login from "./components/login";
import useToken from "./components/useToken";




const App = () => {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    // <Auth0ProviderWithHistory>
  <ChakraProvider theme={theme}>
    <div>
      <Navbar />
      <Route exact path="/">
        {/* <Home /> */}
        {/* <Demo /> */}
        {/* <Dashboard /> */}
        <ChakraGridPage />
        {/* <h1 className='home'>Etusivu</h1>
        <h2>Tähän etusivulle tulee tilastotietoja</h2> */}
      </Route>
      {/* <Route path="/demo">
        <Demo />
      </Route>
      <Route path="/showcase">
        <ShowcaseLayout />
      </Route> */}
      {/* <Route path="/chakra">
        <ChakraGridPage />
      </Route> */}
      {/* <Route path="/grid">
        <MyFirstGrid />
      </Route> */}
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
        {/* <Details /> */}
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
    </ChakraProvider>
    // {/* </Auth0ProviderWithHistory> */}
  );
};

export default App;