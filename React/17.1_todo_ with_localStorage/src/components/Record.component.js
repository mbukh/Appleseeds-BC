import { useState } from "react";
import { Icon, Card, Typography } from "tiny-ui";

export const Record = ({
    record,
    updateRecordHandler,
    removeRecordHandler,
}) => {
    const [isActive, setIsActive] = useState(false);
    const [isRemoveActive, setIsRemoveActive] = useState(false);
    const [isDoneActive, setIsDoneActive] = useState(false);
    const { Text } = Typography;

    const checkClickHandler = (e) => {
        updateRecordHandler(record.id, { ...record, isDone: !record.isDone });
    };

    const removeClickHandler = () => {
        removeRecordHandler(record.id);
    };

    const mouseEnterHandler = () => setIsActive(true);
    const mouseLeaveHandler = () => setIsActive(false);

    const mouseDeleteEnterHandler = () => setIsRemoveActive(true);
    const mouseDeleteLeaveHandler = () => setIsRemoveActive(false);

    const mouseCheckDoneEnterHandler = () => setIsDoneActive(true);
    const mouseCheckDoneLeaveHandler = () => setIsDoneActive(false);

    return (
        <>
            <br />
            <article
                id={record.id}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                <Card
                    title={
                        <>
                            <span
                                className="check-is-done"
                                key={record.id}
                                onClick={checkClickHandler}
                                onMouseEnter={mouseCheckDoneEnterHandler}
                                onMouseLeave={mouseCheckDoneLeaveHandler}
                                checked={record.isDone}
                            >
                                <Icon
                                    className="check-is-done-icon"
                                    name={
                                        record.isDone
                                            ? "check-fill"
                                            : "check-file"
                                    }
                                    size={20}
                                />
                                <span className="check-is-done-label">
                                    {record.isDone
                                        ? !isDoneActive
                                            ? "done"
                                            : "undo"
                                        : !isDoneActive
                                        ? "planned"
                                        : "mark as done"}
                                </span>
                            </span>
                        </>
                    }
                    active={isActive}
                    extra={
                        <span
                            onMouseEnter={mouseDeleteEnterHandler}
                            onMouseLeave={mouseDeleteLeaveHandler}
                            onClick={removeClickHandler}
                        >
                            <Icon
                                style={{ cursor: "pointer" }}
                                name={
                                    !isRemoveActive
                                        ? "close-circle"
                                        : "close-fill"
                                }
                                size={20}
                            />
                        </span>
                    }
                >
                    <Card.Content>
                        <Text del={record.isDone}>{record.text}</Text>
                    </Card.Content>
                </Card>
            </article>
        </>
    );
};
