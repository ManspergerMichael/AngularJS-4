export class Product {
    name:String;
    description:String;
    price:number;
    quantity:number;
    date_created: Date;
    date_updated: Date;

    constructor(name, description, price, quantity)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
        this.date_created = new Date;
        this.date_updated = new Date;
    };
    
    

}
