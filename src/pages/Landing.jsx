import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function Landing() {

  // function definition

  // redirect from one page to another page we can use useNavigate hook

  const navigate=useNavigate()

  const handleNavigate=()=>{
      navigate('/home')
  }


  return (
    <div>
        <Row className='align-items-center'>

            <Col></Col>

            <Col lg={6}>
            <h1>WelcomE tO GaanA.COM</h1>

            <p style={{textAlign:'justify'}}>Where user can use there favorite videos . User can upload any Youtube videos by copy paste their URL in to GAANa.COM will allow to add and remove their uploaded videos and also arange them in different catogories by drag and drop it is free try it now</p>

            <button onClick={handleNavigate} className='btn btn-success'>Click here to know more</button>

            </Col>
           
            <Col lg={5}>
            <img className='img-fluid' src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dmlkZW9zfGVufDB8fDB8fHww" alt="no image" />
            </Col>

        </Row>
    </div>
  )
}

export default Landing
