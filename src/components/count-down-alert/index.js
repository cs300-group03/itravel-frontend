import { Alert } from "@mui/material";
import { useEffect, useState } from "react";

const CountdownAlert = ({message, navigate, redirectPath}) => {
    const [time, setTime] = useState(5);

    useEffect(() => {
        setInterval(() => {
            if (time === 1) {
                navigate(redirectPath);
            }
            setTime(time - 1);
        }, 1000);
    });
    return (
        <Alert severity="success" sx={style}>
            {`${message} Redirecting in ${time}s...`}
        </Alert>
    );
};

const style = {
    position: 'absolute',
    right: 30,
    top: 30,
};

export default CountdownAlert;