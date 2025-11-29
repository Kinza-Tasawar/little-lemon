import BookingForm from './BookingForm';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <section className="booking">
      <h2>Reserve a Table</h2>
      <p>Please fill out the form below to book your table.</p>
      
      {/* Pass availableTimes and dispatch down to BookingForm */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </section>
  );
}

export default BookingPage;
