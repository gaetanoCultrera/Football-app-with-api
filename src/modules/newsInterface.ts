export interface Result {
    title: string;
    link: string;
    keywords: string[];
    creator: string[];
    video_url?: any;
    description: string;
    content: string;
    pubDate: string;
    full_description: string;
    image_url: string;
    source_id: string;
}

export interface customInterface {
    title:string;
    description: string;
    fullDescription:string;
    imageUrl:string;
    pubDate:string;
    link:string
    videoUrl?:any;
}

export interface responseNews {
    status: string;
    totalResults: number;
    results: Result[];
    nextPage: number;
}
