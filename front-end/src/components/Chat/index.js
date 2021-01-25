import React, { useState } from 'react';

import './_chat.sass';
import Img from 'src/components/Img';
import Text from 'src/components/Text';
import Input from 'src/components/Input';

import { isMobileSize } from 'src/utils/helper';

const ChatPage = ({
  submitMessage = () => {},
  setShowChat,
  handleSubmitMessage,
  userActive,
}) => {

  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    const { value } = e.target;

    setMessage(value);
  };

  const onKeyDownMessage = (e) => {
    if (e.key === 'Enter') {
      submitMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="containerchat">
      <div className="chat_navbar" />
      <div className="chat_header row margin0">
        {isMobileSize
        && (
          <div
            className="col-1 col-sm-1 d-flex justify-content-center wrapperimg padding0"
            onClick={() => setShowChat(false)}
          >
            <i className="fas fa-arrow-left fa-2x t-white" />
          </div>
        )}
        <div className={isMobileSize ? "col-2 col-sm-2 d-flex justify-content-center wrapperimg padding0" : "col-1 col-sm-1 d-flex justify-content-center wrapperimg padding0"}>
          <Img
            src="https://images.unsplash.com/photo-1516397281156-ca07cf9746fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            className="person_img"
            alt="profile_img"
          />
        </div>
        <div className={isMobileSize ? "col-5 col-sm-5 flex-start padding0" : "col-8 col-sm-8 flex-start"}>
          <Text
            Tag="h4"
            className="bold t-white left-align"
            text="Dewi"
            style={{
              fontSize: '18px',
            }}
          />
          <Text
            Tag="h4"
            className="reg t-white left-align"
            text={userActive ? "Online" : "Offline"}
            style={{
              fontSize: '13px',
            }}
          />
        </div>
        <div className={isMobileSize ? "col-4 col-sm-4 wrappericon padding0" : "col-3 col-sm-3 wrappericon"}>
          <i className="fas fa-video fa-2x t-white" />
          <i className="fas fa-phone-alt fa-2x t-white" />
          <i className="fas fa-ellipsis-v fa-2x t-white" />
        </div>
      </div>
      <div className="chat_wrapperbody">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((res) => (
          res % 2 === 1
            ? (
              <div
                className="buble_person"
                key={res}
              >
                <Text
                  Tag="h4"
                  className="reg t-black left-align"
                  text="Lorem ipsum dolor"
                  style={{
                    fontSize: '16px',
                    margin: '0 15px 15px 0',
                  }}
                />
                <Text
                  Tag="h4"
                  className="light right-align hour margin0"
                  text="10:35 am"
                  style={{
                    fontSize: '12px',
                    color: '#999999',
                  }}
                />
              </div>
            )
            : (
              <div
                className="buble_me"
                key={res}
              >
                <Text
                  Tag="h4"
                  className="reg t-black left-align"
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis cursus fermentum. Sed sit amet est tincidunt odio lobortis mollis. Pellentesque condimentum"
                  style={{
                    fontSize: '16px',
                    margin: '0 15px 15px 0',
                  }}
                />
                <div className="hour_send">
                  <Text
                    Tag="h4"
                    className="light right-align"
                    text="10:35 am"
                    style={{
                      fontSize: '12px',
                      color: '#999999',
                      margin: '0 8px 0 0',
                    }}
                  />
                  <i className="fas fa-check-double not_checked" />
                </div>
              </div>
            )
        ))}
      </div>
      <div className="chat_message row margin0">
        <div className="col-1 col-sm-1 ">
          <i className="far fa-grin-alt fa-2x grey_icon" />
        </div>
        <div className="col-1 col-sm-1 ">
          <i className="fas fa-paperclip fa-2x grey_icon" />
        </div>
        <div className="col-9 col-sm-9">
          <Input
            type="text"
            placeholder="Type a message"
            name="message"
            className="message_box"
            onChange={handleChangeMessage}
            value={message}
            onKeyDown={onKeyDownMessage}
          />
        </div>
        <div className="col-1 col-sm-1">
          <i className="fas fa-microphone fa-2x grey_icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
