import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import Contact from 'src/components/Contact';
import Chat from 'src/components/Chat';

import './_chatroom.sass';

import getContact from 'src/actions/Contact';

import { isMobileSize } from 'src/utils/helper';

const ChatRoom = ({
  getContact,
  isContactLoading,
  contactList,
}) => {

  // websocket setting
  const URL = 'ws://localhost:3030';
  let ws = null;

  const connectws = () => {
    ws = new WebSocket(URL);
  };

  const [userMessage, setMessage] = useState({
    id: '',
    name: '',
    message: '',
  });

  useEffect(() => {
    ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected');
    };

    ws.onmessage = (evt) => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      setMessage((state) => ({ ...state, message: message }));
    };

    ws.onclose = () => {
      // automatically try to reconnect on connection loss
      connectws();
    };
  }, [ws]);

  const handleAddMessage = (message) => {
    setMessage((state) => ({ ...state, message: message }));
  };

  const handleSubmitMessage = (msg) => {
    setMessage((state) => ({ ...state, message: msg }));
    ws.send(msg);
    handleAddMessage(msg);
  };

  useEffect(() => {
    getContact();
  }, [getContact]);

  const [userActive, setUserActive] = useState({});
  const [showChat, setShowChat] = useState(true);

  useEffect(() => {
    const findId = contactList.map((res) => res.id === userMessage.id);
    if (Object.keys(findId).length !== 0) {
      setUserActive(findId);
    }
  }, [contactList, userMessage]);

  const openChat = (payload) => {
    if (!payload) return;

    setUserActive(payload);
    setShowChat(true);
  };

  const MobileViewContact = () => {
    return (
      <Container
        fluid
        className="padding0"
      >
        <Contact
          contactList={contactList}
          isContactLoading={isContactLoading}
        />
      </Container>
    );
  };

  const MobileViewChat = () => {
    return (
      <Container
        fluid
        className="padding0"
      >
        <Chat setShowChat={setShowChat} />
      </Container>
    );
  };

  return (
    <>
      {isMobileSize
        ? showChat ? MobileViewChat() : MobileViewContact()
        : (
          <Container
            fluid="lg"
            className="containerchatroom"
          >
            <Row>
              <Col
                sm={4}
                className="padding0"
              >
                <Contact
                  contactList={contactList}
                  isContactLoading={isContactLoading}
                />
              </Col>
              <Col
                sm={8}
                className="padding0"
              >
                <Chat
                  userActive={userActive}
                  handleSubmitMessage={handleSubmitMessage}
                />
              </Col>
            </Row>
          </Container>
        )}
    </>
  );
};

const mapStateToProps = (state) => {
  const contactState = state.get('getContact');

  return {
    contactList: contactState.contactList,
    isContactLoading: contactState.isContactLoading,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getContact: () => dispatch(getContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom);
