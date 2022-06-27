import React, { useState, useCallback } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getCommentsByPost } from "../../../redux/slice";

import PostDialog from "./PostDialog";

function Post({post}) {
    const dispatch = useAppDispatch();
    const commentsList = useAppSelector((state) => state.blog.commentsList);
    const [openPostDialog, setOpenPostDialog] = useState(false);

    const handleViewPost = useCallback(() => {
        dispatch(getCommentsByPost(post.id));
        setOpenPostDialog(true);
    },[post.id, dispatch]);

    const handleCloseCommentDialog = useCallback(() => {
        setOpenPostDialog(false);
    },[]);

        return (
            <>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleViewPost}> 
                            <Typography variant="body1">
                                {post?.title.charAt(0).toUpperCase() + post?.title.slice(1)}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>
                {openPostDialog ? (
                    <PostDialog post={post} commentsList={commentsList} onClose={handleCloseCommentDialog}/>
                ) : null}
            </>
        )
    };

export default Post;