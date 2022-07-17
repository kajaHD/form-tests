import { React, useState } from 'react';
import { createTicket } from './fetchTicket';
import Input from './input';
import Textarea from './textarea';

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

  const cleanForm = (e) => {
    console.log('clean form');
    e.preventDefault();
    e.target.reset();
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e) && cleanForm(e)}>
      <div className="form-body">
        <Input
          {...{
            name: 'name',
            label: 'Full Name',
            type: 'text',
          }}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          {...{
            name: 'email',
            label: 'Email Address',
            type: 'email',
          }}
          onChange={(e) => handleInputChange(e)}
        />
        <Input
          {...{
            name: 'subject',
            label: 'Subject',
            type: 'text',
          }}
          onChange={(e) => handleInputChange(e)}
        />
        <Textarea
          {...{
            name: 'message',
            label: 'Type Message',
            type: 'textarea',
          }}
          onChange={(e) => handleInputChange(e)}
        />
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
