import React, { useEffect, useState } from 'react';

const User = (props) => {
    const { username } = props;

    console.log(`username`, username);
    return <section>{<h1>{username}</h1>}</section>;
};

export default User;
