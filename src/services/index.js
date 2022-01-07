import * as status from 'http-status';

export async function getProfile() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/`, {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`,
            },
        });
        if (response.status === status.OK) {
            const jsonResponse = await response.json();
            return jsonResponse.data.user;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

export async function signUp(email, name, type, password) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
                name,
                type,
            }),
        });
        if (response.status === status.OK) {
            return { email };
        } else {
            const jsonResponse = await response.json();
            const error = jsonResponse.message;
            let message;
            if (error.includes('email')) {
                message = 'Email is already used.';
            } else if (error.includes('password')) {
                message = 'Password is too short.';
            } else {
                message = 'Network error. Please try again!';
            }
            return { message };
        }
    } catch (error) {
        console.log(error);
        return { message: 'Unexpected error.' };
    }
}

export async function verify(email, otp) {
    try {
        otp = parseInt(otp);
    } catch (error) {
        return {
            message: 'OTP only contains numbers.'
        };
    }
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/verify`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, otp
            })
        });
        if (response.status === status.OK) {
            return { verified: true };
        } else {
            const jsonReponse = await response.json();
            const error = jsonReponse.message;
            let message;
            if (error.includes('verified')) {
                return {
                    verified: true,
                    message: 'This account is already verified.'
                };
            }
            if (error.includes('expired')) {
                message = 'Expired OTP. A new OTP is sent to your email.';
            } else if (error.includes('email')) {
                message = 'Email does not belong to any account.';
            } else if (error.includes('invalid')) {
                message = 'Your OTP is invalid.';
            } else {
                message = 'Network error.'
            }
            return { message };
        }
    } catch (error) {
        return {
            message: 'Unexpected error.',
        };
    }
}

export async function resendOTP(email) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/resend`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email
            })
        });
        if (response.status === status.OK) {
            return {};
        } else {
            const jsonResponse = await response.json();
            const error = jsonResponse.message;
            let message;
            if (error.includes('email')) {
                message = 'Email does not belong to any account.';
            } else {
                message = 'Network error.';
            }
            return { message };
        }
    } catch (error) {
        return {
            message: 'Unexpected error.',
        };
    }
}

export async function logIn(email, password) {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email, password
            })
        });
        const jsonResponse = await response.json();
        if (response.status === status.OK) {
            localStorage.setItem('token', jsonResponse.data.token);
            return jsonResponse.data.user;
        } else {
            const error = jsonResponse.message;
            let message;
            if (error.includes('email')) {
                message = 'Email does not belong to any account.';
            } else if (error.includes('unverified')) {
                message = 'This account is not verified. Please verify first.';
            } else if (error.includes('password')) {
                message = 'Wrong password.';
            } else {
                message = 'Network error.';
            }
            return { message };
        }
    } catch (error) {
        return {
            message: 'Unexpected error.',
        };
    }
}

export async function getAllLocations() {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/info/location`);
    const jsonReponse = await response.json();
    return jsonReponse.data.locations;
}

export async function createSchedule(title, destinationId, startDate, endDate, duration) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
        body: JSON.stringify({
            title, destinationId, startDate, endDate, duration
        }),
    });
    if (response.status === status.OK) {
        const jsonResponse = await response.json();
        return jsonResponse.data.schedule;
    }
    return false;
}

export async function addActivity(scheduleId, title, start, end, serviceId) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
        body: JSON.stringify({
            scheduleId, title, start, end, serviceId,
        }),
    });
    if (response.status === status.OK) {
        const jsonResponse = await response.json();
        return jsonResponse.data.activity;
    }
    return false;
}

export async function mySchedules() {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/my`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
    });
    if (response.status === status.OK) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse.data.schedules;
    }
    return false;
}

export async function getPublicSchedules(destinationId, duration, filter) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/?destination=${destinationId}&duration=${duration}&filter=${filter}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
    });
    if (response.status === status.OK) {
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse.data.schedules;
    }
    return false;
}

export async function getAttractionsAtLocation(destinationId) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/info/attraction?destinationId=${destinationId}`, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === status.OK) {
        const jsonReponse = await response.json();
        return jsonReponse.data.attractions;
    }
    return [];
}

export async function voteSchedule(scheduleId, voteChoice) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/vote`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
        body: JSON.stringify({
            scheduleId,
            choice: voteChoice,
        }),
    });
    if (response.status === status.OK) {
        return true;
    }
    return false;
}

export async function publishSchedule(scheduleId, description) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/publish`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
        body: JSON.stringify({
            scheduleId,
            description,
        }),
    });
    if (response.status === status.OK) {
        return true;
    }
    return false;

}

export async function fetchEvents(scheduleId) {
    const token = localStorage.getItem('token');
    const response = await fetch(`${process.env.REACT_APP_API_URL}/schedule/events?scheduleId=${scheduleId}`, {
        headers: {
            'Content-Type': 'application/json',
            'authorization': `bearer ${token}`,
        },
    });
    if (response.status === status.OK) {
        const jsonReponse = await response.json();
        return jsonReponse.data.activities;
    }
    return [];
}