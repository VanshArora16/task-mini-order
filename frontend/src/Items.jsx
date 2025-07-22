import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
const Items = () => {
    

    return (
        <div>
            <h1 className="Heading">Add Items to Cart</h1>
            <Grid container  spacing={2} size={3}>
            {ActionAreaCard()}
            {ActionAreaCard()}
            {ActionAreaCard()}
            {ActionAreaCard()}
            {ActionAreaCard()}
            {ActionAreaCard()}
            </Grid>
        </div>
    );
};
function ActionAreaCard() {
    const AddToCard = () => {
        
    } 
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/pencil.png"
                    alt="PRODUCT IMAGE"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Pencil
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                    >
                        price $5
                    </Typography>
                    <button type="button" onClick={AddToCard}>
                        Add to Cart
                    </button>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
export default Items;
