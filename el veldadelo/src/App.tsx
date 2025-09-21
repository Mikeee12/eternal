import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Gracias from './pages/thankyou/Gracias'
import GraciasLunasCinematica from './pages/thankyou/GraciasLunasCinematica'

function Layout({ children }: {children: React.ReactNode}) {
  return (
    <>
      <nav className="nav">
        <div className="container" style={{display:'flex',alignItems:'center',gap:16,justifyContent:'space-between'}}>
          <div className="brand">
            <Link to="/"><img src="/public/assets/eternal-frames-logo.png" onError={(e:any)=>{e.currentTarget.src='/assets/eternal-frames-logo.png'}} alt="Eternal Frames" /></Link>
            <strong style={{color:'var(--gold)'}}>Eternal Frames</strong>
          </div>
          <div style={{display:'flex',gap:18}}>
            <a href="#lunas">Lunas de miel</a>
            <a href="#memorias">Memorias</a>
            <a href="#legados">Legados</a>
            <a href="#contacto">Contacto</a>
          </div>
          <Link to="/#start" className="btn">Empezar mi película</Link>
        </div>
      </nav>
      <div className="container" style={{padding:'24px 20px'}}>
        {children}
      </div>
      <footer>© Eternal Frames</footer>
    </>
  )
}

export default function App(){
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gracias" element={<Gracias/>} />
        <Route path="/gracias/luna-cinematica" element={<GraciasLunasCinematica/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </Layout>
  )
}
