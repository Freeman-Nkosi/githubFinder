import React from 'react'
import {Link} from 'react-router-dom'
export const userItem = ({user:{avatar_url,login,url}}) => {
   
    return (
        <div className="card text-center">
            <img src={avatar_url} alt="" className="round-img" style={{width:'60px'}}/>
            <h3>{login}</h3>
            <div>
                

                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
            
        </div>
    )
}
 
export default userItem;