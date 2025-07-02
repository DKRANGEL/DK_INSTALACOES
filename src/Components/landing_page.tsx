import svgInstalacoes from '../assets/svg_dkinstalacoes.png';
import Navbar from './navbar';

export default function LandingPage() {
  return (
    <main className="min-vh-100 d-flex flex-column bg-white text-dark ">
      <Navbar />

      <section id='services' className="container p-5 mb-5 text-center">
        <h1 className="text-center text-danger mb-3">Nossos Serviços</h1>
        <div className="row g-4">
          <h2 className="lead mb-4 text-secondary fw-bold">
            Instalações elétricas, hidráulicas e manutenção técnica para mercados, atacadões e clubes.
          </h2>
          {[
            {
              title: "Instalação de Luminárias LED",
              text: "Projetos e instalações para clubes, mercados e grandes áreas comerciais.",
              icon: "bi-lightbulb"
            },
            {
              title: "Reparo de Letreiros",
              text: "Manutenção e troca de instalações de letreiros danificados em fachadas e interiores.",
              icon: "bi-tools"
            },
            {
              title: "Serviços Hidráulicos",
              text: "Reparos e ajustes rápidos em encanamentos, caixas d’água e sistemas de bombeamento.",
              icon: "bi-droplet-half"
            },
            {
              title: "Marido de Aluguel",
              text: "Pequenos consertos, ajustes e instalações sob medida com agilidade.",
              icon: "bi-hammer"
            },
          ].map((s, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="card h-100 text-center shadow-sm border-0">
                <div className="card-body bg-light broder rounded-3">
                  <i className={`bi ${s.icon} display-4 text-danger mb-3`}></i>
                  <h5 className="card-title fw-bold">{s.title}</h5>
                  <p className="card-text">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-light p-5">
        <div className="container mt-5 mb-5">
          <div className="row align-items-center g-4">
            <div className="col-md-6 text-center">
              <img
                src={svgInstalacoes}
                alt="Equipe da DK Instalações"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </div>
            <div className="col-md-6">
              <h2 className="text-danger fw-bold mb-3">Sobre a DK INSTALAÇÕES</h2>
              <p className="lead text-secondary">
                Atuamos com excelência na área de instalações elétricas, hidráulicas e manutenção geral em ambientes comerciais como mercados, atacadões e clubes.
              </p>
              <p className="text-muted">
                Com uma equipe altamente qualificada, prezamos pela agilidade, qualidade e segurança em todos os serviços. Seja para grandes projetos ou pequenos reparos, estamos prontos para atender sua demanda com profissionalismo.
              </p>
              <a href="#contact" className="btn btn-danger mt-3 fw-bold shadow">
                Entre em contato
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-4 text-center">
        <div className="container mb-4">
          <h2 className="mb-4 text-center fw-bold">Fale conosco</h2>
          <div className="bg-light text-dark rounded-4 shadow-lg p-4 p-md-5 mx-auto" style={{ maxWidth: '900px' }}>
            <form className="row g-4">
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <i className="bi bi-person-fill text-danger"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control border-0 shadow-sm"
                    placeholder="Nome"
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <i className="bi bi-envelope-fill text-danger"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control border-0 shadow-sm"
                    placeholder="E-mail"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <i className="bi bi-chat-left-dots-fill text-danger"></i>
                  </span>
                  <textarea
                    className="form-control border-0 shadow-sm"
                    rows={5}
                    placeholder="Mensagem"
                    required
                  />
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-danger btn-lg px-5 shadow-sm fw-bold transition-all" type="submit">
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>

        <small>
          © 2025 DK INSTALAÇÕES - Todos os direitos reservados.
        </small>
      </footer>
    </main>
  );
}
