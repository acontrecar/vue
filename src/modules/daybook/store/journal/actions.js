// export const myActions = async ({ commit }) => {};
// Pueden ser asincronas y pueden llamar a mutacions

import journalApi from "@/api/journalApi";

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");

  if (!data) {
    commit("setEntries", []);
    return;
  }

  const entries = [];

  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }

  commit("setEntries", entries);
  //Cambiar el isloading del state
  commit("setLoading", true);
};

export const updateEntry = async ({ commit }, entry) => {
  const { date, picture, text } = entry;

  const dataToSave = { date, picture, text };

  await journalApi.put(`/entries/${entry.id}.json`, dataToSave);

  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {

  // dataToSave
  const { date, picture, text } = entry;
  const dataToSave = { date, picture, text };

  console.log(dataToSave);
  console.log(entry.id);

  const { data } = await journalApi.post(`/entries.json`, dataToSave);

  dataToSave.id = data.name;

  commit("addEntry", dataToSave);

  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
};

