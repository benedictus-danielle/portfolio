// @flow
import * as React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from "@material-ui/icons/GitHub";
import "./MyFooter.scss";

type Props = {
    
};
type State = {
    
};

export class MyFooter extends React.Component<Props, State> {
    render() {
        return (
            <footer className="bg-light py-3" id="footer">
                <div>
                    <a href="https://www.linkedin.com/in/benedictus-danielle-b8144b178/"><LinkedInIcon/></a>
                    <a href="https://github.com/benedictus-danielle"><GithubIcon/></a>
                </div>
                <div>
                    Copyright &copy; {"2020" + (new Date().getFullYear() !== 2020 ? `- ${new Date().getFullYear()}` : "")} Benedictus Danielle
                </div>
            </footer>
        );
    };
}