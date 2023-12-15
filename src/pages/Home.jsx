import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Add from './Add'
import View from './View'
import Category from './Category'
import { Link } from 'react-router-dom'


function Home() {
  const [serverRes,setserverRes]=useState({})

  // function definition
  const handleresponse=(res)=>{

    setserverRes(res)

  }
  return (
    <>
    <div className='container-fluid'>

    <Link style={{textDecoration:'none',fontSize:'30px',color:'blue'}} to={'/watchhistory'}>Watch History</Link>
<Row>
{/* add componet */}
<Col lg={1}>
<Add/>

</Col>
{/* view componet */}
<Col lg={7}>
  <View/>
</Col>


{/* category componet */}
<Col lg={4}>
  <Category/>
</Col>

</Row>

    </div>
    </>
  )
}

export default Home