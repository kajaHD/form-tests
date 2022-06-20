import { React, useState } from 'react';
import { createTicket } from './fetchTicket';

function TicketForm() {
  const [requesterName, setrequesterName] = useState(null);
  const [requesterEmail, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [requesterMessage, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'requesterName') {
      setrequesterName(value);
    }
    if (id === 'requesterEmail') {
      setEmail(value);
    }
    if (id === 'subject') {
      setSubject(value);
    }
    if (id === 'requesterMessage') {
      setMessage(value);
    }
  };

  const handleSubmit = () => {
    console.log(requesterName, requesterEmail, subject, requesterMessage);

    return createTicket(
      requesterName,
      requesterEmail,
      subject,
      requesterMessage
    );
  };

  return (
    <div className="form">
      <div className="form-body">
        <div className="username">
          <label className="form__label" for="requesterName">
            Full Name{' '}
          </label>
          <input
            className="form__input"
            type="text"
            id="requesterName"
            placeholder="Your Name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="email">
          <label className="form__label" for="email">
            Email{' '}
          </label>
          <input
            type="email"
            id="requesterEmail"
            className="form__input"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="subject">
          <label className="form__label" for="subject">
            Subject{' '}
          </label>
          <input
            className="form__input"
            type="text"
            id="subject"
            placeholder="Subject"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="requester-message">
          <label className="form__label" for="message">
            Type Message{' '}
          </label>
          <textarea
            className="form__input"
            type="textarea"
            id="requesterMessage"
            placeholder="Type Message"
            style={{ height: '200px' }}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </div>
      <div class="footer">
        <button type="submit" class="btn" onClick={() => handleSubmit()}>
          Submit ticket
        </button>
      </div>
    </div>
  );
}

export default TicketForm;
