export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** ISO8601 Date values */
    Date: any;
    /** BigInt value */
    GraphQLBigInt: any;
    /** A Float or a String */
    GraphQLStringOrFloat: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type Query = {
    __typename?: 'Query';
    cases: Array<Cases>;
    cases_aggregated: Array<Cases_Aggregated>;
    cases_by_id: Maybe<Cases>;
    contentblock_hero: Array<Contentblock_Hero>;
    contentblock_hero_aggregated: Array<Contentblock_Hero_Aggregated>;
    contentblock_hero_by_id: Maybe<Contentblock_Hero>;
    contentblock_introduction: Array<Contentblock_Introduction>;
    contentblock_introduction_aggregated: Array<Contentblock_Introduction_Aggregated>;
    contentblock_introduction_by_id: Maybe<Contentblock_Introduction>;
    contentblock_latest_news: Array<Contentblock_Latest_News>;
    contentblock_latest_news_aggregated: Array<Contentblock_Latest_News_Aggregated>;
    contentblock_latest_news_by_id: Maybe<Contentblock_Latest_News>;
    contentblock_selected_cases: Array<Contentblock_Selected_Cases>;
    contentblock_selected_cases_aggregated: Array<Contentblock_Selected_Cases_Aggregated>;
    contentblock_selected_cases_by_id: Maybe<Contentblock_Selected_Cases>;
    contentblock_selected_services: Array<Contentblock_Selected_Services>;
    contentblock_selected_services_aggregated: Array<Contentblock_Selected_Services_Aggregated>;
    contentblock_selected_services_by_id: Maybe<Contentblock_Selected_Services>;
    contentblock_showcase: Array<Contentblock_Showcase>;
    contentblock_showcase_aggregated: Array<Contentblock_Showcase_Aggregated>;
    contentblock_showcase_by_id: Maybe<Contentblock_Showcase>;
    contentblock_showcase_files: Array<Contentblock_Showcase_Files>;
    contentblock_showcase_files_aggregated: Array<Contentblock_Showcase_Files_Aggregated>;
    contentblock_showcase_files_by_id: Maybe<Contentblock_Showcase_Files>;
    link: Array<Link>;
    link_aggregated: Array<Link_Aggregated>;
    link_by_id: Maybe<Link>;
    news: Array<News>;
    news_aggregated: Array<News_Aggregated>;
    news_by_id: Maybe<News>;
    pages: Array<Pages>;
    pages_aggregated: Array<Pages_Aggregated>;
    pages_by_id: Maybe<Pages>;
    pages_content: Array<Pages_Content>;
    pages_content_aggregated: Array<Pages_Content_Aggregated>;
    pages_content_by_id: Maybe<Pages_Content>;
};


