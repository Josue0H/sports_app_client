import logo from "../assets/images/Logotipo/LogoBlanco.png";

function NavbarElement() {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="http://localhost:3000/"> <img width={80} src={logo} alt="#" /> </a>
                </div>
            </nav>
        </div>
    );
}

export default NavbarElement;
