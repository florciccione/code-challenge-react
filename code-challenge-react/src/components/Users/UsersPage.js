import React, { useEffect } from 'react';
import { getUsers } from "../../redux/slice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

import UserCard from "./UserCard";

function UsersPage() {
    const dispatch = useAppDispatch();
    const isFetchingUsers = useAppSelector((state) => state.blog.isFetchingUsers);
    const usersList = useAppSelector((state) => state.blog.usersList);

    useEffect(()=> {
        dispatch(getUsers());
    },[dispatch])

    return (
        <>
            <Typography sx={{ marginBottom: 5 }} align="center" variant="h4" component="div">
                Florencia Ciccione Blog
            </Typography>
            <Grid 
                container 
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={{ xs: 2, md: 3 }} 
                columns={{ xs: 4, sm: 8, md: 12, lg: 12, xl: 12 }}
            >
            {isFetchingUsers ? (
                <CircularProgress/>
            ) : ( 
                usersList.map((user,index) => (
                    <Grid item key={index} xs={4} sm={4} md={4} lg={3}>
                        <UserCard user={user}/>
                    </Grid>
                ))
            )}
            </Grid>
        </>
    );
};

export default UsersPage;