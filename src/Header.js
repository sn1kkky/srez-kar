import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "darkred" }}>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Коврики
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
          <SearchIcon sx={{ position: "absolute", left: 10, color: "gray" }} />
          <InputBase
            placeholder="Поиск..."
            sx={{
              backgroundColor: "white",
              borderRadius: 2,
              padding: "5px 10px",
              width: 300,
              paddingLeft: 2,
            }}
            onChange={handleSearchChange}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;