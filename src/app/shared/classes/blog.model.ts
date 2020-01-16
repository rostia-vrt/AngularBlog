import { IBlog, IUser } from 'src/app/shared/interfaces/blog.interface';

export class Blog implements IBlog {
    constructor(
        public id: number,
        public title: string,
        public text: string,
        public author: string,
        public comments?: Array<any>
    ) {}
}
export class User implements IUser {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public password: string
    ) {}
}
