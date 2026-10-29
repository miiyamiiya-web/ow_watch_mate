import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import GuideView from "./pages/GuideView.tsx";
import { GuideProvider } from "./context/GuideContext.tsx";

function App() {
  return (
    <BrowserRouter>
      <GuideProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<GuideView />} />
        </Routes>
      </GuideProvider>
    </BrowserRouter>
  );
}

export default App;
