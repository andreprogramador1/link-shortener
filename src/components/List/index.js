import React, {Fragment} from 'react'

export const List = ({ data }) => {
  console.log(data)
  return(
    
    <ul >
    {data && data.map((link,i) => (
      <Fragment key={i}>
          <li>{link.result.short_link}</li>
          <li>{link.result.original_link}</li>
      </Fragment>
   ))}
   </ul>
   
  );
}