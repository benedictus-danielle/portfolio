// @flow
import * as React from 'react';
import "./About.scss";

type Props = {
    
};
type State = {
    
};

export class About extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <p>Who am i?</p>
                <p>
                    My name is Benedictus Danielle. Currently I am a College Student at
                    Bina Nusantara University, taking a major on Cyber Security. My interest are in
                    server administration and website backend development and I also spent my time
                    researching for frontend development too.
                </p>
                <div id="hobbies">
                    <div>Hobbies:</div>
                    <ul>
                        <li>Making things that useful for me and others</li>
                        <li>Reading things</li>
                        <li>Code of course</li>
                        <li>Researching for new things</li>
                        <li>Cyber security</li>
                    </ul>
                </div>
                <div id="ide">
                    <div>Some IDEs that I already use:</div>
                    <ul>
                        <li>Android Studio</li>
                        <li>Dev-C++</li>
                        <li>Visual studio code</li>
                        <li>Visual studio</li>
                        <li>WebStorm</li>
                        <li>PHPStorm</li>
                        <li>GoLand</li>
                        <li>PyCharm</li>
                        <li>NetBeans</li>
                        <li>Sublime Text 3</li>
                    </ul>
                </div>
            </div>
        );
    };
};