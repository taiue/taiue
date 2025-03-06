import './televisao.css'
import { Box } from '@mui/material'

const Televisao = () => {
    return (
        <Box className="televisao" sx={{
            position: 'relative',
            width: 500, 
            height: 300, 
            backgroundImage: 'url("imagens/oldTv.png")', // imagem da TV
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}>
            <Box className="tela"
                sx={{
                position: 'absolute',
                top: 60, 
                left: 60, 
                height: 200,
                width: 300,
                fill: 'aquamarine',
                overflow: 'hidden',
                backgroundColor: 'transparent',
                color: 'red'
                }}>
                    <img src='https://github.com/taiue.png' style={{height: '100%',width: '100%', objectFit: 'cover'}}></img>
                    <span>AAAAAAA</span>
            </Box>

        </Box>
    )
}

export default Televisao;