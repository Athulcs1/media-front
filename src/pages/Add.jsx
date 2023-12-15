import React from 'react'
import { PlusCircle, Youtube } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addVideo } from '../service/allapi';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Add() {
  const [uploadData, setuploadData] = useState({
    id: "", caption: "", thumbnail: "", url: ""
  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // set input fuction defintion 


  const setInput = (e) => {


    const { name, value } = e.target
    setuploadData({ ...uploadData, [name]: value })


    // setuploadData(e.target.value)

  }

  console.log(uploadData);

  // extract youtube url

  const extractUrl = (e) => {
    // console.log(e.target.value);

    let youtubeUrl = e.target.value

    if (youtubeUrl.includes("v=")) {
      let index = youtubeUrl.indexOf("v=")
      console.log(index);


      let videoUrl = youtubeUrl.substring(index + 2, index + 13)
      console.log(videoUrl);

      let videoData = uploadData

      videoData.url = `https://www.youtube.com/embed/${videoUrl}`
      setuploadData(videoData)
    }
    console.log(uploadData);

  }

  // DEFINE handle
  const handleAdd = async () => {

    const { id, caption, thumbnail, url } = uploadData

    if (!id || !caption || !thumbnail || !url) {
      toast("please fill the form completely")
    }
    else {


      let response = await addVideo(uploadData)
      console.log(response.data);

      if (response.status >= 200 && response.status < 300) {
        console.log(response.data);
        setShow(false)
        toast.success("video uploaded successfully!!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })

      }

      else {
        toast("please provide a unique id!!!");
      }

    }

  }

  // Youtube original url


  return (
    <>
      <div onClick={handleShow} className='btn'>
        <PlusCircle color='green' size={90} />
      </div>
      {/* models */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> upload video details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* id */}
            <FloatingLabel className='mb-3' controlId="floatingid" label="id">
              <Form.Control name='id' onChange={setInput} type="text" placeholder="uploading video id" />
            </FloatingLabel>

            {/* caption */}

            <FloatingLabel className='mb-3' controlId="floatingcaption" label="uploading video caption">
              <Form.Control name='caption' onChange={setInput} type="text" placeholder="uploading video caption" />
            </FloatingLabel>

            {/* image url */}
            <FloatingLabel className='mb-3' controlId="floatingimage" label="video cover url">
              <Form.Control name='thumbnail' onChange={setInput} type="text" placeholder="video cover image url" />
            </FloatingLabel>

            {/* video links */}
            <FloatingLabel className='mb-3' controlId="floatinglink" label="uploading video link">
              <Form.Control name='url' onChange={extractUrl} type="text" placeholder="video link" />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Add