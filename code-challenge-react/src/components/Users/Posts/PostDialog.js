import React from 'react';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Comment from "./Comment";

function PostDialog({commentsList, post, onClose}) {
    return (
    <Dialog onClose={onClose} classes={{ paper: "postDialogContainer"}} fullWidth open={true}>
        {onClose ? (
            <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: "grey",
            }}
            >
            <CloseIcon />
            </IconButton>
        ) : null}
        <Typography variant="h5" gutterBottom>
            {post?.title.charAt(0).toUpperCase() + post?.title.slice(1)}
        </Typography>
        <Typography gutterBottom>
            {post?.body.charAt(0).toUpperCase() + post?.body.slice(1)}
        </Typography>
        <div className="commentContainer">
            <Typography classes={{ root: "title" }} variant="h6">
                Comentarios:
            </Typography>
            <div className="commentContent">
                {commentsList.map((comment, index)=><Comment key={index} comment={comment}/>)}
            </div>
        </div>
    </Dialog>
    )
};
export default PostDialog;
