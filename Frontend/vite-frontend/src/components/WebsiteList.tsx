import website1 from '../assets/website1.png'
import website2 from '../assets/website2.jpg'
import website3 from '../assets/website3.png'
import website4 from '../assets/website4.jpg'

type Props = {}

const WebsiteList = (props: Props) => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>Informativni <span>paketi</span></h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <div className="tour-img-container">
            <img src={website2} className="tour-img" alt="" />
            <p className="tour-date">1 Jan., 2024</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>Paket simpl</h4>
            </div>
            <p>
                Osnovna predstavitvena spletna stran
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> Rok dobave 7 dni
              </p>
              <p></p>
              <p>od 800€</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={website1}  className="tour-img" alt="" />
            <p className="tour-date">1 Jan., 2024</p>
          </div>
          <div className="tour-info">
            <h4>Paket optimum</h4>
            <p>
                Osnovna predstavitvena spletna stran
                Prilagodljiv izgled glede na napravo
                Splosne dodatne funkcionalnosti
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> Rok dobave 14 dni
              </p>
              <p></p>
              <p>od 1500€</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={website3}  className="tour-img" alt="" />
            <p className="tour-date">1 Jan., 2024</p>
          </div>
          <div className="tour-info">
            <h4>Paket Maxi</h4>
            <p>
              Napredna spletna stran
              Prijave uporabnikov
              Napredne storitve (komunikacija uporavnikov, blog, avtomatizirani procesi)
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span>Rok dobave 31dni
              </p>
              <p></p>
              <p>od 2500€</p>
            </div>
          </div>
        </article>

        <article className="tour-card">
          <div className="tour-img-container">
            <img src={website4}  className="tour-img" alt="" />
            <p className="tour-date">1 Jan., 2024</p>
          </div>
          <div className="tour-info">
            <h4>Paket spletna trgovina</h4>
            <p>
              Napredna spletna trgovina
              Uporaba in nadzor spletne trgovine              
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> Rok dobave 45dni
              </p>
              <p></p>
              <p>od 3000€</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default WebsiteList