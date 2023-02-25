import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import LinkBox from "../../components/LinkBox";
import PvpMetaLogo from "../../pvp-meta-logo.png";

const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" textAlign="center" justifyContent="center" alignItems="center">
        <Header title="PVP META" subtitle="Dominate the Game, Master the Meta!" justifyContent="center" alignItems="center" />
      </Box>

      {/* FEATURE ROTATOR */}
      <Box display="flex" textAlign="center" justifyContent="center" alignItems="center" marginBottom="100px">
        <img src={PvpMetaLogo} alt="pvp-meta-logo" height={400} width={800} />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LinkBox
            title="WoW"
            to="/wow"
            image="https://wow.zamimg.com/images/header/data-tree-switcher/wow-icon-2x.webp"
          />

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LinkBox
            title="Apex"
            to="/apex"
            image="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-white-icon.svg"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LinkBox
            title="CoD"
            to="/cod"
            image="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/cod-logo-white.svg"
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[700]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <LinkBox
            title="LoL"
            to="/lol"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/512px-LoL_icon.svg.png?20201029024159"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
