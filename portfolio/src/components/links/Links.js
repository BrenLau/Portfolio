import "./links.css"
import { SocialIcon } from 'react-social-icons'

const Links = () => {
    return (
        <div className='linksdiv'>

            <SocialIcon url="https://linkedin.com/in/brendan-l-b6952919a" />
            <SocialIcon url="https://github.com/BrenLau" />

            {/* <a className='link' target="_blank" href='https://github.com/BrenLau'>GitHub</a> */}
        </div>
    )
}

export default Links
