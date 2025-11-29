import { initializeTimes, updateTimes } from "./times";

test("initializeTimes returns correct initial times", () => {
  const times = initializeTimes();
  expect(times).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});

test("updateTimes returns the same state when called", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", date: "2025-11-29" };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00"]);
});
