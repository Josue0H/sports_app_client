import NavbarElement from "../components/NavbarElement.js";
import "../css/Equipos_style.css";
import {useEffect, useState} from "react";
import {getSearchTeam} from "../api/index";
import noData from "../assets/icons/NoData.png";



function SearchEquiposNombre({match}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log('Teams');
        fetchData();
    }, []);

    const fetchData = async () => {
        const response  = await getSearchTeam(match.params.searchCriteria);
        setResult(response.data.recordset);
    };

    const handler = (id) => {
        window.location.replace('/equipo/'+id);
    }


    return (
        <>
            {/* ------------Navbar------------ */}
            <NavbarElement />

            {/* ------------Container------------ */}
            <div className="TeamContainer mx-auto ">
                <h1 className="">Equipos Disponibles ({result.length})</h1>
                <div className="row">
                    {result.map((resultados) => {
                        return(
                            <button key={resultados.IDEquipo} onClick={() => handler(resultados.IDEquipo)} className="botonTeam mx-auto">
                                <div className="row mx-auto">
                                    <div className=" my-auto">
                                        {resultados.NombreEquipo}
                                    </div>
                                    <div className="my-auto mx-auto">
                                        {resultados.StrImagenEquipo !== "null"  ? <img className="mx-auto" alt="#" src={resultados.StrImagenEquipo} /> : <img className="mx-auto" alt="#" src={noData} /> }
                                    </div>
                                </div>
                                
                            </button>
                    )})}
                </div>
            </div>


        </>
    );
}

export default SearchEquiposNombre;
