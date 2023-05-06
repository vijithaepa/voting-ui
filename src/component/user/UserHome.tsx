import React, {useEffect, useState} from "react";
import {getUserGreeting} from "../../services/ContainerService";


const UserHome = () => {
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        // let ignore = false;
        setGreeting('')
        // getUserGreeting()
        //     .then(res => {
        //         // if (!ignore) {
        //             setGreeting(res)
        //         // }
        //     })
        // return () => {
        //     ignore = true;
        // }

    },[]);

    return (
        <div>
            This is what user say : {greeting}
        </div>
    )
}

export default UserHome;