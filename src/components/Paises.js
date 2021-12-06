import NavbarElement from "./NavbarElement.js";
import "../css/Paises_style.css";
import {useEffect, useState} from "react";
import {getCountries} from "../api/index";
import countryIcon from "../assets/icons/Country.png";



function Paises() {
    const [result = [], setResult] = useState();

    useEffect(() => {
        console.log('Countries');
        const fetchData = async () => {
            const response  = await getCountries();
            setResult(response.data.recordset);
            // console.log('fetched Data', result.Item(1));
            // console.log(result)
        };
        fetchData();
    }, []);

    return (
        <div>
            <NavbarElement />
            <div className="CountriesContainer mx-auto ">
                <h1 className="">Países Disponibles ({result.length})</h1>
                {result.map(resultados => (
                    <div className="col">
                        <button className="boton">
                            <div className="row mx-auto">
                                <div className="col my-auto">
                                    <img src={countryIcon} />
                                </div>
                                <div className="col">
                                    {resultados.NombrePais}
                                </div>
                            </div>
                            
                        </button>
                    </div>
                ))}
            </div>


        </div>
    );
}

export default Paises;
