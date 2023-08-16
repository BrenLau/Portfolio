import "./projects.css"
import Carousel from 'react-bootstrap/Carousel';
import hiremeplsfrontpage from './projects/Hiremeplsfrontpage.png'
import hiremeplsposts from './projects/hiremeplsposts.png'
import hiremeplslogin from './projects/hiremeplslogin.png'

const Projects = () => {
    return (
        <>
            <div className="sepprojects">
                <a className="linktitle" target="_blank" href='https://hiremepls-rsb9.onrender.com/'>HireMePls</a>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img src={hiremeplsfrontpage} className="d-block heightfix" alt='Front Page'></img>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hiremeplsposts} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={hiremeplslogin} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className='projectsdiv'>
                <a target="_blank" href='https://the-great-exchange.onrender.com/'>The Great Exchange</a>
                <a target="_blank" href='https://ninemansocial.herokuapp.com/'>Nineman Social</a>
                <a target="_blank" href='https://wecord-2.onrender.com/'>Wecord</a>
            </div>
        </>
    )
}

export default Projects
