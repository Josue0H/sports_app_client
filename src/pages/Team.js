import NavbarElement from "../components/NavbarElement.js";
import "../css/Equipos_Unique_style.css";
import {useEffect, useState} from "react";
import {getTeam} from "../api/index";
import noData from "../assets/icons/NoData.png";



function Team({match}) {
    const [result, setResult] = useState([]);

    useEffect(() => {
        console.log('Team');
        fetchData();
    }, []);

    const fetchData = async () => {
        const response  = await getTeam(match.params.searchCriteria);
        setResult(response.data.recordset);
    };

    return (
        <div>
            {/* ------------Navbar------------ */}
            <NavbarElement />

            {/* ------------Contenedor de todas las boxes------------ */}
            {result.map((resultados) => {
                return(
                    <div key={resultados.IDEquipo}>
                        {/* ------------Banner------------ */}
                        <div className="BannerContainer">
                            {resultados.StrBanner !== "null" ? <img className="mx-auto" alt="#" src={resultados.StrBanner} /> : <></>}
                        </div>

                        {/* ------------Contenedor de las 3 boxes------------ */}
                        <div className="Boxes row">
                            {/* ------------Equipo Box------------ */}
                            <div className="TeamContainerUnique mx-auto">
                                <div className="row">
                                    <div className="col">
                                        <div className="Titulo">
                                            Equipo
                                        </div>
                                        <div className="Container1 row">
                                            <div className="row mx-auto">
                                                <div className="col">
                                                    {resultados.StrImagenEquipo !== "null" ? <img className="mx-auto" alt="#" src={resultados.StrImagenEquipo} /> : <img className="mx-auto" alt="#" src={noData} /> }
                                                    Escudo
                                                </div>
                                                <div className="col">
                                                    {resultados.StrJersey !== "null" ? <img className="mx-auto" alt="#" src={resultados.StrJersey} /> :  <img className="mx-auto" alt="#" src={noData} />}
                                                    Jersey
                                                </div>

                                            </div>


                                        </div>

                                        <div className="my-auto row">
                                            <div className="Container2 mx-auto">
                                                <div className="row">
                                                    <div className="Title col">
                                                        Nombre:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.NombreEquipo !== 'null' ? resultados.NombreEquipo : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        Nombre Alterno:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.NombreAlternoEquipo !== 'null' ? resultados.NombreAlternoEquipo : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        ID:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.IDEquipo}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        Año de fundación:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.AnnoFundacion !== -1 ? resultados.AnnoFundacion : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        País
                                                    </div>
                                                    <div className="col">
                                                        {resultados.Pais !== 'null' ? resultados.Pais : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        Género
                                                    </div>
                                                    <div className="col">
                                                        {resultados.genero !== 'null' ? resultados.genero : <div>No Info</div>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* ------------Estadio Box------------ */}
                            <div className="StadiumContainer mx-auto">
                                <div className="row">
                                    <div className="col">
                                        <div className="Titulo">
                                            Estadio
                                        </div>

                                        <div className="Container3 row">
                                            <div className="mx-auto">
                                                {resultados.StrImagenEstadio !== "null" ? <img className="mx-auto" alt="#" src={resultados.StrImagenEstadio} /> :  <img className="mx-auto" alt="#" src={noData} />}
                                                Foto del estadio
                                            </div>
                                        </div>

                                        <div className="my-auto row">
                                            <div className="Container4 mx-auto">
                                                <div className="row">
                                                    <div className="Title col">
                                                        Nombre del estadio:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.NombreEstadio !== 'null' ? resultados.NombreEstadio : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        Ubicación:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.UbicacionEstadio !== 'null' ? resultados.UbicacionEstadio : <div>No Info</div>}
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="Title col">
                                                        Capacidad:
                                                    </div>
                                                    <div className="col">
                                                        {resultados.CapacidadEstadio !== -1 ? resultados.CapacidadEstadio : <div>No Info</div>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ------------Descripcion Box------------ */}
                            <div className="DescriptionContainer mx-auto">
                                <div className="Titulo">
                                    Descripción
                                </div>
                                <div className="DescriptionContent row">
                                    {resultados.Descripcion !== 'null' ? resultados.Descripcion : <div style={{textAlign:'center'}}>No Info</div>}
                                </div>

                            </div>


                        </div>
                    </div>

            )})};
            
            
        </div>
    );
}

export default Team;
