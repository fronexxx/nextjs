import {getAllComments} from "@/service/service.api";
import CommentComponent from "@/components/comments/CommentComponent";

const CommentsComponent = async () => {
    const comments = await getAllComments();
    return (
        <div>
            {
                comments.map(comment => <CommentComponent key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default CommentsComponent;
