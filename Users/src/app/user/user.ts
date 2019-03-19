export class User {
    name: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(name){
        this.name = name;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
