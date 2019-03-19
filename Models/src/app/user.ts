//this is the file that is created with the angular cli: ng generate class
export class User {
    name: string 
    dateCreated: Date
    dateUpdated: Date

    constructor(name){
        this.name = name;
        this.dateCreated = new Date();
        this.dateUpdated = new Date();
    }
}

