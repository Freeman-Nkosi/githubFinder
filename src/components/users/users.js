import React,{useContext}from 'react';
import UserItem from './userItem';
import Loader from '../layout/loader';
import GithubContext from '../../context/github/githubContext'
export  const Users = () => {
    const githubConext=useContext(GithubContext);
    const {loading,users} = githubConext;
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


export default Users;