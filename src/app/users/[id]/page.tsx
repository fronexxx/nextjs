import {FC} from "react";

type PropsType = {
    params: Promise<{ [key: string]: string | string[] | undefined; }>
}
const UserPage: FC<PropsType> = async ({params}) => {
    const id = (await params).id;
    console.log(id)

    const user = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then((response) => response.json());

    return (
        <div>
            {
                JSON.stringify(user)
            }
        </div>
    );
};

export default UserPage;
