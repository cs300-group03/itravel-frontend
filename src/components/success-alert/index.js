import { Alert } from "@mui/material"
import React, { useEffect, useState } from "react";

const SuccessAlert = ({successMessage, setSuccessMessage}) => {
    const [trash, setTrash] = useState('');
    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccessMessage('');
        }, 2000);
        return () => clearTimeout(timer);
    }, [trash]);

    if (successMessage) return (<Alert sx={style}severity="success">{successMessage}</Alert>);
    return null;
};

const style = {
    position: 'absolute',
    right: 30,
    top: 30,
};

export default SuccessAlert;