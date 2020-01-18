import React from 'react';

const AddBlog = (props) => {
    return (
        <form onSubmit={props.handleNew}>
            <h3>New Blog</h3>
            Title:<input name="title" value={props.title} onChange={props.handleTitle}></input><br/>
            Author:<input name="author" value={props.author} onChange={props.handleAuthor}></input><br/>
            Url:<input name="url" value={props.url} onChange={props.handleUrl}></input><br/>
            <button type="Submit">Add</button>
        </form>
    );
};

export default AddBlog;