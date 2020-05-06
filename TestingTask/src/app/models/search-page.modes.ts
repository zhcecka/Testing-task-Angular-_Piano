export interface SearchResponse {
    has_more: boolean;
    items: Item[] | User[] | Answer[];
    quota_max: number;
    quota_remaining: number;
}

export interface Item {
    tags: string[];
    owner: Owner;
    is_answered: boolean;
    view_count: number;
    favorite_count: number;
    down_vote_count: number;
    up_vote_count: number;
    answer_count: number;
    score: number;
    last_activity_date: number;
    creation_date: number;
    last_edit_date: number;
    question_id: number;
    link: string;
    title: string;
    body: string;
}

export interface Owner {
    reputation: number;
    user_id: number;
    user_type: string;
    accept_rate: number;
    profile_image: string;
    display_name: string;
    link: string;
}

export interface User {
    post_count: number;
    score: number;
    user: {
        user_id: number
    };
}

export interface Answer {
    answer_id: number;
    body: string;
    creation_date: number;
    is_accepted: boolean;
    last_activity_date: number;
    last_edit_date: number;
    owner: Owner;
    question_id: number;
    score: number;
}