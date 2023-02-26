import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../../theme";
import ImageHeader from "../../../components/ImageHeader";
import CharacterList from '../../../components/CharacterList';

const Warrior = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <ImageHeader title="Warrior" image="https://render.worldofwarcraft.com/us/icons/56/classicon_warrior.jpg" />
      <Box>
        <Typography
          variant="h2"
          fontWeight="600"
          color={colors.grey[100]}
        >
          Arms
        </Typography>
      </Box>
      <Box>
      <CharacterList uri="data/wow/pvp-season/34/pvp-leaderboard/shuffle-warrior-arms?namespace=dynamic-us&locale=en_US&access_token=USoOuiK5ESgPAmF4HdnvxjfdmAg5aepBxP" />
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.orangeAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.orangeAccent[200]} !important`,
          },
        }}
      >

      </Box>
    </Box>
  );
};

export default Warrior;
