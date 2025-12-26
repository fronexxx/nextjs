import React from 'react';
import {getAllUsers} from "@/service/service.api";
import UserComponent from "@/components/users/UserComponent";

const UsersComponent = async () => {

    const users = await getAllUsers();

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersComponent;
