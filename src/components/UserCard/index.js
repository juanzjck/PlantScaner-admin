import React from 'react'
import {WrappIcons,LinkWrapp,Wrapp,P,Span,WrappDate,WrappIcon} from './styles'
import {IoIosClock} from 'react-icons/io'
import {BsFillPersonDashFill, BsFillPersonLinesFill} from 'react-icons/bs'
export const UserCard = ({_id,data,handleTryToDelete, users}) =>{
    const handleDelete = () =>{
        handleTryToDelete(data._id)

    }
    return(
       
            <Wrapp>
                <LinkWrapp to={`/EditUser/${data._id}`}>
                    <h2>
                        {data.firstName} {data.lastName}
                    </h2>
                    <P>{data.email}</P>
      
                </LinkWrapp>
                {users > 1 &&
                 <WrappIcons>
                    <WrappIcon>
                        <BsFillPersonDashFill onClick={handleDelete} size={20} color="red"/>
                    </WrappIcon>
                 </WrappIcons>
                }
               
          </Wrapp>
 
     )
}