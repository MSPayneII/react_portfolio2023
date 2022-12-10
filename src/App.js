import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import {
  Home,
  Contact,
  Resume,
  DevProjects,
  UxProjects,
  PageNotFound,
} from "./pages/index";
import { HeaderNav, MobileNav, Footer } from "./components/index";

import {
  ConnectFour,
  TodoApp,
  EightBallFortune,
  Audiophile,
  DigitalOfficeSpace,
  AvStatusSystem,
  BannedBooks,
  AudienceExpansion,
  WebsiteComparison,
} from "./projects/index";

function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <div className="page-container">
          <HeaderNav />
          <MobileNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/dev-projects" element={<DevProjects />} />
            <Route
              path="/dev-projects/connect-four"
              element={<ConnectFour />}
            />
            <Route path="/dev-projects/todo-app" element={<TodoApp />} />
            <Route
              path="/dev-projects/eightball-fortune"
              element={<EightBallFortune />}
            />
            <Route path="/dev-projects/audiophile" element={<Audiophile />} />

            <Route
              path="/dev-projects/digital-office-space"
              element={<DigitalOfficeSpace />}
            />

            <Route path="/ux-projects" element={<UxProjects />} />
            <Route
              path="/ux-projects/av-status-system"
              element={<AvStatusSystem />}
            />
            <Route path="/ux-projects/banned-books" element={<BannedBooks />} />
            <Route
              path="/ux-projects/audience-expansion"
              element={<AudienceExpansion />}
            />
            <Route
              path="/ux-projects/website-comparison"
              element={<WebsiteComparison />}
            />

            <Route path="/contact-me" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </HelmetProvider>
  );
}

export default App;
