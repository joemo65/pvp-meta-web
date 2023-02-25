import { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SportsMartialArtsOutlinedIcon from "@mui/icons-material/SportsMartialArtsOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PvpMetaLogo from "../../pvp-meta-logo.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[700]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <img src={PvpMetaLogo} alt="pvp-meta-logo" width={40} height={40} /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <img src={PvpMetaLogo} alt="pvp-meta-logo" width={40} height={40} />
                </IconButton>
                <h1>PVP META</h1>
              </Box>
            )}
          </MenuItem>

          { isCollapsed 
            && (
              <MenuItem>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <img src="https://wow.zamimg.com/images/header/data-tree-switcher/wow-icon-2x.webp" alt="" width={15} height={15} />
                </IconButton>
              </MenuItem>
            )
          }

          { isCollapsed 
              && (
                <MenuItem>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-white-icon.svg" alt="" width={15} height={15} />
                  </IconButton>
                </MenuItem>
              )
           }

          { isCollapsed 
              && (
                <MenuItem>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/cod-logo-white.svg" alt="" width={15} height={15} />
                  </IconButton>
                </MenuItem>
              )
           }

          { isCollapsed 
              && (
                <MenuItem>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/512px-LoL_icon.svg.png?20201029024159" alt="" width={15} height={15} />
                  </IconButton>
                </MenuItem>
              )
           }


          <MenuItem paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Home"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </MenuItem>

          <MenuItem>
              <SubMenu title="WoW"
                  icon={<img src="https://wow.zamimg.com/images/header/data-tree-switcher/wow-icon-2x.webp" alt="" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}>
                <Item
                  title="Dashboard"
                  to="/wow"
                  icon={<BarChartOutlinedIcon/> }
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
                <Item
                  title="Death Knight"
                  to="/wow/deathknight"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/spell_deathknight_classicon.jpg" alt="Death Knight" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
                <Item
                  title="Demon Hunter"
                  to="/wow/demonhunter"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_demonhunter.jpg" alt="Demon Hunter" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Druid"
                  to="/wow/druid"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_druid.jpg" alt="Druid" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Evoker"
                  to="/wow/evoker"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_evoker.jpg" alt="Evoker" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Hunter"
                  to="/wow/hunter"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_hunter.jpg" alt="Hunter" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Mage"
                  to="/wow/mage"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_mage.jpg" alt="Mage" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Monk"
                  to="/wow/monk"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_monk.jpg" alt="Monk" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Paladin"
                  to="/wow/paladin"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_paladin.jpg" alt="Paladin" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Priest"
                  to="/wow/priest"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_priest.jpg" alt="Priest" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Rogue"
                  to="/wow/rogue"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_rogue.jpg" alt="Rogue" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Shaman"
                  to="/wow/shaman"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_shaman.jpg" alt="Shaman" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Warlock"
                  to="/wow/warlock"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_warlock.jpg" alt="Warlock" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Warrior"
                  to="/wow/warrior"
                  icon={<img src="https://render.worldofwarcraft.com/us/icons/56/classicon_warrior.jpg" alt="Warrior" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
          </MenuItem>

          <MenuItem>
              <SubMenu title="Apex"
                  icon={<img src="https://media.contentapi.ea.com/content/dam/apex-legends/common/logos/apex-white-icon.svg" alt="" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}>
                <Item
                  title="Dashboard"
                  to="/LoL"
                  icon={<BarChartOutlinedIcon/> }
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
                <Item
                  title="Ranked"
                  to="/bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
          </MenuItem>

          <MenuItem>
              <SubMenu title="CoD"
                  icon={<img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/global/cod-logo-white.svg" alt="" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}>
                <Item
                  title="Dashboard"
                  to="/CoD"
                  icon={<BarChartOutlinedIcon/> }
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
              </SubMenu>
          </MenuItem>

          <MenuItem>
              <SubMenu title="LoL"
                  icon={<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/512px-LoL_icon.svg.png?20201029024159" alt="" width={25} height={25} />}
                  selected={selected}
                  setSelected={setSelected}>
                <Item
                  title="Dashboard"
                  to="/LoL"
                  icon={<BarChartOutlinedIcon/> }
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
                <Item
                  title="Solo / Duo Queue"
                  to="/form"
                  icon={<PersonOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Flex Queue"
                  to="/calendar"
                  icon={<SportsMartialArtsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
          </MenuItem>

          <MenuItem>
              <SubMenu title="Other"
                  icon={<MenuOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}>
                <Item
                  title="Dashboard"
                  to="/other"
                  icon={<BarChartOutlinedIcon/> }
                  selected={selected}
                  setSelected={setSelected}>
                </Item>
                <Item
                  title="Pie Chart"
                  to="/pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Geography Chart"
                  to="/geography"
                  icon={<MapOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
