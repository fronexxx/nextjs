import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "CommentsLayout metadata",
};

interface Props {
    children: React.ReactNode;
}
const CommentsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default CommentsLayout;
