import { Alert } from "@mui/material"

const ErrorAlert = ({errorMessage, setErrorMessage}) => {
    const closeAlert = () => {
        setErrorMessage('');
    }
    if (errorMessage) {
        return (
            <Alert
                sx={style}
                severity="error"
                onClose={closeAlert}>
                {errorMessage}
            </Alert>
        );
    } else {
        return null;
    }
};

const style = {
    position: 'absolute',
    right: 30,
    top: 30,
};

export default ErrorAlert;