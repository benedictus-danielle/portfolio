import React, {Component} from 'react';
import {axiosInstance} from '../../../instances/axiosInstance';
import Carousel from "react-bootstrap/cjs/Carousel";
import "./CreationDetail.scss";

interface IScreenshot {
    id:string,
    creation_id:string,
    screenshots:string
}

class CreationDetail extends Component<{
    match:{
        params:{
            id:string
        }
    }
},{
    creation:{
        id:string,
        title:string,
        description:string,
        thumbnail:string,
        url:string,
        screenshots:Array<IScreenshot>
    },
    index:number
}> {
    state = {
        creation:{
            id:"",
            title:"",
            description:"",
            thumbnail:"",
            url:"",
            screenshots:[]
        },
        index:0
    }
    async fetchData(){
        const promise = await Promise.all([
            axiosInstance.get(`/api/portfolio/creations/${this.props.match.params.id}`),
            axiosInstance.get(`/api/portfolio/creation-details?search=${this.props.match.params.id}`)
        ])
        const header = await promise[0].data
        const detail = await promise[1].data
        this.setState({
            creation:{
                id:header.id,
                title:header.title,
                description:header.description,
                thumbnail: header.thumbnail,
                url:header.url,
                screenshots: detail
            }
        })
    }
    componentDidMount() {
        this.fetchData()
    }

    render() {
        const handleSelect = (selectedIndex:number, e:any) => {
            this.setState({
                index:selectedIndex
            })
        };
        return (
            <div className="text-dark" id="creation-detail">
                <Carousel
                    interval={1250}
                    activeIndex={this.state.index}
                    onSelect={handleSelect}
                >
                    {
                        this.state.creation.screenshots.map((value:IScreenshot, index) => {
                            return (
                                <Carousel.Item
                                    key={index}
                                >
                                    <div>
                                        <img src={`/assets/creation/${value.screenshots}`} alt=""/>
                                    </div>

                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <div>
                    <div>
                        <label htmlFor="">Title</label>
                        <label htmlFor="">{this.state.creation.title}</label>
                    </div>
                    <div>
                        <label htmlFor="">Description</label>
                        <label htmlFor="">{this.state.creation.description}</label>
                    </div>
                    <div>
                        <label htmlFor="">Link</label>
                        <label htmlFor="">{this.state.creation.url === "" ? "-" : <a href={`${this.state.creation.url}`} className="btn btn-light">Open website</a>}</label>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreationDetail;