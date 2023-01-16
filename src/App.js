import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Pages from "./components/Pages";

function App() {
  const [page, setPage] = useState("home");
  return (
    <div>
      <Header />
      <Pages page={page} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
