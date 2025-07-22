import express from "express";
import itemsRoute from "./routes/items.route";
import { CONNECTION } from "./lib/utils";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(itemsRoute)

app.listen(PORT, ()=>{
    console.log(`server started on ${PORT}`)
    CONNECTION()
})