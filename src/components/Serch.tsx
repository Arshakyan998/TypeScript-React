import React, { ReactEventHandler } from 'react'

interface Props{
        placeholder:string,
        onChange:ReactEventHandler,
        width:string
}

export const Serch:React.FC <Props>= ({...props}) => {
        return (
                <div style={{width:"100%"}}>
                <input type="text"   {...props} style={{border:'none',fontSize:"55px"}}/>
                        
                </div>
        )
}
