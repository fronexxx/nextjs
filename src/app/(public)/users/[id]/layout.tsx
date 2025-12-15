import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "UserLayout metadata",
};

interface Props {
    children: React.ReactNode;
}
const UserLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default UserLayout;
