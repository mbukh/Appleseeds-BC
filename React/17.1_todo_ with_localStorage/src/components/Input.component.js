import { useState } from "react";
import { Input as InputText, Button } from "tiny-ui";

export const Input = ({ createRecordHandler }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [recordText, setRecordText] = useState("");
    const { Group, Addon } = InputText;

    const handleOnChange = (e) => {
        setRecordText(e.target.value);
        if (e.target.value.trim().length === 0) {
            setIsButtonDisabled(true);
        } else {
            setIsButtonDisabled(false);
        }
    };

    const addRecordButtonHandler = () => {
        setIsLoading(true);
        setTimeout(() => {
            createRecordHandler({ text: recordText, isDone: false });
            setRecordText("");
            setIsLoading(false);
        }, 300);
    };

    return (
        <Group size="lg" className="input-form">
            <InputText
                placeholder="Record text..."
                value={recordText}
                onChange={handleOnChange}
            />

            <Addon noBorder>
                <Button
                    loading={isLoading}
                    disabled={isButtonDisabled}
                    btnType="primary"
                    onClick={addRecordButtonHandler}
                >
                    add record
                </Button>
            </Addon>
        </Group>
    );
};
