import uniqid from "uniqid";

const read = () => {
  return JSON.parse(localStorage.getItem("recordList"));
};

const update = (recordsList) => {
  localStorage.setItem("recordList", JSON.stringify(recordsList));
};

const remove = (recordID) => {
  const list = read();
  for (let i in list) {
    if (list[i].id === recordID) list.splice(i, 1);
  }
  update(list);
};

const create = (record) => {
  const list = read();
  const todo = record;
  todo["id"] = uniqid();

  list.push(record);
  update(list);
};

export { read, update, remove, create };
