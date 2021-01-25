import React from 'react';

import './_contact.sass';

import Text from 'src/components/Text';
import Img from 'src/components/Img';
import Spinner from 'src/components/Spinner';

const Contact = ({
  contactList,
  isContactLoading,
}) => {

  return (
    <div className="containercontact">
      <div className="contact_navbar" />
      <div className="contact_header">
        <Text
          Tag="h3"
          className="t-white bold left-align"
          text="WhatsUp"
          style={{
            fontSize: '18px',
          }}
        />
      </div>
      <div className="contact_body">
        {isContactLoading ? <Spinner size="30px" /> : contactList.map((res, i) => (
          <div
            className="body_person"
            key={i}
          >
            <Img
              src={res.photo}
              className="person_img"
              alt="profile_img"
            />
            <Text
              Tag="h3"
              className="bold left-align margin0"
              text={res.name}
              style={{
                fontSize: "18px",
                color: '#000000B3',
              }}
            />
          </div>
        ),
        )}
      </div>
    </div>
  );
};

export default Contact;
