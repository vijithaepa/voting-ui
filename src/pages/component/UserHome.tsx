import React, {useEffect, useState} from "react";
import ContainerService from "@/pages/services/ContainerService";

const UserHome = () => {
    const [greeting, setGreeting] = useState('');
    useEffect(() => {
        return () => {
            new ContainerService().getUserGreeting()
                .then(res => {
                    // setGreeting(res)
                })
        }

    });

    return (
        <div>
            This is what user say : {greeting}
        </div>
    )
}

export default UserHome;