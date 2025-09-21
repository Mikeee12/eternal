export default function Gracias(){
  return (
    <section style={{minHeight:'60vh',display:'grid',placeItems:'center'}}>
      <div className="card" style={{maxWidth:760}}>
        <div style={{fontSize:56, marginBottom:12}}>✔️</div>
        <h1 style={{color:'var(--gold)'}}>¡Gracias por confiar en Eternal Frames!</h1>
        <p className="muted">Hemos recibido tu solicitud. Nos pondremos en contacto contigo pronto.</p>
        <a className="btn" href="/">Volver al inicio</a>
      </div>
    </section>
  )
}
