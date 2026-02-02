const UsersPage = async () => {
    const users: any = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-cache'})
        .then((response) => response.json());


    return (
        <div>
            <h2>{Date.now()}</h2>

            {
                users.map((user: any) => <div key={user.id}>{user.name}</div>)
            }
        </div>
    );
};

export default UsersPage;
