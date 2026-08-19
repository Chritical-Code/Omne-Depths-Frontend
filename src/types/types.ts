export type Topic = {
    id: number;
    name: string;
};

export type TopicData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Topic[];
};

export type Post = {
    id: string,
    topic: number,
    title: string,
    text: string,
}

export type PostData = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Post[];
};