import React from 'react'

function TableData(props){
    return( 
        <tbody>
            <tr>
              
                <td><img alt={props.image} src={props.image}/> </td>
                <td>{props.firstname}</td>
                <td>{props.lastname}</td>
                <td><a href={props.emailLink}>{props.email}</a></td>
                <td>{props.nationality}</td>
                <td>{props.country}</td>
                <td>{props.phone}</td>
                <td>{props.mobile}</td>
                <td>{props.username}</td>
            </tr>
        </tbody>
    )
}


export default TableData