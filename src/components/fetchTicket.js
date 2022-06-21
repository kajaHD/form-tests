const url = 'https://api.labs.helpdesk.com/v1/externalTickets';
const licenseID = 25;
const teamID = '29be9540-b932-4959-b8c3-f0acede85a73';

const createTicket = async (
  requesterName,
  requesterEmail,
  subject,
  requesterMessage
) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        licenseID: licenseID,
        requester: {
          name: requesterName,
          email: requesterEmail,
        },
        subject: subject,
        message: {
          richTextObj: [
            {
              type: 'paragraph',
              children: [
                {
                  text: requesterMessage,
                },
              ],
            },
          ],
        },
        status: 'pending',
        assignment: {
          agent: null,
          team: {
            ID: teamID,
          },
        },
      }),
    });
    if (response.ok) {
      const data = await response.json();
      console.log('success');
      console.log(data);
    }
  } catch (error) {
    console.log('fail!');
    console.log(error);
  }
};

export { createTicket };
