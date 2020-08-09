// @flow
import * as React from 'react';
import "./Skills.scss";
import SkillsCard from "../../components/SkillsCard/SkillsCard";

type Props = {
    
};
type State = {
    
};

export class Skills extends React.Component<Props, State> {

    render() {
        const items = {
            frontend:[
                {
                    image:"react",
                    text:"ReactJS / ReactTS"
                },
                {
                    image:"material-ui",
                    text:"Material UI"
                },
                {
                    image:"vue",
                    text:"Vue"
                },
                {
                    image:"nuxt",
                    text:"Nuxt"
                },
                {
                    image:"vuetify",
                    text:"Vuetify"
                },
                {
                    image:"html5",
                    text:"HTML5"
                },
                {
                    image:"css3",
                    text:"CSS3"
                },
                {
                    image:"sass",
                    text:"SASS"
                },
                {
                    image:"javascript",
                    text:"JavaScript"
                },
                {
                    image:"typescript",
                    text:"TypeScript"
                },
                {
                    image:"bootstrap",
                    text:"Bootstrap"
                },
                {
                    image:"jquery",
                    text:"jQuery"
                }
            ],
            backend:[
                {
                    image:"go",
                    text:"Go"
                },
                {
                    image:"php",
                    text:"PHP"
                },
                {
                    image:"laravel",
                    text:"Laravel"
                },
                {
                    image:"mysql",
                    text:"MySQL"
                },
                {
                    image:"mongodb",
                    text:"MongoDB"
                },
                {
                    image:"firebase",
                    text:"Firebase"
                },
                {
                    image:"mssql",
                    text:"Microsoft SQL Server"
                },
                {
                    image:"dot-net",
                    text:"ASP.NET"
                }
            ],
            others:[
                {
                    image:"python",
                    text:"Python"
                },
                {
                    image:"c++",
                    text:"C/C++"
                },
                {
                    image:"csharp",
                    text:"C#"
                },
                {
                    image:"java",
                    text:"Java"
                },
                {
                    image:"kotlin",
                    text:"Kotlin"
                },
                {
                    image:"android",
                    text:"Android"
                },
                {
                    image:"flutter",
                    text:"Flutter"
                },
                {
                    image:"dart",
                    text:"Dart"
                },
                {
                    image:"git",
                    text:"Git"
                },
                {
                    image:"ubuntu",
                    text:"Ubuntu server"
                },
            ]
        }
        return (
            <div id="skills">
                <div>
                    <h3>Frontend</h3>
                    <div>
                        {items.frontend.map((value,index) => {
                            return(
                                <SkillsCard
                                    key={index}
                                    text={value.text}
                                    image={`frontend/${value.image}`}/>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3>Backend</h3>
                    <div>
                        {items.backend.map((value,index) => {
                            return(
                                <SkillsCard
                                    key={index}
                                    text={value.text}
                                    image={`backend/${value.image}`}/>
                            )
                        })}
                    </div>
                </div>
                <div>
                    <h3>Others</h3>
                    <div>
                        {items.others.map((value,index) => {
                            return(
                                <SkillsCard
                                    key={index}
                                    text={value.text}
                                    image={`others/${value.image}`}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    };
};