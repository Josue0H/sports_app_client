import NavbarElement from "../components/NavbarElement";
import "../css/Ligas_style.css";
import {useEffect, useState} from "react";
import {getLeagueCountry} from "../api/index";
import leagueIcon from "../assets/icons/League.png";



function SearchLigasPorPais({match, history}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log('Liga por pais');
        fetchData();
    }, []);

    const fetchData = async () => {
        const response  = await getLeagueCountry(match.params.searchCriteria);
        setResult(response.data.recordset);
    };

    const handler = (id) => {
        window.location.replace('/searchequipos/'+id);
    }

    return (
        <div>
            {/* ------------Navbar------------ */}
            <NavbarElement />

            {/* ------------Container------------ */}
            <div className="LigasContainer mx-auto ">
                <h1 className="">Ligas Disponibles ({result.length})</h1>
                <div className="row">
                    {result.map((resultados) => {
                        return(
                            <button key={resultados.IDLiga} onClick={() => handler(resultados.IDLiga)} className="botonLigas mx-auto">
                                <div className="row mx-auto">
                                    <div className=" my-auto">
                                        <img src={leagueIcon} alt="#" />
                                    </div>
                                    <div className="my-auto mx-auto">
                                        {resultados.NombreLiga}
                                    </div>
                                    <div className="my-auto mx-auto">
                                        ({resultados.Deporte} / {resultados.Pais})
                                    </div>
                                </div>
                                
                            </button>
                    )})}
                </div>
            </div>


        </div>
    );
}

export default SearchLigasPorPais;
