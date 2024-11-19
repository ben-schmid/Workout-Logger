const ONE_HOUR = 60 * 60 * 1000; // one hour in milisecs

export const saveEmail = (email) => {
    const timestamp = new Date().getTime();
    localStorage.setItem('userEmail', JSON.stringify({email, timestamp}));
};

export const getEmail = () => {
    const data = localStorage.getItem('userEmail');
    if (!data) return null;

    const {email, timestamp} = JSON.parse(data);
    const currentTime = new Date().getTime();
    if (currentTime - timestamp > ONE_HOUR) {
        //remove data from localStorage
        localStorage.removeItem('userEmail');
        return null;
    }

    return email;
}

export const clearEmail = () => {
    localStorage.removeItem('userEmail');
};

