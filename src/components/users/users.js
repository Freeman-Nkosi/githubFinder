import React from 'react'
import UserItem from './userItem'
import Loader from '../layout/loader'
export  const users = ({users,loading}) => {
console.log("Loading ",loading)
    if(loading){
return(<div><Loader/> </div>)
    }
    else{
        return (
            <div style={userStyle} >
              {
                  users.map(user=>
    <UserItem key={user.id} user={user}/>
                  )
              }
            </div>
        )
}
  
} 
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3,1fr)',
    gridGap:'1rem'
}


export default users;