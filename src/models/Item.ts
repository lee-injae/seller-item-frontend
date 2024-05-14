export default class Item {
    constructor (
        public id?:number,
        public itemName?:string,
        public description?:string,
        public yearUsed?: number,
        public yearProduced?: number,
        public likeNew?:boolean
    ) {}
}



