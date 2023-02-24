import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Deathknight from "./scenes/wow/deathknight";
import Demonhunter from "./scenes/wow/demonhunter";
import Druid from "./scenes/wow/druid";
import Evoker from "./scenes/wow/evoker";
import Hunter from "./scenes/wow/hunter";
import Mage from "./scenes/wow/mage";
import Monk from "./scenes/wow/monk";
import Paladin from "./scenes/wow/paladin";
import Priest from "./scenes/wow/priest";
import Rogue from "./scenes/wow/rogue";
import Shaman from "./scenes/wow/shaman";
import Warlock from "./scenes/wow/warlock";
import Warrior from "./scenes/wow/warrior";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/wow/deathknight" element={<Deathknight />} />
              <Route path="/wow/demonhunter" element={<Demonhunter />} />
              <Route path="/wow/druid" element={<Druid />} />
              <Route path="/wow/evoker" element={<Evoker />} />
              <Route path="/wow/hunter" element={<Hunter />} />
              <Route path="/wow/mage" element={<Mage />} />
              <Route path="/wow/monk" element={<Monk />} />
              <Route path="/wow/paladin" element={<Paladin />} />
              <Route path="/wow/priest" element={<Priest />} />
              <Route path="/wow/rogue" element={<Rogue />} />
              <Route path="/wow/shaman" element={<Shaman />} />
              <Route path="/wow/warlock" element={<Warlock />} />
              <Route path="/wow/warrior" element={<Warrior />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;