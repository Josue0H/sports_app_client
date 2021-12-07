import {useEffect, useState} from "react";
import NavbarElement from "../components/NavbarElement";
import ChartToUse from "../components/ChartToUse";
import "../css/Principal_style.css";
import logo from "../assets/images/Logotipo/LogoBlanco.png";
import sportIcon from "../assets/icons/Sport.png";
import leagueIcon from "../assets/icons/League.png";
import teamIcon from "../assets/icons/Team.png";
import countryIcon from "../assets/icons/Country.png";
import {getSports} from "../api/index";



const Principal = ({ history }) => {
    const [result, setResult] = useState([]);
    const [oration, setOration] = useState('');

    useEffect(() => {
        console.log('Sports');
        fetchData();
    }, []);

    const fetchData = async () => {
        const response  = await getSports();
        setResult(response.data.recordset);
    };

    const handler = (id) => {
        history.push('/searchligas/'+id);
    }

    const handleInput = (e) => {
        setOration(e.target.value);
    };

    const logValue = () => {
        window.location.replace('/searchequiposnombre/'+oration);
    };

    return (
        <div>
            {/* ------------Navbar------------ */}
            <NavbarElement />

            {/* ------------Banner------------ */}
            <div className="Banner">
                <div className="row">
                    <div className="column">
                        <div className="row">
                            <img className="mx-auto" src={logo} alt="#" />
                        </div>
                        <div className="row">
                            <h1>Información deportiva de calidad</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------Buscador------------ */}
            <div className="SearchContainer mx-auto">
                <h1>Buscador de equipos</h1>
                <input onChange={handleInput} placeholder="Nombre de un equipo" />
                <button className="botonSearchTeam" onClick={logValue}>Buscar</button>
            </div>

            {/* ------------Grafica------------ */}
            <div className="GraphContainer mx-auto">
                <h1>Cantidad de ligas por cada deporte</h1>
                <ChartToUse />
            </div>



            {/* ------------Deportes------------ */}
            <div className="ButtonsContainer mx-auto ">
                <h1 className="">Deportes Disponibles ({result.length})</h1>
                <div className="row">
                    {result.map((resultados) => {
                        return(
                            <button key={resultados.IDDeporte} onClick={() => handler(resultados.IDDeporte)} className="botonPrincipal mx-auto">
                                <div className="row mx-auto">
                                    <div className=" my-auto">
                                        <img src={sportIcon} alt="#" />
                                    </div>
                                    <div className="my-auto mx-auto">
                                        {resultados.NombreDeporte}
                                    </div>
                                </div>
                                
                            </button>
                    )})}
                </div>
            </div>


             {/* ------------Filtros------------ */}
            <div className="FiltrosContainer mx-auto">
                <h1 className="">Más filtros</h1>
                <div className="row">
                    <div className="col">
                        <button onClick={() => history.push(`/searchequipos/All`)} className="botonPrincipal mx-auto">
                            <div className="row mx-auto">
                                <div className=" my-auto">
                                    <img src={teamIcon} alt="#" />
                                </div>
                                <div className="my-auto mx-auto">
                                    Todos los Equipos
                                </div>
                            </div>
                            
                        </button>
                    </div>

                    <div className="col">
                        <button onClick={() => history.push(`/searchligas/All`)} className="botonPrincipal mx-auto">
                            <div className="row mx-auto">
                                <div className=" my-auto">
                                    <img src={leagueIcon} alt="#" />
                                </div>
                                <div className="my-auto mx-auto">
                                    Todas las Ligas
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="col">
                        <button onClick={() => history.push(`/searchcountries`)} className="botonPrincipal mx-auto">
                            <div className="row mx-auto">
                                <div className=" my-auto">
                                    <img src={countryIcon} alt="#" />
                                </div>
                                <div className="my-auto mx-auto">
                                    Todos los Países
                                </div>
                            </div>
                        </button>
                    </div>

                </div>
            </div>


        </div>
    );
}

export default Principal;
