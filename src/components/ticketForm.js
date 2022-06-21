import { React, useState } from 'react';
import { createTicket } from './fetchTicket';

function TicketForm() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === 'name') {
      setName(value);
    }
    if (id === 'email') {
      setEmail(value);
    }
    if (id === 'subject') {
      setSubject(value);
    }
    if (id === 'message') {
      setMessage(value);
    }
  };

  const handleSubmit = (e) => {
    console.log(name, email, subject, message);
    e.preventDefault();
    return createTicket(name, email, subject, message);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="name">
            Full Name{' '}
          </label>
          <input
            className="form__input"
            type="text"
            id="name"
            placeholder="Your Name"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="email">
          <label className="form__label" htmlFor="email">
            Email{' '}
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="subject">
          <label className="form__label" htmlFor="subject">
            Subject{' '}
          </label>
          <input
            className="form__input"
            type="text"
            id="subject"
            placeholder="Subject"
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
        <div className="requester-message">
          <label className="form__label" htmlFor="message">
            Type Message{' '}
          </label>
          <textarea
            className="form__input"
            type="textarea"
            id="message"
            placeholder="Type Message"
            style={{ height: '200px' }}
            onChange={(e) => handleInputChange(e)}
            required
          />
        </div>
      </div>
      <div className="footer">
        <button type="submit" className="btn">
          Submit ticket
        </button>
      </div>
    </form>
  );
}

export default TicketForm;
