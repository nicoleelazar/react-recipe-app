
import React from 'react'

export const Alert = ({alert, query}) => {
    return (
        <div>
            {alert !== "" ? 
                <div className="alert-msg">{alert}</div> :
                <div className="alert-msg">Showing results for "{query}"</div>
            }
             
        </div>
    )
}

export default Alert