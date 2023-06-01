import { Fragment } from "react";
import CarsList from "./components/CarsList";
import Header from "./components/Layout/Header";

function App() {
  return (
    <Fragment>
      <Header />
      <CarsList />
    </Fragment>
  );
}

export default App;
