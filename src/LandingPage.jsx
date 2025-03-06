import React from "react";
import './LandingPage.css'
import { Box, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import '@material-design-icons/font';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('funciona');

        navigate("/home");
    }
    return(
        <Box 
        className="box"
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
        height="100vh" 
      >
        <Paper 
          elevation={6} 
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            bgcolor: "transparent",
            transition: "transform 0.3s ease",
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={handleClick}
        >
          <img 
            src="imagens/nave.png" 
            alt="Landing"
          />
        </Paper>
        <span className="texto"></span>

      </Box>

    )
}

export default LandingPage;