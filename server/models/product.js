
const products = [
    {
        "id": "1",
        "name": "iPhone 13 Pro",
        "price": 999.99,
        "stock": 7,
        "image": `http://localhost:3000/images/apple.png`
    },
    {
        "id": "2",
        "name": "Samsung Galaxy S22",
        "price": 799.99,
        "stock": 10,
        "image": `http://localhost:3000/images/samsung.png`

    },
    {
        "id": "3",
        "name": "Huawei P30 Pro",
        "price": 619.99,
        "stock": 12,
        "image": `http://localhost:3000/images/huawei.png`

    },
    {
        "id": "4",
        "name": "Xiaomi 12 Pro",
        "price": 809.99,
        "stock": 17,
        "image": `http://localhost:3000/images/xiaomi.png`
    },
]


module.exports = class Product {

    constructor(id, name, price, image, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    static getAll() {
        return products;
    }

    static getById(id) {
        const index = products.findIndex((prod) => prod.id == id);

        if (index > -1) {
            return products[index];
        } else {
            throw new Error("Product not found!");
        }
    }

    update() {
        const productIndex = products.findIndex(s => s.id == this.id);
        if (productIndex > -1) {
            products.splice(productIndex, 1, this);
        } else {
            throw new Error("Product not found!");
        }
    }
}