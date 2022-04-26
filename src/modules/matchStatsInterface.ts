export interface Query {
    apikey: string;
    season_id: string;
    date_from: string;
}

export interface Stage {
    stage_id: number;
    name: string;
}

export interface Group {
    group_id: number;
    group_name: string;
}

export interface Round {
    round_id: number;
    name: string;
    is_current?: number;
}

export interface Country {
    country_id: number;
    name: string;
    country_code: string;
    continent: string;
}

export interface HomeTeam {
    team_id: number;
    name: string;
    short_code: string;
    common_name: string;
    logo: string;
    country: Country;
}

export interface Country2 {
    country_id: number;
    name: string;
    country_code: string;
    continent: string;
}

export interface AwayTeam {
    team_id: number;
    name: string;
    short_code: string;
    common_name: string;
    logo: string;
    country: Country2;
}

export interface Stats {
    home_score: number;
    away_score: number;
    ht_score: string;
    ft_score: string;
    et_score?: any;
    ps_score?: any;
}

export interface Venue {
    venue_id: number;
    name: string;
    capacity: number;
    city: string;
    country_id: number;
}

export interface Data {
    match_id: number;
    status_code: number;
    status: string;
    match_start: string;
    match_start_iso: Date;
    minute?: number;
    league_id: number;
    season_id: number;
    stage: Stage;
    group: Group;
    round: Round;
    referee_id?: number;
    home_team: HomeTeam;
    away_team: AwayTeam;
    stats: Stats;
    venue: Venue;
}

export interface matchTable {
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    logoAwayTeam:string;
    logoHomeTeam:string;
    matchStart:string;
    minute?:number;
}

export interface Response {
    query: Query;
    data: Data[];
}