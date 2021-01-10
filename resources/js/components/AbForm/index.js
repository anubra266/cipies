import React, { useState, useEffect } from "react";

const index = props => {
    const [values, setValue] = useState(props.initialValues);
    const [changeTrigger, setchangeTrigger] = useState(0);
    const fields = Object.keys(props.initialValues);
    const getResult = () => {
        return fields.reduce((prev, curr) => {
            return {
                ...prev,
                [curr]: {
                    value: values[curr],
                    onChange: e => {
                        e.persist();
                        setValue(vals => ({
                            ...vals,
                            [curr]: e.target?.value
                        }));
                        setchangeTrigger(i => i + 1);
                    }
                }
            };
        }, {});
    };
    const [result, setResult] = useState(getResult());
    useEffect(() => {
        setResult(getResult());
        return () => {};
    }, [changeTrigger]);

    const submitForm = e => {
        e.preventDefault();
        props.onSubmit(values);
    };
    return <form onSubmit={submitForm}>{props.children(result)}</form>;
};

export default index;
