import React from "react";

const User = ({user}) => {
    return ( 
    <tr>
        <td>Firstname
            <div>{user.firstName}</div>
        </td>
        <td>Lastname
        <div>{user.lastName}</div>
        </td>
    </tr>)

};
 export default User;