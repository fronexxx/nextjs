const UsersPage = async () => {
    const users: any = await fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json());
    return (
        <div>
            {
                users.map((user: any) => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;
