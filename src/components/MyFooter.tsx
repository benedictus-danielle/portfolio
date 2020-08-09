// @flow
import * as React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";

type Props = {
    
};
type State = {
    
};

export class MyFooter extends React.Component<Props, State> {
    render() {
        return (
            <div>
                <div>
                    <a href="https://www.linkedin.com/in/benedictus-danielle-b8144b178/"><LinkedInIcon/></a>
                    <a href="https://github.com/benedictus-danielle"><GithubIcon/></a>
                    <a href="https://www.instagram.com/lord.cancer22/"><InstagramIcon/></a>
                    <a href="https://www.facebook.com/lord.cancer"><FacebookIcon/></a>
                </div>
                <div>
                    Copyright &copy; Benedictus Danielle
                </div>
            </div>
        );
    };
}