import React, { useCallback } from 'react';
import { Link } from "react-router-dom";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { getPostByUsers } from "../../redux/slice";

function UserCard({user}) {
    const dispatch = useAppDispatch();

    const isFetchingPost = useAppSelector((state) => state.blog.isFetchingPost);

    const handlePosts = useCallback(() => {
        dispatch(getPostByUsers(user.id));
    },[user, dispatch]);

    return (
        <Card sx={{ minWidth: 230, height: 400 }}>
            <CardContent sx={{ height: 320 }}>
                <Typography sx={{ fontSize: 14, marginBottom: 3 }} color="text.secondary" gutterBottom>
                    {`@${user.username}`}
                </Typography>
                <Typography variant="h5" component="div">
                    {user.name}
                </Typography>
                <Typography sx={{ mb: 1.5, marginBottom: 2 }} color="text.secondary">
                    {user.email}
                </Typography>
                <Typography variant="body2">
                    {`Website: ${user.website}`}
                    <br />
                    {`Telefono: ${user.phone}`}
                    <br />
                    {`Empresa: ${user.company.name}`}
                </Typography>
                <Typography sx={{ mb: 1.5, marginTop: 2 }} color="text.secondary">
                    {user.company.catchPhrase}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/posts/${user.id}`}>
                    <Button 
                        disabled={isFetchingPost} 
                        onClick={handlePosts} 
                        size="small"
                    >
                        posts
                    </Button>
                </Link>
                <Button size="small">albumes</Button>
                <Button size="small">tareas</Button>
            </CardActions>
        </Card>
      );
};

export default UserCard;