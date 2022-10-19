import React from 'react'

export default function Alert(props) {
      // to capitalize the first word of success we can do the following.
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

  return (

    // props.alert && something written will be evaluated like if the first value is null then the second data will not be evaluated and if it is true then the later value is returned.
    <div style={{height: "50px"}}>
   { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"> 
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        
    </div>}
    </div>
  )
}
