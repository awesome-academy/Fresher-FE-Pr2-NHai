/* eslint-disable import/prefer-default-export */
export function handleChangeDate(state, { payload: dateSelected }) {
  const { times } = state.dateTimes.find((dateTime) => dateTime.date === dateSelected);

  state.times = [...times];
  state.dateSelected = dateSelected;
}
