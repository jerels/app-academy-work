import React from 'react';

const Profile = ({users, match: {params}}) => {
    const user = users[params.userId];

    return (
    <div>
        The user's id is {params.userId} and the user's name is {user.name}.
    </div>
    )
}

export default Profile;