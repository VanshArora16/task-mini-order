import mongoose from "mongoose";

const itemsSchema = new mongoose.Schema({
    items: {
        type: String,
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
    },
});

const Item = new mongoose.model(Item, itemsSchema);
export default Item;
