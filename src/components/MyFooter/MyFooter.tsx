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
                <div className="text-dark">
                    <div>
                        This web is made using <a href="https://reactjs.org/">React</a> & <a href="https://www.djangoproject.com/">Django</a>
                    </div>
                    <div>
                        Icons from <a href="https://simpleicons.org/">Simple Icons</a>
                    </div>
                    <div>
                        Animation were made using <a href="https://material-ui.com/">Material-UI</a>
                    </div>
                    <div>
                        Copyright &copy; {"2020" + (` - ${new Date().getFullYear()}` ?? new Date().getFullYear() !== 2020)} Benedictus Danielle
                    </div>

                </div>
            </footer>
        );
    };
}