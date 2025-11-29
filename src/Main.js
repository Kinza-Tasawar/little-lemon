/* global fetchAPI */   // ✅ Tell ESLint these are global functions

import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Homepage from "./Components/Homepage";
import BookingPage from "./Components/BookingPage";

// Initialize available times using today's date
const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today); // fetchAPI comes from the API script included in index.html
};

// Reducer function to update times when date changes
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      if (!action.date) return state; // ✅ Guard against empty date
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function Main() {
  // useReducer manages availableTimes state via API
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Reservations / Booking */}
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
            />
          }
        />

        {/* Future pages (uncomment when ready) */}
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/menu" element={<MenuPage />} /> */}
        {/* <Route path="/login" element={<LoginPage />} /> */}

        {/* Fallback route */}
        <Route path="*" element={<Homepage />} />
      </Routes>
    </main>
  );
}

export default Main;
