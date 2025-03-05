import React from "react";
import './LandingPage.css'
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('funciona');
        navigate("/home");
    }
    return(
        <Box 
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh" 
        bgcolor="grey.900"
      >
        <Paper 
          elevation={6} 
          sx={{
            p: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={handleClick}
        >
          <img 
            src="https://github.com/taiue.png" 
            alt="Landing" 
            style={{ width: "250px", height: "250px", borderRadius: "8px" }}
          />
        </Paper>
      </Box>
    )
}

export default LandingPage;