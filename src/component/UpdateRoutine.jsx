import React, { useRef, useState, useEffect } from "react"
import { Form, Button, Card, Alert, Row, Image, Col, InputGroup, Modal} from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useHistory, Link } from "react-router-dom"
import { db } from '../firebase'
import { useRoutine } from "../contexts/RoutineContext";
import VideoSelection from "./VideoSelection";
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';

function SaveModal(props) {
  return (
  <Modal
  {...props}
  size="md"
  aria-labelledby="contained-modal-title-vcenter"
  centered
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

    var videolist = [
        {
            id:1,
            title:"Drive Around Jakarta",
            link:"https://youtu.be/LF3LxMKuSM0",
            desc:"A video of driving through Jakarta Inner Ring Road. Designed to simulate the sights and sounds of a long road trip and help stubborn sleepers fall asleep as though they were on a long car ride."
        },
        {
            id:2,
            title:"Windy Desert",
            link:"https://youtu.be/uKkJ0etAO5s",
            desc:"The wind blows over dunes tries to dance with the sand and creates an intensive Desert Sound.The composition fits your needs to meditate, erase annoying noise, and sleep."
        },
        {
            id:3,
            title:"Sit by The River",
            link:"https://youtu.be/zofBinqC2F4",
            desc:"Relax with the sights and sounds of a pure mountain river and the springtime songs of robin, blackbird, thrush, chaffinch and other birds singing in the forest."
        },
        {
            id:4,
            title:"Rainy Days",
            link:"https://youtu.be/HmH4W8JOifg",
            desc:"People hear nature sounds in many different ways to relax, fall asleep or just to calm the soul. Sound of heavy rain can help insomnia, ease anxiety, and reduce stress."
        },
        {
            id:5,
            title:"Ocean Breeze",
            link:"https://youtu.be/UyZfCrrdbm8",
            desc:"Relax with the total tranquility of this pristine tropical beach and the sound of the crystal clear ocean waters gently lapping over the sandy shore of this wild exotic island."
        },
        {
            id:6,
            title:"Crickets Chirping",
            link:"https://youtu.be/I4o87O4Pd_k",
            desc:"Relax and sleep with the gentle calming sounds of crickets chirping in the grass on a warm summer night. This nature video can be used to create a peaceful and calming ambiance before you sleep."
        },
        {
            id:7,
            title:"Warm Fireplace",
            link:"https://youtu.be/gB3XH5t9QCA",
            desc:"Create a cozy and relaxing atmosphere with the crackling sounds and warming views of a fire burning in an open fireplace. This video and sounds can be used to create a feeling of peace and tranquility, warmth and coziness before you sleep."
        },
        {
            id:8,
            title:"Snowy Days",
            link:"https://youtu.be/ne7g_Os_8hM",
            desc:"Relax and enjoy the dreamy scenery of snow softly falling over the trees and houses, illuminated by the warm glowing light of street lanterns at dusk. Create a calm and cozy atmosphere or a festive Christmas mood before you sleep."
        },
        {
            id:9,
            title:"Birds Chirping",
            link:"https://youtu.be/IsPBplWLImI",
            desc:"Relax and enjoy the beauty of Bluebell flowers in bloom, covering the ground of an old forest in England and accompanied by the cheerful songs of blackbird, chaffinch, robin and other birds chirping up in the trees."
        }
    ];

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
         await db.collection('users').doc(currentUser.uid).collection('Routines').doc(currentRoutine).update({
          'video.link' : video[0].link,
          'video.minutes' : 20,
          'video.title' : video[0].title,
          totalDuration : Number(currentRoutines[1].minutes) +  Number(currentRoutines[2].minutes) +  Number(currentRoutines[3].minutes) +  Number(currentRoutines[4].minutes) +  Number(currentRoutines[5].minutes) + 20,
        }).then(function() {
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
        console.log()
        } catch (e) {
            console.log('you have no access');
            history.push('/');
        }
    }

    function updateRoutines() {
        db.collection('users').doc(currentUser.uid).collection('Routines').doc(currentRoutine).update({
            'routine1.activity': activity1Ref.current.value,
            'routine1.minutes': minute1Ref.current.value,
            'routine2.activity': activity2Ref.current.value,
            'routine2.minutes': minute2Ref.current.value,
            'routine3.activity': activity3Ref.current.value,
            'routine3.minutes': minute3Ref.current.value,
            'routine4.activity': activity4Ref.current.value,
            'routine4.minutes': minute4Ref.current.value,
            'routine5.activity': activity5Ref.current.value,
            'routine5.minutes': minute4Ref.current.value,
        }).then(function() {
            console.log("Routine updated");
        })
    }

    const VideoSelections = () => {
        return (
        <>
        <h6 className="text-center mb-5">Routine updated! Next step, choose your new video to complete the routine.</h6>
        <div className="w-100 row justify-content-center">
            {
                videolist.map(v => {
                    return (
                        <div className="video-container w-25 m-3 row justify-content-center"
                        onClick={e => {e.preventDefault(); videoHandler(v.link, v.title);}}>
                        <VideoSelection youtubeURL={v.link}
                        theme={v.title}
                        description={v.desc}
                        status={v.link === video ? isSelected : null}/>
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
        console.log(routines);
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

    function videoHandler(videoLink, videoTitle) {
        setVideo([
            {
                title: videoTitle,
                link: videoLink
            }]);
        console.log(video);
        console.log(videoLink);
        setSelected(true);
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
        <h2 className="text-center mt-5 mb-5">Update Your Night Routine</h2>
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
