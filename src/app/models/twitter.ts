export interface Twitter {
    id: number;
    created: any;
    author: {
        id: number;
        username: string;
        full_name: string;
        avatar: string;
    };
    retweet: {
        id?: number;
        created?: any;
        author?: {
            id?: number;
            username?: string;
            full_name?: string;
            avatar?: string;
        },
        text?: string;
        images?: string;
    };
    text?: string;
    images?: string;
}
