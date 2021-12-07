import axios from "axios";

const url = "http://localhost:8000/api";

export const getTeams = () => axios.get(url + '/teams');

export const getLeagues = () => axios.get(url + '/leagues');

export const getSports = () => axios.get(url + '/sports');

export const getCountries = () => axios.get(url + '/countries');

export const getLeagueCountry = (id) => axios.get(url + '/league-country/' + id);

export const getSportLeagues = (id) => axios.get(url + '/sport-leagues/' + id);

export const getLeagueTeams = (id) => axios.get(url + '/league-teams/' + id);

export const getTeam = (id) => axios.get(url + '/team/' + id);

export const getSearchTeam = (id) => axios.get(url + '/search-teams/' + id);

export const getCountSportLeague = () => axios.get(url + '/search-count-sports-league');

export const getLeagueByTeamInSpecific = (id) => axios.get(url + '/search-league-by-team-in-specific');
