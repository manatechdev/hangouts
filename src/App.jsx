import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import SideNav from "./components/SideNav";
import UnderDevelopment from "./components/UnderDevelopment";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container px-2 mx-auto">
          <Header />
          <Body>
            <Sidebar>
              <SideNav />
            </Sidebar>
            <Content>
              <Routes>
                <Route index element={<div>Upcoming</div>} />
                <Route
                  path="/community"
                  element={
                    <UnderDevelopment message="The Community page is still being developed. Check again soon!" />
                  }
                />
                <Route
                  path="/settings"
                  element={
                    <UnderDevelopment message="The Settings page is still being developed. Check again soon!" />
                  }
                />
              </Routes>
            </Content>
          </Body>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
