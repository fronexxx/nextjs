import type {Metadata} from "next";


export const metadata: Metadata = {
    title: "PostsLayout metadata",
};

interface Props {
    children: React.ReactNode;
}
const PostsLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
}

export default PostsLayout;
