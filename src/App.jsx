import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SidebarNav from "./components/SidebarNav";

function App() {
  return (
    <div className="App">
      <div className="px-2 bg-hyellow-50">
        <Header />
        <Body>
          <Sidebar>
            <SidebarNav />
          </Sidebar>
          <Content />
        </Body>
        <Footer />
      </div>
    </div>
  );
}

export default App;
