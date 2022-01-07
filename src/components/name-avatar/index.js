import { Avatar } from "@mui/material";

const NameAvatar = ({ name }) => {
    const ascii = name.charCodeAt(0) % 3;
    let background;
    if (ascii === 0)
        background = 'primary.main';
    else if (ascii === 1) 
        background = 'secondary.main';
    else 
        background = 'dark.main';
    return (
        <Avatar sx={{ width: 30, height: 30, bgcolor: background, fontSize: 13 }}>
            {name[0].toUpperCase()}
        </Avatar>
    );
};

export default NameAvatar;