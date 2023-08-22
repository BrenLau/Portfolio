import "./projects.css"
import Carousel from 'react-bootstrap/Carousel';
import hiremeplsfrontpage from './projects/Hiremeplsfrontpage.png'
import hiremeplsposts from './projects/hiremeplsposts.png'
import hiremeplslogin from './projects/hiremeplslogin.png'
import gemain from './projects/GEfrontpage.png'
import gelivechat from './projects/livechat.png'
import gemarket from './projects/marketplace.png'
import geseeking from './projects/seeking.png'
import geprivatemessage from './projects/privatemessage.png'
import geprofile from './projects/profile.png'

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
            <div className="sepprojects">
                <a className="linktitle" target="_blank" href='https://the-great-exchange.onrender.com'>The Great Exchange</a>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img src={gemain} className="d-block heightfix" alt='Front Page'></img>

                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={gelivechat} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={gemarket} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={geseeking} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={geprivatemessage} className="d-block heightfix" alt='Front Page'></img>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={geprofile} className="d-block heightfix" alt='Front Page'></img>
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
