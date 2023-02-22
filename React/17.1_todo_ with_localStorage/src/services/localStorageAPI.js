import { v4 as uuidv4 } from "uuid";

const read = () => {
    let dataArr = JSON.parse(localStorage.getItem("recordList")) || [];
    return dataArr;
};

const remove = (recordID, write = true) => {
    const dataArr = read();
    const updatedDataArr = dataArr.filter((rec) => rec.id !== recordID);
    write && localStorage.setItem("recordList", JSON.stringify(updatedDataArr));
    return updatedDataArr;
};

const create = (recordData, write = true) => {
    const dataArr = read();
    const newRecord = { id: uuidv4(), ...recordData, date: Date.now() };
    const updatedDataArr = [newRecord, ...dataArr];
    localStorage.setItem("recordList", JSON.stringify(updatedDataArr));
    return newRecord;
};

const update = (recordID, recordData) => {
    const dataArr = read();
    const index = dataArr.findIndex((rec) => rec.id === recordID);
    dataArr[index] = { ...recordData };
    localStorage.setItem("recordList", JSON.stringify(dataArr));
    return dataArr;
};

const api = { create, read, update, remove };
export default api;
