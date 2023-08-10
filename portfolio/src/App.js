import './App.css';
import Nav from './components/nav/Nav';
import Links from './components/links/Links';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Links></Links>
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
