export interface Instagram {
    id: string;
    created: any;
    likes: number;
    comments: number;
    author: {
        id: number;
        username: string;
        full_name: string;
        avatar: string;
    };
    image: any;
    caption?: string;
    location?: string;
    comments_preview?: any;
}
