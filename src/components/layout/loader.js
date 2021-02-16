import React from 'react'
import spinner from './spinner.gif'
export const loader = () => {
    return (
        <div>
            <img src={spinner} alt=""/>
        </div>
    )
}

export default loader