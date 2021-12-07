import NavbarElement from "../components/NavbarElement";
import "../css/Ligas_style.css";
import {useEffect, useState} from "react";
import {getSportLeagues, getLeagues} from "../api/index";
import leagueIcon from "../assets/icons/League.png";



function SearchLigas({match, history}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log('Teams');
        fetchData();
    }, []);

    const fetchData = async () => {
        if(match.params.searchCriteria === 'All'){
            const response  = await getLeagues(match.params.searchCriteria);
            setResult(response.data.recordset);
        }
        else{
            const response  = await getSportLeagues(match.params.searchCriteria);
            setResult(response.data.recordset);
        }
        
        console.log(result)
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

export default SearchLigas;
