import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { Link } from "react-router-dom";

const LinkBox = ({ title, subtitle, to, image }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px" sx={{ cursor:"pointer" }} onClick={() => window.location.href = to}>
      <Box justifyContent="space-between" textAlign="center" alignItems="center" >
        <Box marginBottom={1}>
            <img src={image} alt="" width={50} height={50} />
        </Box>
        <Box >
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" mt="2px">
        <Typography variant="h5" sx={{ color: colors.blueAccent[500] }}>
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle="italic"
          sx={{ color: colors.blueAccent[400] }}
        >
        </Typography>
      </Box>
    </Box>
  );
};

export default LinkBox;
