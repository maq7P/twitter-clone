export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER'
}
export interface Tweet {
    _id: string
    text: string
    user: {
        username: string
        fullname: string
        avatarUrl: string
    },
}
export interface TweetsState {
    items: Tweet[],
    LoadingState: LoadingState
}