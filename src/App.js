import "./App.css";
import Sidebar from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./sb-admin-2.min.css";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Chart from "./Bar";
import Footer from "./components/Footer";
import LogoutModel from "./components/LogoutModel";
function App() {
  return (
    <div className="App">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <div class="container-fluid">
              <Dashboard />
              <div class="row">
                <Chart />
                <Footer />
                <div className="row">
                  <LogoutModel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
