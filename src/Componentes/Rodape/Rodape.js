import { Fragment } from 'react'
import './Rodape.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Rodape = () => {
    return (
        <Fragment>
            <div className='footer'>
                <section>
                <p>&copy; 2025 - Meu Site. Todos os direitos reservados.</p>
                <a href='https://www.linkedin.com/in/taiuê-mafra-a4a586185/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
                </section>
            </div>
        </Fragment>
    )
}

export default Rodape