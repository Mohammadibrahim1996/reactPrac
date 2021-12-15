import React from 'react';
import {useLocation} from "react-router";

export const NoMatch = () => {
    var location = useLocation();
    console.log(location);

    return (
        <div>
            <h5>
                No Match <code>{location.pathname}</code>
            </h5>
            
        </div>
    )
}
