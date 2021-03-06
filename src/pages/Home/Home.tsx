// @flow
import * as React from 'react';
import './Home.scss';
import Slide from "@material-ui/core/Slide";

type Props = {
    
};
type State = {
    
};

export class Home extends React.Component<Props, State> {
    render() {
        return (
            <Slide in={true} timeout={700} style={{zIndex:1}}>
                <div className="d-grid bg-transparent">
                    <div className="text-left">
                        <div>
                            <p className="text-dark">Hi, I'm Benedictus Danielle</p>
                            <p className="text-dark">I'm a laboratory assistant at Binus University</p>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/me.jpg" alt=""/>
                    </div>
                </div>
            </Slide>

        );
    };
}