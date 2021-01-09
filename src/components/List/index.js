import React, {Fragment} from 'react'
import {Container} from './style'

export const List = ({ data }) => {
  console.log(data)
  return(
    
    <Container>
    <ul >
    {data && data.map((link,i) => (
      <Fragment key={i}>
          <li style={{ color: '#ccc' }}>{link.result.short_link}</li>
          <hr/>
          <li style={{ color: 'turquoise' }}>{link.result.original_link}</li>
      </Fragment>
   ))}
   </ul>
   </Container>
  );
}