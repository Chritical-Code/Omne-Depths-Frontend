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