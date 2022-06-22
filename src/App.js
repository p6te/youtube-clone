import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Tags from "./components/Tags";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="page">
        <Sidebar />
        <div>
          <Tags />
          <Main />
        </div>
      </div>
    </div>
  );
}

export default App;
