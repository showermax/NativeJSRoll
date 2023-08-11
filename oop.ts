class Good {
    private _id;
    private _category;
    private _name;
    private _description;
    private _price;
    constructor(price:number, name:string, category:string,description:string) {
        this._price = price
        this._price = name
        this._price = category
        this._price = description
        this._id = Math.random()
    }

    get category() {
        return this._category;
    }

    set category(value) {
        this._category = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}

const Philips = new Good(500,'Philips255', 'Monitors', 'LED 24\'' )
console.log(Philips)

class DiscountGood extends Good {
    constructor(name, discount) {
        super(name);
    }
}