import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <div className="">
        <Header />
        <Body>
          <Sidebar />
          <Content />
        </Body>
        <Footer />
      </div>
    </div>
  );
}

export default App;
