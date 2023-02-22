import { Record } from "./Record.component";
import { Empty, Divider, Pagination } from "tiny-ui";
import { useState, useEffect } from "react";

const RecordList = ({
    allRecords,
    updateRecordHandler,
    removeRecordHandler,
    page,
    setPage,
    perPage,
}) => {
    const [pageRecords, setPageRecords] = useState([]);

    useEffect(() => {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        if (allRecords.length > perPage) {
            setPageRecords(allRecords.slice(startIndex, endIndex));
        } else {
            setPageRecords(allRecords);
        }
    }, [page, allRecords, perPage]);

    const pageOnChangeHandler = (page) => {
        setPage(page);
    };

    return (
        <section className="recordList">
            {pageRecords.length ? (
                pageRecords.map((record) => (
                    <Record
                        key={record.id}
                        record={{ ...record }}
                        updateRecordHandler={updateRecordHandler}
                        removeRecordHandler={removeRecordHandler}
                    />
                ))
            ) : (
                <>
                    <Divider />
                    <Empty />
                </>
            )}
            <br />
            {allRecords.length > perPage && (
                <Pagination
                    current={page}
                    total={allRecords.length}
                    pageSize={perPage}
                    onChange={pageOnChangeHandler}
                />
            )}
        </section>
    );
};

export { RecordList };
