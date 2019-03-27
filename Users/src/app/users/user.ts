//This is the Model
export class User {
    name:string;
    createdAt: Date;
    constructor(name)
    {
        this.name = name;
        this.createdAt = new Date;
    }
}
