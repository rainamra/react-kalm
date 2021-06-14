import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert, Row, Image, Col } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"
import { storage } from '../../firebase'
import LoadSpinner from '../loading/LoadSpinner';
import axios from 'axios';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [picture, setPicture] = useState(null);
    const [currentPicture, setCurrentPicture] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);


    function handleSubmit(e) {
      e.preventDefault()
      if (passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError("Passwords do not match")
      }

      const promises = []
      setLoading(true)
      setError("")

      if (emailRef.current.value !== currentUser.email) {
        promises.push(updateEmail(emailRef.current.value))
      }
      if (passwordRef.current.value) {
        promises.push(updatePassword(passwordRef.current.value))
      }
      if (picture !== null) {
        promises.push(uploadToFirebase())
      }

      Promise.all(promises)
        .then(() => {
          history.push("/")
        })
        .catch(() => {
          setError("Failed to update account")
        })
        .finally(() => {
          setLoading(false)
        })
    }

    useEffect(() => {
      axios.get(`api/user/${currentUser.uid}`)
      .then(res => {
        setUsername(res.data.username);
        setName(res.data.name);
        setCurrentPicture(res.data.imgURL);
      }).then(() => {
          setIsLoaded(true)
        })
    }, [])

    const uploadToFirebase = () => {
      if (picture) {
        const storageRef = storage.ref('profile');
        const imageRef = storageRef.child(picture.name);
        imageRef.put(picture)
        .then(() => {
        storage.ref('profile').child(picture.name).getDownloadURL().then(url => {
          const article = {
            name: name,
            username: username,
            email: currentUser.email,
            imgURL: url
          }
          axios.put(`/api/user/${currentUser.uid}`, article )
          .then(() => {
            alert("Image uploaded successfully to Firebase.");
            })
          })
      })
      }
    };

    const onImageChange = (e) => {
      const reader = new FileReader();
      let file = e.target.files[0];
      if (file) {
        reader.onload = () => {
          if (reader.readyState === 2) {
            console.log(file);
            setPicture(file);
          }
        };
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setPicture(null);
      }
    };

    return (
      <>
      {isLoaded === true ?
      <div>
      <Row className="profile p-5 mt-5 justify-content-lg-center">
        <Col lg="2">
        <Image  width="200px" height="200px"
        src={currentPicture} roundedCircle />
        </Col>
        <Col lg="6 mt-4">
        <h5>PROFILE</h5>
        <h2>{username}</h2>
        <p>2 Night Routines</p>
        <Form>
          <Form.Group>
            <Form.File id="exampleFormControlFile1"
            type="file"
            onChange={(e) => {onImageChange(e);}}/>
          </Form.Group>
        </Form>
        </Col>
      </Row>
      <Row className="update-profile justify-content-lg-center">
        <Col lg="8">
        <Card style={{ background: 'transparent', border: 'transparent' }}>
          <Card.Body>
            <h5 className="text-left mb-4">UPDATE PROFILE</h5>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  defaultValue={currentUser.email}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="Leave blank to keep the same"
                />
              </Form.Group>
              <Button disabled={loading} className="float-right rounded-pill" type="submit">
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      </div>  : <LoadSpinner/>}
      </>
    )
  }
