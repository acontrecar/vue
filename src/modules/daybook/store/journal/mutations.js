// export const myMutations = ({ state }) => {};
//Modificacion del state

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entries) => {
  const idx = state.entries.map((e) => e.id).indexOf(entries.id);
  state.entries[idx] = entries;
};

export const addEntry = (state, entry) => {

  //state -> entries -> la nueva entrada debe de ser la primera

  state.entries = [entry, ...state.entries];
  console.log({ ...state.entries });
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entry) => entry.id !== id);
}
