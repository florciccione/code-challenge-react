import React from 'react';

import Typography from '@mui/material/Typography';

function Comment({comment}) {
    return (
    <>
        <Typography classes={{ root: "titleBold" }} variant="subtitle2">
            {`${comment?.email} - ${comment?.name.charAt(0).toUpperCase() + comment?.name.slice(1)}`}
        </Typography>
        <Typography gutterBottom classes={{ root: "comment" }} variant="subtitle2" >
            {comment?.body.charAt(0).toUpperCase() + comment?.body.slice(1)}
        </Typography>
    </>
    )
};
export default Comment;

