export interface IBlog {
    id: number;
    title: string;
    text: string;
    author: string;
    comments?: Array<any>;
}
export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
}
