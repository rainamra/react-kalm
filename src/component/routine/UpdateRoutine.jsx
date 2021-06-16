//by Rainamira Azzahra
import React, { useRef, useState } from "react"
import { Form, Button, Alert, Row, Col, InputGroup, Modal} from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import { useRoutine } from "../../contexts/RoutineContext";
import VideoSelection from "./VideoSelection";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import videolist from  '../data/videolist.json'
import axios from 'axios';


function SaveModal(props) {
  return (
  <Modal
  {...props}
  size="md"
  aria-labelledby="contained-modal-title-vcenter"
  centered
  animation={false}
  >
  <Modal.Header>
      <Modal.Title id="contained-modal-title-vcenter">
          Routine Updated
      </Modal.Title>
  </Modal.Header>
  <Modal.Body>
      Woohoo, you're all set! You can start your updated routine.
  </Modal.Body>
  <Modal.Footer>
      <Button onClick={props.onHide}>
          <Link to="/" className="link">Ok</Link>
      </Button>
  </Modal.Footer>
  </Modal>
);
}

function UpdateRoutine() {

    const activity1Ref = useRef();
    const activity2Ref = useRef();
    const activity3Ref = useRef();
    const activity4Ref = useRef();
    const activity5Ref = useRef();
    const minute1Ref = useRef();
    const minute2Ref = useRef();
    const minute3Ref = useRef();
    const minute4Ref = useRef();
    const minute5Ref = useRef();
    const [videos, setVideos] = useState(false);
    const [video, setVideo] = useState([]);
    const [routines, setRoutines] = useState([]);
    const [isSelected, setSelected] = useState(false);
    const [isUpdated, setUpdated] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { currentUser } = useAuth();
    const { currentRoutine, getRoutineData, currentRoutines } = useRoutine();
    const [modalShow, setModalShow] = useState(false);


    function handleSubmit (e) {
        e.preventDefault();

        const promises = []
        setLoading(true)
        setError("")

        if (activity1Ref.current.value) {
            promises.push(updateRoutines())
        }

        Promise.all(promises)
        .then(() => {
          setVideos(true)
          setUpdated(true)
        })
        .catch(() => {
          setError("Failed to update routine")
        })
        .finally(() => {
          getRoutineData();
          setLoading(false)
        })
    }

    async function videoSubmit (e) {
      e.preventDefault();

      if (video.length === 0) {
          return setError("Please pick a video");
      }

      try {
        setError('');
        const article = {
          'video.link' : video[0].link,
          'video.minutes' : 20,
          'video.title' : video[0].title
        }
        axios.put(`/api/user/${currentUser.uid}/routine/${currentRoutine}`, article)
        .then(() => {
          console.log("Video updated");
        })
            setModalShow(true);
        } catch {
          setError("Failed to create a new routine");
        }

  }

    async function getData() {
        try {
        getRoutineData();
        setRoutines(currentRoutines);
        } catch (e) {
            console.log('you have no access');
            history.push('/');
        }
    }

    function updateRoutines() {

      setVideo(
        [{
            title: routines[6].title,
            link: routines[6].link
        }]);

      const totalDuration = Number(minute1Ref.current.value) + Number(minute2Ref.current.value) + Number(minute3Ref.current.value) + Number(minute4Ref.current.value) + Number(minute5Ref.current.value) + 20;
      const article = {
        'routine1.activity': activity1Ref.current.value,
        'routine1.minutes': minute1Ref.current.value,
        'routine2.activity': activity2Ref.current.value,
        'routine2.minutes': minute2Ref.current.value,
        'routine3.activity': activity3Ref.current.value,
        'routine3.minutes': minute3Ref.current.value,
        'routine4.activity': activity4Ref.current.value,
        'routine4.minutes': minute4Ref.current.value,
        'routine5.activity': activity5Ref.current.value,
        'routine5.minutes': minute5Ref.current.value,
        'totalDuration': totalDuration
        }

        axios.put(`/api/user/${currentUser.uid}/routine/${currentRoutine}`, article)
        .then(() => {
          console.log("Routine updated");
        })
    }


    function videoHandler(videoLink, videoTitle) {
      setVideo(
        [{
            title: videoTitle,
            link: videoLink
        }]
         );
  }

    const VideoSelections = () => {
        return (
        <>
        <h6 className="text-center mb-5">Routine updated! Next step, choose your new video to complete the routine.</h6>
        <div className="w-100 row justify-content-center">
            {
                videolist.map((v, i) => {
                    return (
                        <div key={i} className="video-container w-25 m-3 row justify-content-center"
                        onClick={() => {
                          videoHandler(v.link, v.title);
                          console.log(video);
                          }}
                        >
                        <VideoSelection
                        youtubeURL={v.link}
                        theme={v.title}
                        description={v.desc}
                        status={video[0].link === v.link ? true : false}
                        />
                        </div>
                    )
                })
            }
        </div>
        </>
    )}

    const showForm = e => {
        getData();
        setError("");
    }

    const UpdateForm = () => {
        return (
            <>
            <h4 className="font-italic">{routines[0].id}</h4>
            <Form onSubmit={handleSubmit}>
              <Form.Group id="routine1">
                <Form.Label>Routine 1</Form.Label>
                <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">Activity</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={activity1Ref}
                  defaultValue={routines[1].activity}
                />
                </InputGroup>
                <InputGroup className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Minutes</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={minute1Ref}
                  defaultValue={routines[1].minutes}
                />
                </InputGroup>
              </Form.Group>

              <Form.Group id="routine2">
                <Form.Label>Routine 2</Form.Label>
                <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">Activity</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={activity2Ref}
                  defaultValue={routines[2].activity}
                />
                </InputGroup>
                <InputGroup className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Minutes</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={minute2Ref}
                  defaultValue={routines[2].minutes}
                />
                </InputGroup>
              </Form.Group>

              <Form.Group id="routine3">
                <Form.Label>Routine 3</Form.Label>
                <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">Activity</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={activity3Ref}
                  defaultValue={routines[3].activity}
                />
                </InputGroup>
                <InputGroup className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Minutes</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={minute3Ref}
                  defaultValue={routines[3].minutes}
                />
                </InputGroup>
              </Form.Group>

              <Form.Group id="routine4">
                <Form.Label>Routine 4</Form.Label>
                <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">Activity</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={activity4Ref}
                  defaultValue={routines[4].activity}
                />
                </InputGroup>
                <InputGroup className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Minutes</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={minute4Ref}
                  defaultValue={routines[4].minutes}
                />
                </InputGroup>
              </Form.Group>

              <Form.Group id="routine5">
                <Form.Label>Routine 5</Form.Label>
                <InputGroup>
                <InputGroup.Text id="inputGroupPrepend">Activity</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={activity5Ref}
                  defaultValue={routines[5].activity}
                />
                </InputGroup>
                <InputGroup className="mt-2">
                <InputGroup.Text id="inputGroupPrepend">Minutes</InputGroup.Text>
                <Form.Control
                  type="text"
                  ref={minute5Ref}
                  defaultValue={routines[5].minutes}
                />
                </InputGroup>
              </Form.Group>
                <Form.Group className="row justify-content-center mt-4 mb-5">
                    <Button disabled={loading} className="float-center rounded-pill" type="submit">
                        Update
                    </Button>
                </Form.Group>
            </Form>
        </>
        )
    }


    const startButton = () =>
    {
        if (routines.length === 0 ) {
        return <IconButton color="primary" onClick={showForm}><AddCircleIcon fontSize="large"/></IconButton>
        }
    }

    const updateVideoButton = () =>
    {
        if (video.length > 0 ) {
           return <Button className="rounded-pill" type="submit" onClick={videoSubmit}>Save</Button>
        }
    }

    return (
        <>
        <h2 className="text-center mt-5 mb-4">Update Your Night Routine</h2>
        <h6 className="text-center">Click the plus button to edit. You can only edit your activity as well as the duration.</h6>
        <h6 className="text-center mb-5">If you want to change the title and cover might as well create a new night routine and delete the old one.</h6>
        <div className="row justify-content-center">
            {startButton()}
        </div>
        <div className="row justify-content-center">
        {error && <Alert variant="danger">{error}</Alert>}
        </div>
        <div>
        <Row className="update-profile justify-content-lg-center">
            <Col md="8">
            {routines.length !== 0 && isUpdated === false ? <UpdateForm /> : null}
            </Col>
        </Row>
        </div>
        <div className="row justify-content-center">
        {videos ? <VideoSelections /> : null}
        </div>
        <div className="row justify-content-center mt-4 mb-5">
        {updateVideoButton()}
        <SaveModal
            show={modalShow}
            onHide={() => setModalShow(false)}
        />
        </div>
    </>
    )
}

export default UpdateRoutine
