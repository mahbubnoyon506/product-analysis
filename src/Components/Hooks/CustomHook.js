const { useState, useEffect } = require("react");

const useUser = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);
    return [users, setUsers];
}



export default useUser;