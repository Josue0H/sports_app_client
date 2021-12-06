import * as api from "../api/index.js";

export const getTeams = async () => {
    try{
        const {data} = await api.getTeams();
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getLeagues = async () => {
    try{
        const {data} = await api.getLeagues();
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getSports = async () => {
    try{
        const {data} = await api.getSports();
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getCountries = async () => {
    try{
        const {data} = await api.getCountries();
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getLeagueCountry = async (id) => {
    try{
        const {data} = await api.getLeagueCountry(id);
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getSportLeagues = async (id) => {
    try{
        const {data} = await api.getSportLeagues(id);
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getLeagueTeams = async (id) => {
    try{
        const {data} = await api.getLeagueTeams(id);
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getTeam = async (id) => {
    try{
        const {data} = await api.getTeam(id);
        return data;
    }   
    catch(error){
        console.log(error);
    }
};

export const getSearchTeam = async () => {
    try{
        const {data} = await api.getSearchTeam();
        return data;
    }   
    catch(error){
        console.log(error);
    }
};


