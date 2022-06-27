import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { getPostByUsers } from "../../../redux/slice";

import PostList from "./PostList"

function PostsPage() {
    let params = useParams();
    const dispatch = useAppDispatch();
    const usersList = useAppSelector((state) => state.blog.usersList);
    const isFetchingPost = useAppSelector((state) => state.blog.isFetchingPost);
    const postsList = useAppSelector((state) => state.blog.postsList);

    const userId = parseInt(params.userId)
    const userName = usersList && usersList.filter((user) => user.id === userId)[0].name;
    
    useEffect(() => {
        dispatch(getPostByUsers(userId));
    },[userId, dispatch]);

    return (
        <Grid 
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
        >
            <Grid item xs={8} md={6}>
                <Card sx={{ minWidth: 280, padding: 4 }}>
                    <CardContent>
                        <Typography sx={{ marginBottom: 5 }} classes={{ root: "titleBold" }} align="center" variant="h5" component="div">
                            {`Listado de posts de ${userName}`}
                        </Typography>
                        {isFetchingPost ? (
                            <CircularProgress/>
                        ) : ( 
                            postsList.map((post, index)=><PostList key={index} post={post}/>)
                        )}
                    </CardContent>
                    <CardActions sx={{ justifyContent:"center"}}>
                        <Link to={`/`}>
                            <Button size="small">volver</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
};
export default PostsPage;