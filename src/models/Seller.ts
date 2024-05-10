export default class Seller {
    constructor(
        public username:string,
        public role:string,
        public password?:string,
        public city?:string,
        public birthyear?:number,
        public id?:number
    ) {}
}

