import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import "./SkillsCard.scss";
import {Grow} from "@material-ui/core";
import Zoom from "@material-ui/core/Zoom";

function SkillsCard(props: { image: string, text: string }) {
    const [zoom] = useState(false)

    return (
        <Grow
            in={true}
            timeout={1500}>
            <Zoom
                in={zoom}
                timeout={1300}
            >
                <Card
                    className="p-4 d-flex flex-column align-items-center bg-light skill-card mt-3"

                >
                    <img src={`/assets/skills/${props.image}.svg`} alt="" draggable={false}/>

                    <p className="text-dark" style={{userSelect:"none"}}>{props.text}</p>

                </Card>
            </Zoom>

        </Grow>

    );
}

export default SkillsCard;