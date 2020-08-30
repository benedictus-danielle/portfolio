import React from "react";
import {ICreation} from "../../interfaces/Interface";
import {Card} from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import {Link} from "react-router-dom";

interface IProps{
    creation:ICreation
}

export function CreationCard(props:IProps){
    return (
        <Link to={`/creations/${props.creation.id}`}>
            <Card className="bg-light text-dark m-4 text-justify">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.creation.title}
                        image={`/assets/creation/${props.creation.thumbnail}`}
                        title="Click to learn more"
                        style={{height:'50%', backgroundColor:`${'white' ?? props.creation.thumbnail === '000.png'}`}}
                    />
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            {props.creation.title}
                        </Typography>
                        <Typography variant="body2" component="p">
                            {props.creation.description.substr(0, 70)}
                            {props.creation.description.length > 70 ? "..." : ""}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        </Link>

    )
}