import { Avatar } from "@mui/material";

const NameAvatar = ({ name, border, onClick = () => {} }) => {
    const ascii = name.charCodeAt(0) % 2;
    let background;
    if (ascii === 0)
        background = 'primary.main';
    else
        background = 'secondary.main';
    let borderStyle = {};
    if (border) {
        borderStyle = {
            border: '1.5px solid black',
            '&:hover': {
                border: '1.5px solid white',
            }
        };
    }
    return (
        <Avatar onClick={onClick} sx={{ width: 30, height: 30, bgcolor: background, fontSize: 13, ...borderStyle }}>
            {name[0].toUpperCase()}
        </Avatar>
    );
};

export default NameAvatar;