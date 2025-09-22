import { useNavigate } from 'react-router-dom'
import { onSubmitContacto, onSubmitLuna, onSubmitPersonalizados, onSubmitLegados, onSubmitMemorias } from '@/lib/FormsHandlers'

export default function Home(){
  const navigate = useNavigate()
  return (
    <div>
      <section style={{margin:'18px 0'}}>
        <img src="/assets/hero-background.jpg" alt="Hero" className="hero"/>
      </section>

      <h2 id="contacto">Contacto</h2>
      <form name="contacto" onSubmit={(e)=>onSubmitContacto(e, navigate)}>
        <input name="nombre" placeholder="Tu nombre" required />{" "}
        <input type="email" name="email" placeholder="Tu email" required />{" "}
        <textarea name="mensaje" placeholder="Mensaje" required />
        <div><button className="btn" type="submit">Enviar</button></div>
      </form>

      <h2 id="lunas" style={{marginTop:32}}>Luna Cinemática</h2>
      <img src="/assets/honeymoon-hero.jpg" alt="Luna Cinemática" className="hero" />
      <form name="luna-cinematica" onSubmit={(e)=>onSubmitLuna(e, navigate)}>
        <input name="pareja" placeholder="Nombre de la pareja" required />{" "}
        <input type="email" name="email" placeholder="Email" required />{" "}
        <textarea name="detalles" placeholder="Detalles" />
        <div><button className="btn" type="submit">Enviar</button></div>
      </form>

      <h2 style={{marginTop:32}}>Personalizados</h2>
      <form name="personalizados" onSubmit={(e)=>onSubmitPersonalizados(e, navigate)}>
        <input name="nombre" placeholder="Nombre" required />{" "}
        <input type="email" name="email" placeholder="Email" required />{" "}
        <textarea name="detalles" placeholder="Detalles" />
        <div><button className="btn" type="submit">Enviar</button></div>
      </form>

      <h2 id="legados" style={{marginTop:32}}>Legados</h2>
      <img src="/assets/legados-hero.jpg" alt="Legados" className="hero" />
      <form name="legados" onSubmit={(e)=>onSubmitLegados(e, navigate)}>
        <input name="nombre" placeholder="Nombre" required />{" "}
        <input type="email" name="email" placeholder="Email" required />{" "}
        <textarea name="detalles" placeholder="Detalles" />
        <div><button className="btn" type="submit">Enviar</button></div>
      </form>

      <h2 id="memorias" style={{marginTop:32}}>Memorias</h2>
      <img src="/assets/memories-hero.jpg" alt="Memorias" className="hero" />
      <form name="memorias" onSubmit={(e)=>onSubmitMemorias(e, navigate)}>
        <input name="nombre" placeholder="Nombre" required />{" "}
        <input type="email" name="email" placeholder="Email" required />{" "}
        <textarea name="recuerdo" placeholder="Tu recuerdo" />
        <div><button className="btn" type="submit">Enviar</button></div>
      </form>
    </div>
  )
}
