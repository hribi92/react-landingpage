import laptopimg from '../assets/laptop-image.png'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="section" id="about">
      <div className="section-title">
        <h2>O <span>nas</span></h2>
      </div>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={laptopimg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>Storitve</h3>
          <p>
            S strokovnim znanjem in strastjo do programiranja vam nudim vrhunske rešitve za vaše digitalne projekte.
          </p>
          <p>
          S strokovnim znanjem in strastjo do programiranja vam nudim vrhunske rešitve za vaše digitalne projekte.
          </p>
          <a href="#" className="btn">Preberi vec</a>
        </article>
      </div>
    </section>
  )
}

export default About