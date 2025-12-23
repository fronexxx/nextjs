import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/models/IUser";

interface Props {
    params: Promise<{ id: string }>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: "User Page Title" + id
    }
};

const UserPage: FC<Props> = async ({searchParams}) => {

    const {data} = await searchParams;
    let obj = null;
    if (typeof data === 'string'){
        obj = JSON.parse(data) as IUser;
    }

    return (
        <div>
            {
                obj && <>user page content {obj.id} {obj.name} {obj.email}</>

            }
        </div>
    );
};

export default UserPage;
