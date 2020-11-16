import './AddPost.scss';
import { Component } from "react";
import Avatar from '../Avatar/Avatar';
import TextField from '@material-ui/core/TextField';


class AddPost extends Component {
    render() {
        return (
            <div className="addPostContainer">
                <Avatar />
                <div className="postForm">
                    <form noValidate autoComplete="off">
                        <TextField
                            id="filled-textarea"
                            label="Say Something"
                            placeholder="Say Something"
                            multiline
                            variant="outlined"
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPost;