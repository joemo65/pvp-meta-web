import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Header = ({ title, subtitle, image }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
      <img src={image} width={25} height={25} /> {title}
      </Typography>
      <Typography variant="h5" color={colors.orangeAccent[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
