import {useEffect, useState} from "react";
import NavbarElement from "./NavbarElement.js";
import "../css/Principal_style.css";
import logo from "../assets/images/Logotipo/LogoBlanco.png";
import sportIcon from "../assets/icons/Sport.png";

import {getSports} from "../api/index"



function Principal() {
    const [result = [], setResult] = useState();

    useEffect(() => {
        console.log('Sports');
        const fetchData = async () => {
            const response  = await getSports();
            setResult(response.data.recordset);
            // console.log('fetched Data', result.Item(1));
            // console.log(result)
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavbarElement />
            <div className="Banner">
                <div className="row">
                    <div className="column">
                        <div className="row">
                            <img className="mx-auto" src={logo} />
                        </div>
                        <div className="row">
                            <h1>Información deportiva de calidad</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="CountriesContainer mx-auto ">
                <h1 className="">Deportes Disponibles ({result.length})</h1>
                <div className="ButtonsContainer">
                    {result.map(resultados => (
                        <div className="col">
                            <button className="boton">
                                <div className="row mx-auto">
                                    <div className="col my-auto">
                                        <img src={sportIcon} />
                                    </div>
                                    <div className="col">
                                        {resultados.NombreDeporte}
                                    </div>
                                </div>
                                
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Principal;
