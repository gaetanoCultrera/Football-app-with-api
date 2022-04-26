    export interface Query {
        apikey: string;
        season_id: string;
    }

    export interface Player {
        player_id?: number;
        player_name: string;
    }

    export interface Team {
        team_id: number;
        team_name: string;
    }

    export interface Goals {
        overall: number;
        home: number;
        away: number;
    }

    export interface Data {
        pos: number;
        player: Player;
        team: Team;
        league_id: number;
        season_id: number;
        matches_played: number;
        minutes_played: number;
        substituted_in?: number;
        goals: Goals;
        penalties?: number;
    }

    export interface scorerTable {
        goals:number;
        playerName:String;
        teamName:String;
        matchesPlayed:number
      }
    
      export interface searchScorerTable{
        goals:number;
        playerName:String;
        matchesPlayed:number;
        minutesPlayed:number;
        penalties?: number;
      }
    

    export interface Response {
        query: Query;
        data: Data[];
    }


