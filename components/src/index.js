import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Tristan"
                timeAgo="Today at 4:45PM"
                blogContent="Nice blog post!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Joshua"
                timeAgo="Today at 6:45PM"
                blogContent="I can make one too!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Kia"
                timeAgo="Today at 3:15PM"
                blogContent="Wow this is fun!"
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
