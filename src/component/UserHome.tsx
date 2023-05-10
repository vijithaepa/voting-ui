import React, {useEffect, useState} from "react";
import ContainerService from "@/services/ContainerService";

const UserHome = () => {
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        let ignore = false;
        setGreeting('')
        // ContainerService.getUserGreeting()
        //     .then(res => {
        //         // if (!ignore) {
        //             setGreeting(res)
        //         // }
        //     })
        return () => {
            ignore = true;
        }

    },[]);

    return (
        <div>
            <p>Heading</p>
            This is what user say : {greeting}
        </div>
    )
}

export default UserHome;