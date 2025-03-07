export interface Agent {
    id: string;
    name: string;
    description: string;
    category: 'Trading' | 'Social' | 'DeFi' | 'NFT' | 'Gaming' | 'DAO';
    version: string;
    score: number;
    imageUrl: string;
    twitter?: string;
    website?: string;
    mainContract?: string;
    features?: string[];
    metrics?: AgentMetric[];
    reviews?: AgentReview[];
    contractAddress?: string;
    stats?: {
        users?: number;
        transactions?: number;
        volume?: number;
    };
    chains?: string[];
    agentType?: 'twitter' | 'character';
    source?: 'general_agents' | 'agent_chain_users' | 'local';
}

export interface GeneralAgent {
    id: string;
    handle: string;
    name: string;
    description: string;
    agentType: 'twitter' | 'character';
    profilePicture?: string;
    twitterHandle?: string;
    traits?: any;
    background?: string;
    systemPrompt: string;
    createdAt: string;
    createdBy?: number;
    isPublic: boolean;
}

export interface AgentMetric {
    label: string;
    value: string;
    change: number;
    timeframe: string;
}

export interface AgentReview {
    id: string;
    user: {
        name: string;
        avatar: string;
        role: string;
    };
    rating: number;
    comment: string;
    date: string;
}

export interface FetchedTwitterUser {
    id: number;
    id_str: string;
    name: string;
    screen_name: string;
    location: string;
    url: string;
    description: string;
    protected: boolean;
    verified: boolean;
    followers_count: number;
    friends_count: number;
    listed_count: number;
    favourites_count: number;
    statuses_count: number;
    created_at: string;
    profile_banner_url: string;
    profile_image_url_https: string;
    default_profile?: boolean;
    default_profile_image?: boolean;
    withheld_in_countries?: string[];
    withheld_scope?: string;
    can_dm: boolean;
}

export interface FetchedTweet {
    id: string;
    id_str: string;
    user_handle: string;
    text: string;
    full_text: string;
    tweet_created_at: string;
    favorite_count: number;
    reply_count: number;
    retweet_count: number;
    quote_count: number;
    user: {
        screen_name: string;
        profile_image_url_https: string;
    };
    user__screen_name: string;
    user__profile_image_url_https: string;
    sentiment?: string;
    emotional_tone?: string;
    optimism_score?: number;
    toxicity_level?: number;
    subjectivity?: number;
    topic_categorization?: string;
    language_complexity?: number;
    engagement_potential?: number;
    humor_or_sarcasm?: string;
    polarity_intensity?: number;
    hashtags?: string[];
    urls?: string[];
    media?: Array<{
        type: string;
        url: string;
    }>;
}

export type ChatMessage = {
    role: "user" | "assistant";
    content: string;
};

export type SavedTweet = {
    id: string;
    handle: string;
    content: string;
    posted_at: string;
};

export type RawUser = {
    handle: string;
    profile_picture: string;
    cover_picture: string;
    display_name: string;
    twitter_id: string;
    bio: string;
    life_goals: string;
    skills: string;
    life_context: string;
    balance?: number;
};

export type ActionEvent = {
    top_level_type: "individual" | "duet" | "world_event";
    action_type: string;
    main_output: string;
    from_handle: string | null;
    story_context: string | null;
    to_handle: string | null;
    extra_data: string | null;
    created_at: Date;
};

export type AgentTweet = {
    handle: string;
    content: string;
    action_type: string;
    action_id: string;
    link?: string | null;
    image_url?: string | null;
    link_preview_img_url?: string | null;
    link_title?: string | null;
    created_at: Date;
};

export type AgentTweetWithUserData = {
    id?: string;
    handle: string;
    content: string;
    action_type: string;
    action_id: string;
    link: string | null;
    image_url: string | null;
    link_preview_img_url: string | null;
    link_title: string | null;
    profile_picture: string;
    display_name: string;
    created_at: string;
};

export type LifeGoalsChange = {
    handle: string;
    previous_life_goals: string;
    new_life_goals: string;
    summary_of_the_changes: string;
    created_at: string;
    action_id: string;
};

export type SkillsChange = {
    handle: string;
    previous_skills: string;
    new_skills: string;
    summary_of_the_changes: string;
    created_at: string;
    action_id: string;
};

export type LifeContextChange = {
    handle: string;
    previous_life_context: string;
    new_life_context: string;
    summary_of_the_changes: string;
    created_at: string;
    action_id: string;
};

export type AgentWalletRow = {
    handle: string;
    address: string;
    private_key: string;
    permit_signature: string;
};
