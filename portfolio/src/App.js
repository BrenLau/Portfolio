import './App.css';
import Nav from './components/nav/Nav';
import Links from './components/links/Links';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Info from './components/info/Info';

function App() {
  return (
    <>
      <section>
        <div class='air air1'></div>
        <div class='air air2'></div>
        <div class='air air3'></div>
        <div class='air air4'></div>
        <div className="App">
          <Nav></Nav>
          <Links></Links>
          <Projects />
          <Skills />
          <Info />
        </div>
      </section >
    </>
  );
}

export default App;
