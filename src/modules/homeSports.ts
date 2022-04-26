

    export interface Video {
        title: string;
        embed: string;
    }

    export interface Response {
        title: string;
        competition: string;
        matchviewUrl: string;
        competitionUrl: string;
        thumbnail: string;
        date: Date;
        videos: Video[];
    }

    export interface cardsUserData {
        title: string;
        competition: string;
        thumbnail: string;
        matchviewUrl:string;
    }

    export interface RootObject {
        response: Response[];
    }

