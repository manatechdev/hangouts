import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div className="App">
      <div className="px-2">
        <Header />
        <Body>
          <Sidebar>
            <SideNav />
          </Sidebar>
          <Content />
        </Body>
        <Footer />
      </div>
    </div>
  );
}

export default App;
