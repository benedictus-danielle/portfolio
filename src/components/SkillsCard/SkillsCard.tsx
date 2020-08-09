import React, {Component} from 'react';
import Card from "@material-ui/core/Card";
import "./SkillsCard.scss";

class SkillsCard extends Component<{
    image:string,
    text:string
},{}> {
    render() {
        return (
            <Card
                className="p-4 d-flex flex-column align-items-center bg-light skill-card mt-3"
            >
                <img src={`/assets/skills/${this.props.image}.svg`} alt=""/>
                <p>{this.props.text}</p>
            </Card>
        );
    }
}

export default SkillsCard;