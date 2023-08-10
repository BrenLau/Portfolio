import "./skills.css"

const Skills = () => {
    return (
        <div>
            <div className='skillsection'>
                <h2>Languages</h2>
                <div className='skill'>JavaScript</div>
                <div className='skill'>Python</div>
                <div className='skill'>SQL</div>
                <div className='skill'>noSQL</div>
                <div className='skill'>HTML</div>
                <div className='skill'>CSS</div>
            </div>
            <div className='skillsection'>
                <h2>Frameworks</h2>
                <div className='skill'>React</div>
                <div className='skill'>Node.js</div>
                <div className='skill'>Flask</div>
                <div className='skill'>Django</div>
                <div className='skill'>Socket.io</div>
                <div className='skill'>MongoDB</div>
                <div className='skill'>PostgreSQL</div>
            </div>
            <div className='skillsection'>
                <h2>Developer Tools</h2>
                <div className='skill'>Git</div>
                <div className='skill'>GitHub</div>
                <div className='skill'>Docker</div>
                <div className='skill'>VSCode</div>
                <div className='skill'>Visual Studio</div>
                <div className='skill'>Ubuntu</div>
                <div className='skill'>Trello</div>
            </div>
        </div>
    )
}
export default Skills
