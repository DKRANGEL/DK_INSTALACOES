import logoDk from '../assets/logo_dkinstalacoes.png';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand p-0 fw-bold" href="#">
                    <img src={logoDk} alt="Equipe em manutenção" className="p-1" style={{ height: '50px' }}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#services">
                                Serviços
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                Sobre
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
