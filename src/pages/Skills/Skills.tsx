// @flow
import "./Skills.scss";
import SkillsCard from "../../components/SkillsCard/SkillsCard";
import axios from 'axios'

import React, {Component} from 'react';
import {CircularProgress} from "@material-ui/core";

interface ISkillDetail {
    skill_detail_id: string,
    language: {
        id: string,
        name: string,
        image: string
    },
    skill: {
        id: string,
        type: string
    },
    hovered: boolean
}

interface IState {
    items: {
        frontend: Array<ISkillDetail>,
        backend: Array<ISkillDetail>,
        others: Array<ISkillDetail>
    }
}

export class Skills extends Component {
    state: IState = {
        items: {
            frontend: [],
            backend: [],
            others: []
        }
    }

    async fetchData() {
        const promise = await axios.get('http://192.168.100.10:8000/api/portfolio/skill-detail')
        const result = await promise.data
        this.setState(state => ({
            items: {
                frontend: [...result.filter((value: ISkillDetail) => {
                    return value.skill.type.toLowerCase() === "frontend"
                })],
                backend: [...result.filter((value: ISkillDetail) => {
                    return value.skill.type.toLowerCase() === "backend"
                })],
                others: [...result.filter((value: ISkillDetail) => {
                    return value.skill.type.toLowerCase() === "others"
                })]
            }
        }))
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        let contentFrontend;
        let contentBackend;
        let contentOthers;
        if (this.state.items.frontend.length === 0) {
            contentFrontend = <CircularProgress/>
        } else {
            contentFrontend = this.state.items.frontend.map((value, index) => {
                return (
                    <SkillsCard
                        key={index}
                        text={value.language.name}
                        image={`frontend/${value.language.image}`}/>
                )
            })
        }
        if (this.state.items.backend.length === 0) {
            contentBackend = <CircularProgress/>
        } else {
            contentBackend = this.state.items.backend.map((value, index) => {
                return (
                    <SkillsCard
                        key={index}
                        text={value.language.name}
                        image={`backend/${value.language.image}`}/>

                )
            })
        }
        if (this.state.items.others.length === 0) {
            contentOthers = <CircularProgress/>
        } else {
            contentOthers = this.state.items.others.map((value, index) => {
                return (
                    <SkillsCard
                        key={index}
                        text={value.language.name}
                        image={`others/${value.language.image}`}/>
                )
            })
        }
        return (
            <div id="skills">
                <div>
                    <h3 className="text-dark">Frontend</h3>
                    <div>
                        {contentFrontend}
                    </div>
                </div>
                <div>
                    <h3 className="text-dark">Backend</h3>
                    <div>
                        {contentBackend}
                    </div>
                </div>
                <div>
                    <h3 className="text-dark">Others</h3>
                    <div>
                        {contentOthers}
                    </div>
                </div>
            </div>
        );
    }
}