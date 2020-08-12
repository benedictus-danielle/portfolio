import React, {Component} from 'react';
import "./Creations.scss";
import axios from 'axios'
import {ICreation} from "../../interfaces/Interface";
import {CreationCard} from "../../components/CreationCard/CreationCard";

class Creations extends Component<{},{creation:Array<ICreation>}> {
    state = {
        creation:[]
    }
    async fetchData(){
        const promise = await axios.get("http://192.168.100.10:8000/api/portfolio/creations")
        this.setState({creation:promise.data})
    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <div id="creations-container">
                {
                    this.state.creation.map((value,index) => {
                        return <CreationCard key={index} creation={value}/>
                    })
                }
            </div>
        );
    }
}

export default Creations;