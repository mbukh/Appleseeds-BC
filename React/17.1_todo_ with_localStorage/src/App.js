import "tiny-ui/dist/styles/index.css";
import "./styles/App.css";
import { useState } from "react";
import api from "./services/localStorageAPI";
import { Input } from "./components/Input.component";
import { RecordList } from "./components/RecordList.component";

function App() {
    const [allRecords, setAllRecords] = useState([]);
    const [page, setPage] = useState(1);
    const perPage = 5;

    const createRecordHandler = (recordData) => {
        const newRecord = api.create(recordData);
        setAllRecords([newRecord, ...allRecords]);
        setPage(1);
    };

    const updateRecordHandler = (recordId, recordData) => {
        const records = api.update(recordId, recordData);
        setAllRecords(records);
    };

    const removeRecordHandler = (recordId, recordData) => {
        const records = api.remove(recordId, recordData);
        setAllRecords(records);
    };

    useState(() => {
        const records = api.read();
        setAllRecords(records);
    }, [allRecords, page]);

    return (
        <div className="container">
            <Input createRecordHandler={createRecordHandler} />
            <RecordList
                allRecords={allRecords}
                updateRecordHandler={updateRecordHandler}
                removeRecordHandler={removeRecordHandler}
                page={page}
                setPage={setPage}
                perPage={perPage}
            />
        </div>
    );
}

export default App;
