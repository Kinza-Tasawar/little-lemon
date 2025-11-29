import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading text", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
  const headingElement = screen.getByText("Choose date");
  expect(headingElement).toBeInTheDocument();
});

test("Renders the time select label", () => {
  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);
  const timeLabel = screen.getByText("Choose time");
  expect(timeLabel).toBeInTheDocument();
});
