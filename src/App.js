import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import History from './pages/quienessomos/History';
import Methodology from './pages/quienessomos/Methodology';
import Staff from './pages/quienessomos/Staff';
import Contact from './pages/quienessomos/Contact'
import Testimony from './pages/quienessomos/Testimony';
import Courses from './pages/cursos/Courses';
import Preparation from './pages/cursos/Preparation';
import SpecialCourses from './pages/cursos/SpecialCourses';
import Discounts from './pages/cursos/Discounts';
import Inmersion from './pages/servicios/Inmersion';
import Tutor from './pages/servicios/Tutor';
import TOEIC from './pages/servicios/TOEIC';
import UNICA from './pages/servicios/UNICA';
import AMITY from './pages/servicios/AMITY';
import Club from './pages/servicios/Club';
import Forward from './pages/eventos/Forward';
import Choco from './pages/eventos/Choco';
import Nuqui from './pages/eventos/Nuqui';
import Spelling from './pages/eventos/Spelling';
import EnglishDay from './pages/eventos/EnglishDay';
import Becas from './pages/eventos/Becas';
import Seeds from './pages/eventos/Seeds';
import Estudiantes from './pages/eventos/Estudiantes';
import Blog from './pages/blog/Blog';
import Biling from './pages/blog/Biling';
import Istmina from './pages/blog/Istmina';
import ILT from './pages/servicios/ILT';
import Level1 from './pages/independentlt/Level1';
import Level2 from './pages/independentlt/Level2';
import Level3 from './pages/independentlt/Level3';
import Level4 from './pages/independentlt/Level4';
import Level5 from './pages/independentlt/Level5';
import Redirect from './pages/ESAL/ESAL';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />

        {/* Quienes Somos */}
        <Route path="quienes-somos" element={<History />} />
        <Route path="metodologia" element={<Methodology />} />
        <Route path="staff" element={<Staff />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="testimonios" element={<Testimony />} />


        {/* ESAL */}
        <Route path="/ESAL" element={<Redirect />} />


        {/* Cursos De Inglés */}
        <Route path="cursos" element={<Courses />} />
        <Route path="saber11" element={<Preparation />} />
        <Route path="especiales" element={<SpecialCourses />} />
        <Route path="descuentos" element={<Discounts />} />

        {/* Nuestros Servicios */}
        <Route path="inmersion" element={<Inmersion />} />
        <Route path="tutorias" element={<Tutor />} />
        <Route path="toeic" element={<TOEIC />} />
        <Route path="unica" element={<UNICA />} />
        <Route path="amity" element={<AMITY />} />
        <Route path="club" element={<Club />} />
        <Route path="independent-learning-tools" element={<ILT />} />

        {/* Independent Learning Tools */}
        <Route path="ilt-unscramble" element={<Level1 />} />
        <Route path="ilt-fill-in-the-blanks" element={<Level2 />} />
        <Route path="ilt-understanding-words" element={<Level3 />} />
        <Route path="ilt-understanding-as-many" element={<Level4 />} />
        <Route path="ilt-main-idea" element={<Level5 />} />


        {/* Eventos / Programas */}
        <Route path="seedsofchange" element={<Seeds />} />
        <Route path="semillas-2023" element={<Estudiantes />} />
        <Route path="movingforward" element={<Forward />} />
        <Route path="choco" element={<Choco />} />
        <Route path="nuqui" element={<Nuqui />} />
        <Route path="spellingbee" element={<Spelling />} />
        <Route path="englishday" element={<EnglishDay />} />
        <Route path="becas" element={<Becas />} />

        {/* Blog */}
        <Route path="blog" element={<Blog />} />
        <Route path="bilinguismo" element={<Biling />} />
        <Route path="utch-istmina" element={<Istmina />} />
      </Routes>
    </div>
  );
}

export default App;

