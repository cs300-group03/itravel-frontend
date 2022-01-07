import { Avatar } from "@mui/material";

const NameAvatar = ({ name }) => {
    const ascii = name.charCodeAt(0) % 2;
    let background;
    if (ascii === 0)
        background = 'primary.main';
    else
        background = 'secondary.main';
    return (
        <Avatar sx={{ width: 30, height: 30, bgcolor: background, fontSize: 13 }}>
            {name[0].toUpperCase()}
        </Avatar>
    );
};

export default NameAvatar;