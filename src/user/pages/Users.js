import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id:'u1',
            name:'Sean',
            image:
                'https://scaleablethinking.files.wordpress.com/2021/12/498ba7d2-fd7c-46b5-af73-980efd3903e9_1_201_a.jpeg',
            places: 3
        }
    ];

    return <UsersList items={USERS}/>;
};

export default Users;