export type QueryCasesArgs = {
    filter: InputMaybe<Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCases_AggregatedArgs = {
    filter: InputMaybe<Cases_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryCases_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_HeroArgs = {
    filter: InputMaybe<Contentblock_Hero_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Hero_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Hero_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Hero_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_IntroductionArgs = {
    filter: InputMaybe<Contentblock_Introduction_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Introduction_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Introduction_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Introduction_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_Latest_NewsArgs = {
    filter: InputMaybe<Contentblock_Latest_News_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Latest_News_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Latest_News_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Latest_News_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_Selected_CasesArgs = {
    filter: InputMaybe<Contentblock_Selected_Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Selected_Cases_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Selected_Cases_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Selected_Cases_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_Selected_ServicesArgs = {
    filter: InputMaybe<Contentblock_Selected_Services_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Selected_Services_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Selected_Services_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Selected_Services_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_ShowcaseArgs = {
    filter: InputMaybe<Contentblock_Showcase_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Showcase_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Showcase_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Showcase_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryContentblock_Showcase_FilesArgs = {
    filter: InputMaybe<Contentblock_Showcase_Files_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Showcase_Files_AggregatedArgs = {
    filter: InputMaybe<Contentblock_Showcase_Files_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryContentblock_Showcase_Files_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryLinkArgs = {
    filter: InputMaybe<Link_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLink_AggregatedArgs = {
    filter: InputMaybe<Link_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryLink_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryNewsArgs = {
    filter: InputMaybe<News_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNews_AggregatedArgs = {
    filter: InputMaybe<News_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryNews_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryPagesArgs = {
    filter: InputMaybe<Pages_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_AggregatedArgs = {
    filter: InputMaybe<Pages_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_By_IdArgs = {
    id: Scalars['ID'];
};


export type QueryPages_ContentArgs = {
    filter: InputMaybe<Pages_Content_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Content_AggregatedArgs = {
    filter: InputMaybe<Pages_Content_Filter>;
    groupBy: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    limit: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryPages_Content_By_IdArgs = {
    id: Scalars['ID'];
};

export type Cases = {
    __typename?: 'cases';
    cases_id: Maybe<Contentblock_Selected_Cases>;
    cases_r_id: Maybe<Contentblock_Selected_Cases>;
    client: Maybe<Scalars['String']>;
    date_created: Maybe<Scalars['Date']>;
    date_created_func: Maybe<Datetime_Functions>;
    date_updated: Maybe<Scalars['Date']>;
    date_updated_func: Maybe<Datetime_Functions>;
    headline: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    image: Maybe<Directus_Files>;
    name: Maybe<Scalars['String']>;
    status: Maybe<Scalars['String']>;
    tags: Maybe<Scalars['JSON']>;
    tags_func: Maybe<Count_Functions>;
    user_created: Maybe<Scalars['String']>;
    user_updated: Maybe<Scalars['String']>;
};


export type CasesCases_IdArgs = {
    filter: InputMaybe<Contentblock_Selected_Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CasesCases_R_IdArgs = {
    filter: InputMaybe<Contentblock_Selected_Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type CasesImageArgs = {
    filter: InputMaybe<Directus_Files_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Cases_Aggregated = {
    __typename?: 'cases_aggregated';
    avg: Maybe<Cases_Aggregated_Fields>;
    avgDistinct: Maybe<Cases_Aggregated_Fields>;
    count: Maybe<Cases_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Cases_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Cases_Aggregated_Fields>;
    min: Maybe<Cases_Aggregated_Fields>;
    sum: Maybe<Cases_Aggregated_Fields>;
    sumDistinct: Maybe<Cases_Aggregated_Fields>;
};

export type Cases_Aggregated_Count = {
    __typename?: 'cases_aggregated_count';
    cases_id: Maybe<Scalars['Int']>;
    cases_r_id: Maybe<Scalars['Int']>;
    client: Maybe<Scalars['Int']>;
    date_created: Maybe<Scalars['Int']>;
    date_updated: Maybe<Scalars['Int']>;
    headline: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    image: Maybe<Scalars['Int']>;
    name: Maybe<Scalars['Int']>;
    status: Maybe<Scalars['Int']>;
    tags: Maybe<Scalars['Int']>;
    user_created: Maybe<Scalars['Int']>;
    user_updated: Maybe<Scalars['Int']>;
};

export type Cases_Aggregated_Fields = {
    __typename?: 'cases_aggregated_fields';
    cases_id: Maybe<Scalars['Float']>;
    cases_r_id: Maybe<Scalars['Float']>;
    id: Maybe<Scalars['Float']>;
};

export type Cases_Filter = {
    _and: InputMaybe<Array<InputMaybe<Cases_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Cases_Filter>>>;
    cases_id: InputMaybe<Contentblock_Selected_Cases_Filter>;
    cases_r_id: InputMaybe<Contentblock_Selected_Cases_Filter>;
    client: InputMaybe<String_Filter_Operators>;
    date_created: InputMaybe<Date_Filter_Operators>;
    date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated: InputMaybe<Date_Filter_Operators>;
    date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
    headline: InputMaybe<String_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    image: InputMaybe<Directus_Files_Filter>;
    name: InputMaybe<String_Filter_Operators>;
    status: InputMaybe<String_Filter_Operators>;
    tags: InputMaybe<String_Filter_Operators>;
    tags_func: InputMaybe<Count_Function_Filter_Operators>;
    user_created: InputMaybe<String_Filter_Operators>;
    user_updated: InputMaybe<String_Filter_Operators>;
};

export type Contentblock_Hero = {
    __typename?: 'contentblock_hero';
    id: Scalars['ID'];
    link: Maybe<Link>;
    /** Tip: Italic = White and Strong */
    overline: Maybe<Scalars['String']>;
    /** Tip: Italic = Yellow ;) */
    title: Maybe<Scalars['String']>;
};


export type Contentblock_HeroLinkArgs = {
    filter: InputMaybe<Link_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Hero_Aggregated = {
    __typename?: 'contentblock_hero_aggregated';
    avg: Maybe<Contentblock_Hero_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Hero_Aggregated_Fields>;
    count: Maybe<Contentblock_Hero_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Hero_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Hero_Aggregated_Fields>;
    min: Maybe<Contentblock_Hero_Aggregated_Fields>;
    sum: Maybe<Contentblock_Hero_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Hero_Aggregated_Fields>;
};

export type Contentblock_Hero_Aggregated_Count = {
    __typename?: 'contentblock_hero_aggregated_count';
    id: Maybe<Scalars['Int']>;
    link: Maybe<Scalars['Int']>;
    /** Tip: Italic = White and Strong */
    overline: Maybe<Scalars['Int']>;
    /** Tip: Italic = Yellow ;) */
    title: Maybe<Scalars['Int']>;
};

export type Contentblock_Hero_Aggregated_Fields = {
    __typename?: 'contentblock_hero_aggregated_fields';
    id: Maybe<Scalars['Float']>;
    link: Maybe<Scalars['Float']>;
};

export type Contentblock_Hero_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Hero_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Hero_Filter>>>;
    id: InputMaybe<Number_Filter_Operators>;
    link: InputMaybe<Link_Filter>;
    overline: InputMaybe<String_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
};

export type Contentblock_Introduction = {
    __typename?: 'contentblock_introduction';
    id: Scalars['ID'];
    link: Maybe<Link>;
    text: Maybe<Scalars['String']>;
};


export type Contentblock_IntroductionLinkArgs = {
    filter: InputMaybe<Link_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Introduction_Aggregated = {
    __typename?: 'contentblock_introduction_aggregated';
    avg: Maybe<Contentblock_Introduction_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Introduction_Aggregated_Fields>;
    count: Maybe<Contentblock_Introduction_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Introduction_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Introduction_Aggregated_Fields>;
    min: Maybe<Contentblock_Introduction_Aggregated_Fields>;
    sum: Maybe<Contentblock_Introduction_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Introduction_Aggregated_Fields>;
};

export type Contentblock_Introduction_Aggregated_Count = {
    __typename?: 'contentblock_introduction_aggregated_count';
    id: Maybe<Scalars['Int']>;
    link: Maybe<Scalars['Int']>;
    text: Maybe<Scalars['Int']>;
};

export type Contentblock_Introduction_Aggregated_Fields = {
    __typename?: 'contentblock_introduction_aggregated_fields';
    id: Maybe<Scalars['Float']>;
    link: Maybe<Scalars['Float']>;
};

export type Contentblock_Introduction_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Introduction_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Introduction_Filter>>>;
    id: InputMaybe<Number_Filter_Operators>;
    link: InputMaybe<Link_Filter>;
    text: InputMaybe<String_Filter_Operators>;
};

export type Contentblock_Latest_News = {
    __typename?: 'contentblock_latest_news';
    id: Scalars['ID'];
    news: Maybe<Array<Maybe<News>>>;
    news_func: Maybe<Count_Functions>;
    title: Maybe<Scalars['String']>;
};


export type Contentblock_Latest_NewsNewsArgs = {
    filter: InputMaybe<News_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Latest_News_Aggregated = {
    __typename?: 'contentblock_latest_news_aggregated';
    avg: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
    count: Maybe<Contentblock_Latest_News_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Latest_News_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
    min: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
    sum: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Latest_News_Aggregated_Fields>;
};

export type Contentblock_Latest_News_Aggregated_Count = {
    __typename?: 'contentblock_latest_news_aggregated_count';
    id: Maybe<Scalars['Int']>;
    news: Maybe<Scalars['Int']>;
    title: Maybe<Scalars['Int']>;
};

export type Contentblock_Latest_News_Aggregated_Fields = {
    __typename?: 'contentblock_latest_news_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Contentblock_Latest_News_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Latest_News_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Latest_News_Filter>>>;
    id: InputMaybe<Number_Filter_Operators>;
    news: InputMaybe<News_Filter>;
    news_func: InputMaybe<Count_Function_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
};

export type Contentblock_Selected_Cases = {
    __typename?: 'contentblock_selected_cases';
    casesLeft: Maybe<Array<Maybe<Cases>>>;
    casesLeft_func: Maybe<Count_Functions>;
    casesRight: Maybe<Array<Maybe<Cases>>>;
    casesRight_func: Maybe<Count_Functions>;
    description: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    title: Maybe<Scalars['String']>;
};


export type Contentblock_Selected_CasesCasesLeftArgs = {
    filter: InputMaybe<Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Contentblock_Selected_CasesCasesRightArgs = {
    filter: InputMaybe<Cases_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Selected_Cases_Aggregated = {
    __typename?: 'contentblock_selected_cases_aggregated';
    avg: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
    count: Maybe<Contentblock_Selected_Cases_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Selected_Cases_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
    min: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
    sum: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Selected_Cases_Aggregated_Fields>;
};

export type Contentblock_Selected_Cases_Aggregated_Count = {
    __typename?: 'contentblock_selected_cases_aggregated_count';
    casesLeft: Maybe<Scalars['Int']>;
    casesRight: Maybe<Scalars['Int']>;
    description: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    title: Maybe<Scalars['Int']>;
};

export type Contentblock_Selected_Cases_Aggregated_Fields = {
    __typename?: 'contentblock_selected_cases_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Contentblock_Selected_Cases_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Selected_Cases_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Selected_Cases_Filter>>>;
    casesLeft: InputMaybe<Cases_Filter>;
    casesLeft_func: InputMaybe<Count_Function_Filter_Operators>;
    casesRight: InputMaybe<Cases_Filter>;
    casesRight_func: InputMaybe<Count_Function_Filter_Operators>;
    description: InputMaybe<String_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
};

export type Contentblock_Selected_Services = {
    __typename?: 'contentblock_selected_services';
    description: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    title: Maybe<Scalars['String']>;
    wordRow1: Maybe<Scalars['JSON']>;
    wordRow1_func: Maybe<Count_Functions>;
    wordRow2: Maybe<Scalars['JSON']>;
    wordRow2_func: Maybe<Count_Functions>;
    wordRow3: Maybe<Scalars['JSON']>;
    wordRow3_func: Maybe<Count_Functions>;
};

export type Contentblock_Selected_Services_Aggregated = {
    __typename?: 'contentblock_selected_services_aggregated';
    avg: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
    count: Maybe<Contentblock_Selected_Services_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Selected_Services_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
    min: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
    sum: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Selected_Services_Aggregated_Fields>;
};

export type Contentblock_Selected_Services_Aggregated_Count = {
    __typename?: 'contentblock_selected_services_aggregated_count';
    description: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    title: Maybe<Scalars['Int']>;
    wordRow1: Maybe<Scalars['Int']>;
    wordRow2: Maybe<Scalars['Int']>;
    wordRow3: Maybe<Scalars['Int']>;
};

export type Contentblock_Selected_Services_Aggregated_Fields = {
    __typename?: 'contentblock_selected_services_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Contentblock_Selected_Services_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Selected_Services_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Selected_Services_Filter>>>;
    description: InputMaybe<String_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
    wordRow1: InputMaybe<String_Filter_Operators>;
    wordRow1_func: InputMaybe<Count_Function_Filter_Operators>;
    wordRow2: InputMaybe<String_Filter_Operators>;
    wordRow2_func: InputMaybe<Count_Function_Filter_Operators>;
    wordRow3: InputMaybe<String_Filter_Operators>;
    wordRow3_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Contentblock_Showcase = {
    __typename?: 'contentblock_showcase';
    id: Scalars['ID'];
    images: Maybe<Array<Maybe<Contentblock_Showcase_Files>>>;
    images_func: Maybe<Count_Functions>;
};


export type Contentblock_ShowcaseImagesArgs = {
    filter: InputMaybe<Contentblock_Showcase_Files_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Showcase_Aggregated = {
    __typename?: 'contentblock_showcase_aggregated';
    avg: Maybe<Contentblock_Showcase_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Showcase_Aggregated_Fields>;
    count: Maybe<Contentblock_Showcase_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Showcase_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Showcase_Aggregated_Fields>;
    min: Maybe<Contentblock_Showcase_Aggregated_Fields>;
    sum: Maybe<Contentblock_Showcase_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Showcase_Aggregated_Fields>;
};

export type Contentblock_Showcase_Aggregated_Count = {
    __typename?: 'contentblock_showcase_aggregated_count';
    id: Maybe<Scalars['Int']>;
    images: Maybe<Scalars['Int']>;
};

export type Contentblock_Showcase_Aggregated_Fields = {
    __typename?: 'contentblock_showcase_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Contentblock_Showcase_Files = {
    __typename?: 'contentblock_showcase_files';
    contentblock_showcase_id: Maybe<Contentblock_Showcase>;
    directus_files_id: Maybe<Directus_Files>;
    id: Scalars['ID'];
};


export type Contentblock_Showcase_FilesContentblock_Showcase_IdArgs = {
    filter: InputMaybe<Contentblock_Showcase_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type Contentblock_Showcase_FilesDirectus_Files_IdArgs = {
    filter: InputMaybe<Directus_Files_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Contentblock_Showcase_Files_Aggregated = {
    __typename?: 'contentblock_showcase_files_aggregated';
    avg: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
    avgDistinct: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
    count: Maybe<Contentblock_Showcase_Files_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Contentblock_Showcase_Files_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
    min: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
    sum: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
    sumDistinct: Maybe<Contentblock_Showcase_Files_Aggregated_Fields>;
};

export type Contentblock_Showcase_Files_Aggregated_Count = {
    __typename?: 'contentblock_showcase_files_aggregated_count';
    contentblock_showcase_id: Maybe<Scalars['Int']>;
    directus_files_id: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
};

export type Contentblock_Showcase_Files_Aggregated_Fields = {
    __typename?: 'contentblock_showcase_files_aggregated_fields';
    contentblock_showcase_id: Maybe<Scalars['Float']>;
    id: Maybe<Scalars['Float']>;
};

export type Contentblock_Showcase_Files_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Showcase_Files_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Showcase_Files_Filter>>>;
    contentblock_showcase_id: InputMaybe<Contentblock_Showcase_Filter>;
    directus_files_id: InputMaybe<Directus_Files_Filter>;
    id: InputMaybe<Number_Filter_Operators>;
};

export type Contentblock_Showcase_Filter = {
    _and: InputMaybe<Array<InputMaybe<Contentblock_Showcase_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Contentblock_Showcase_Filter>>>;
    id: InputMaybe<Number_Filter_Operators>;
    images: InputMaybe<Contentblock_Showcase_Files_Filter>;
    images_func: InputMaybe<Count_Function_Filter_Operators>;
};

export type Count_Function_Filter_Operators = {
    count: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
    __typename?: 'count_functions';
    count: Maybe<Scalars['Int']>;
};

export type Date_Filter_Operators = {
    _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _eq: InputMaybe<Scalars['String']>;
    _gt: InputMaybe<Scalars['String']>;
    _gte: InputMaybe<Scalars['String']>;
    _in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _lt: InputMaybe<Scalars['String']>;
    _lte: InputMaybe<Scalars['String']>;
    _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _neq: InputMaybe<Scalars['String']>;
    _nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _nnull: InputMaybe<Scalars['Boolean']>;
    _null: InputMaybe<Scalars['Boolean']>;
};

export type Datetime_Function_Filter_Operators = {
    day: InputMaybe<Number_Filter_Operators>;
    hour: InputMaybe<Number_Filter_Operators>;
    minute: InputMaybe<Number_Filter_Operators>;
    month: InputMaybe<Number_Filter_Operators>;
    second: InputMaybe<Number_Filter_Operators>;
    week: InputMaybe<Number_Filter_Operators>;
    weekday: InputMaybe<Number_Filter_Operators>;
    year: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
    __typename?: 'datetime_functions';
    day: Maybe<Scalars['Int']>;
    hour: Maybe<Scalars['Int']>;
    minute: Maybe<Scalars['Int']>;
    month: Maybe<Scalars['Int']>;
    second: Maybe<Scalars['Int']>;
    week: Maybe<Scalars['Int']>;
    weekday: Maybe<Scalars['Int']>;
    year: Maybe<Scalars['Int']>;
};

export type Directus_Files = {
    __typename?: 'directus_files';
    charset: Maybe<Scalars['String']>;
    description: Maybe<Scalars['String']>;
    duration: Maybe<Scalars['Int']>;
    embed: Maybe<Scalars['String']>;
    filename_disk: Maybe<Scalars['String']>;
    filename_download: Scalars['String'];
    filesize: Maybe<Scalars['GraphQLBigInt']>;
    folder: Maybe<Scalars['String']>;
    height: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    location: Maybe<Scalars['String']>;
    metadata: Maybe<Scalars['JSON']>;
    metadata_func: Maybe<Count_Functions>;
    modified_by: Maybe<Scalars['String']>;
    modified_on: Maybe<Scalars['Date']>;
    modified_on_func: Maybe<Datetime_Functions>;
    storage: Scalars['String'];
    tags: Maybe<Scalars['JSON']>;
    tags_func: Maybe<Count_Functions>;
    title: Maybe<Scalars['String']>;
    type: Maybe<Scalars['String']>;
    uploaded_by: Maybe<Scalars['String']>;
    uploaded_on: Maybe<Scalars['Date']>;
    uploaded_on_func: Maybe<Datetime_Functions>;
    width: Maybe<Scalars['Int']>;
};

export type Directus_Files_Filter = {
    _and: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
    charset: InputMaybe<String_Filter_Operators>;
    description: InputMaybe<String_Filter_Operators>;
    duration: InputMaybe<Number_Filter_Operators>;
    embed: InputMaybe<String_Filter_Operators>;
    filename_disk: InputMaybe<String_Filter_Operators>;
    filename_download: InputMaybe<String_Filter_Operators>;
    filesize: InputMaybe<Number_Filter_Operators>;
    folder: InputMaybe<String_Filter_Operators>;
    height: InputMaybe<Number_Filter_Operators>;
    id: InputMaybe<String_Filter_Operators>;
    location: InputMaybe<String_Filter_Operators>;
    metadata: InputMaybe<String_Filter_Operators>;
    metadata_func: InputMaybe<Count_Function_Filter_Operators>;
    modified_by: InputMaybe<String_Filter_Operators>;
    modified_on: InputMaybe<Date_Filter_Operators>;
    modified_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
    storage: InputMaybe<String_Filter_Operators>;
    tags: InputMaybe<String_Filter_Operators>;
    tags_func: InputMaybe<Count_Function_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
    type: InputMaybe<String_Filter_Operators>;
    uploaded_by: InputMaybe<String_Filter_Operators>;
    uploaded_on: InputMaybe<Date_Filter_Operators>;
    uploaded_on_func: InputMaybe<Datetime_Function_Filter_Operators>;
    width: InputMaybe<Number_Filter_Operators>;
};

export type Link = {
    __typename?: 'link';
    id: Scalars['ID'];
    target: Maybe<Scalars['String']>;
    text: Maybe<Scalars['String']>;
    to: Maybe<Scalars['String']>;
};

export type Link_Aggregated = {
    __typename?: 'link_aggregated';
    avg: Maybe<Link_Aggregated_Fields>;
    avgDistinct: Maybe<Link_Aggregated_Fields>;
    count: Maybe<Link_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Link_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Link_Aggregated_Fields>;
    min: Maybe<Link_Aggregated_Fields>;
    sum: Maybe<Link_Aggregated_Fields>;
    sumDistinct: Maybe<Link_Aggregated_Fields>;
};

export type Link_Aggregated_Count = {
    __typename?: 'link_aggregated_count';
    id: Maybe<Scalars['Int']>;
    target: Maybe<Scalars['Int']>;
    text: Maybe<Scalars['Int']>;
    to: Maybe<Scalars['Int']>;
};

export type Link_Aggregated_Fields = {
    __typename?: 'link_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Link_Filter = {
    _and: InputMaybe<Array<InputMaybe<Link_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Link_Filter>>>;
    id: InputMaybe<Number_Filter_Operators>;
    target: InputMaybe<String_Filter_Operators>;
    text: InputMaybe<String_Filter_Operators>;
    to: InputMaybe<String_Filter_Operators>;
};

export type News = {
    __typename?: 'news';
    body: Maybe<Scalars['String']>;
    category: Maybe<Scalars['String']>;
    date: Maybe<Scalars['Date']>;
    date_func: Maybe<Datetime_Functions>;
    excerpt: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    image: Maybe<Directus_Files>;
    latest_news_id: Maybe<Contentblock_Latest_News>;
    slug: Maybe<Scalars['String']>;
    title: Maybe<Scalars['String']>;
};


export type NewsImageArgs = {
    filter: InputMaybe<Directus_Files_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type NewsLatest_News_IdArgs = {
    filter: InputMaybe<Contentblock_Latest_News_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type News_Aggregated = {
    __typename?: 'news_aggregated';
    avg: Maybe<News_Aggregated_Fields>;
    avgDistinct: Maybe<News_Aggregated_Fields>;
    count: Maybe<News_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<News_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<News_Aggregated_Fields>;
    min: Maybe<News_Aggregated_Fields>;
    sum: Maybe<News_Aggregated_Fields>;
    sumDistinct: Maybe<News_Aggregated_Fields>;
};

export type News_Aggregated_Count = {
    __typename?: 'news_aggregated_count';
    body: Maybe<Scalars['Int']>;
    category: Maybe<Scalars['Int']>;
    date: Maybe<Scalars['Int']>;
    excerpt: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    image: Maybe<Scalars['Int']>;
    latest_news_id: Maybe<Scalars['Int']>;
    slug: Maybe<Scalars['Int']>;
    title: Maybe<Scalars['Int']>;
};

export type News_Aggregated_Fields = {
    __typename?: 'news_aggregated_fields';
    id: Maybe<Scalars['Float']>;
    latest_news_id: Maybe<Scalars['Float']>;
};

export type News_Filter = {
    _and: InputMaybe<Array<InputMaybe<News_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<News_Filter>>>;
    body: InputMaybe<String_Filter_Operators>;
    category: InputMaybe<String_Filter_Operators>;
    date: InputMaybe<Date_Filter_Operators>;
    date_func: InputMaybe<Datetime_Function_Filter_Operators>;
    excerpt: InputMaybe<String_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    image: InputMaybe<Directus_Files_Filter>;
    latest_news_id: InputMaybe<Contentblock_Latest_News_Filter>;
    slug: InputMaybe<String_Filter_Operators>;
    title: InputMaybe<String_Filter_Operators>;
};

export type Number_Filter_Operators = {
    _between: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _eq: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _gt: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _gte: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _in: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _lt: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _lte: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _nbetween: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _neq: InputMaybe<Scalars['GraphQLStringOrFloat']>;
    _nin: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']>>>;
    _nnull: InputMaybe<Scalars['Boolean']>;
    _null: InputMaybe<Scalars['Boolean']>;
};

export type Pages = {
    __typename?: 'pages';
    content: Maybe<Array<Maybe<Pages_Content>>>;
    content_func: Maybe<Count_Functions>;
    date_created: Maybe<Scalars['Date']>;
    date_created_func: Maybe<Datetime_Functions>;
    date_updated: Maybe<Scalars['Date']>;
    date_updated_func: Maybe<Datetime_Functions>;
    id: Scalars['ID'];
    slug: Maybe<Scalars['String']>;
    status: Maybe<Scalars['String']>;
    user_created: Maybe<Scalars['String']>;
    user_updated: Maybe<Scalars['String']>;
};


export type PagesContentArgs = {
    filter: InputMaybe<Pages_Content_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Pages_Aggregated = {
    __typename?: 'pages_aggregated';
    avg: Maybe<Pages_Aggregated_Fields>;
    avgDistinct: Maybe<Pages_Aggregated_Fields>;
    count: Maybe<Pages_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Pages_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Pages_Aggregated_Fields>;
    min: Maybe<Pages_Aggregated_Fields>;
    sum: Maybe<Pages_Aggregated_Fields>;
    sumDistinct: Maybe<Pages_Aggregated_Fields>;
};

export type Pages_Aggregated_Count = {
    __typename?: 'pages_aggregated_count';
    content: Maybe<Scalars['Int']>;
    date_created: Maybe<Scalars['Int']>;
    date_updated: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    slug: Maybe<Scalars['Int']>;
    status: Maybe<Scalars['Int']>;
    user_created: Maybe<Scalars['Int']>;
    user_updated: Maybe<Scalars['Int']>;
};

export type Pages_Aggregated_Fields = {
    __typename?: 'pages_aggregated_fields';
    id: Maybe<Scalars['Float']>;
};

export type Pages_Content = {
    __typename?: 'pages_content';
    collection: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    item: Maybe<Pages_Content_Item_Union>;
    pages_id: Maybe<Pages>;
    sort: Maybe<Scalars['Int']>;
};


export type Pages_ContentPages_IdArgs = {
    filter: InputMaybe<Pages_Filter>;
    limit: InputMaybe<Scalars['Int']>;
    offset: InputMaybe<Scalars['Int']>;
    page: InputMaybe<Scalars['Int']>;
    search: InputMaybe<Scalars['String']>;
    sort: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Pages_Content_Aggregated = {
    __typename?: 'pages_content_aggregated';
    avg: Maybe<Pages_Content_Aggregated_Fields>;
    avgDistinct: Maybe<Pages_Content_Aggregated_Fields>;
    count: Maybe<Pages_Content_Aggregated_Count>;
    countAll: Maybe<Scalars['Int']>;
    countDistinct: Maybe<Pages_Content_Aggregated_Count>;
    group: Maybe<Scalars['JSON']>;
    max: Maybe<Pages_Content_Aggregated_Fields>;
    min: Maybe<Pages_Content_Aggregated_Fields>;
    sum: Maybe<Pages_Content_Aggregated_Fields>;
    sumDistinct: Maybe<Pages_Content_Aggregated_Fields>;
};

export type Pages_Content_Aggregated_Count = {
    __typename?: 'pages_content_aggregated_count';
    collection: Maybe<Scalars['Int']>;
    id: Maybe<Scalars['Int']>;
    item: Maybe<Scalars['Int']>;
    pages_id: Maybe<Scalars['Int']>;
    sort: Maybe<Scalars['Int']>;
};

export type Pages_Content_Aggregated_Fields = {
    __typename?: 'pages_content_aggregated_fields';
    id: Maybe<Scalars['Float']>;
    pages_id: Maybe<Scalars['Float']>;
    sort: Maybe<Scalars['Float']>;
};

export type Pages_Content_Filter = {
    _and: InputMaybe<Array<InputMaybe<Pages_Content_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Pages_Content_Filter>>>;
    collection: InputMaybe<String_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    item__cases: InputMaybe<Cases_Filter>;
    item__contentblock_hero: InputMaybe<Contentblock_Hero_Filter>;
    item__contentblock_introduction: InputMaybe<Contentblock_Introduction_Filter>;
    item__contentblock_latest_news: InputMaybe<Contentblock_Latest_News_Filter>;
    item__contentblock_selected_cases: InputMaybe<Contentblock_Selected_Cases_Filter>;
    item__contentblock_selected_services: InputMaybe<Contentblock_Selected_Services_Filter>;
    item__contentblock_showcase: InputMaybe<Contentblock_Showcase_Filter>;
    pages_id: InputMaybe<Pages_Filter>;
    sort: InputMaybe<Number_Filter_Operators>;
};

export type Pages_Content_Item_Union = Cases | Contentblock_Hero | Contentblock_Introduction | Contentblock_Latest_News | Contentblock_Selected_Cases | Contentblock_Selected_Services | Contentblock_Showcase;

export type Pages_Filter = {
    _and: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
    _or: InputMaybe<Array<InputMaybe<Pages_Filter>>>;
    content: InputMaybe<Pages_Content_Filter>;
    content_func: InputMaybe<Count_Function_Filter_Operators>;
    date_created: InputMaybe<Date_Filter_Operators>;
    date_created_func: InputMaybe<Datetime_Function_Filter_Operators>;
    date_updated: InputMaybe<Date_Filter_Operators>;
    date_updated_func: InputMaybe<Datetime_Function_Filter_Operators>;
    id: InputMaybe<Number_Filter_Operators>;
    slug: InputMaybe<String_Filter_Operators>;
    status: InputMaybe<String_Filter_Operators>;
    user_created: InputMaybe<String_Filter_Operators>;
    user_updated: InputMaybe<String_Filter_Operators>;
};

export type String_Filter_Operators = {
    _contains: InputMaybe<Scalars['String']>;
    _empty: InputMaybe<Scalars['Boolean']>;
    _ends_with: InputMaybe<Scalars['String']>;
    _eq: InputMaybe<Scalars['String']>;
    _icontains: InputMaybe<Scalars['String']>;
    _in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _ncontains: InputMaybe<Scalars['String']>;
    _nempty: InputMaybe<Scalars['Boolean']>;
    _nends_with: InputMaybe<Scalars['String']>;
    _neq: InputMaybe<Scalars['String']>;
    _nin: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
    _nnull: InputMaybe<Scalars['Boolean']>;
    _nstarts_with: InputMaybe<Scalars['String']>;
    _null: InputMaybe<Scalars['Boolean']>;
    _starts_with: InputMaybe<Scalars['String']>;
};
