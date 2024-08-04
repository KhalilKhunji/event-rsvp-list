import './App.css';

const App = () => {
  const attendees = [
    { name: 'Abbas', confirmed: true },
    { name: 'Bin', confirmed: true },
    { name: 'Firnas', confirmed: false },
  ];

  return (
    <>
      <h1>Event RSVP List</h1>
      <ul>
        {attendees.map((attendee, index) => (
          <li key={index} className={attendee.confirmed ? 'yes' : 'no'}>
            {attendee.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;