import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment, editComment } from "../../actions/comments";
import moment from "moment";

const DisplayComments = ({
  cmt_id,
  userId,
  commentOn,
  commentBody,
  userCommented,
}) => {
  const [edit, setEdit] = useState(false);
  const [cmtBdy, setcmtBdy] = useState("");
  const [cmtId, setcmtId] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUserReducer);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!cmtBdy) {
      alert("Type your comments");
    } else {
      dispatch(
        editComment({
          id: cmtId,
          commentBody: cmtBdy,
        })
      );

      setcmtBdy("");
    }
    setEdit(false);
  };

  const handleEdit = (ctId, ctBdy) => {
   if(currentUser)
    {
      setEdit(true);
      setcmtId(ctId);
      setcmtBdy(ctBdy);
    }
    else{
          alert("plz login to edit")

    }
  };

  const handlDelete=(id)=>{
if(currentUser)
{
  dispatch(deleteComment(id))

} 
else{
      alert("plz login to delete")

} }

  return (
    <div className="comment_container_outer">
      {edit ? (
        <form
          onSubmit={handleOnSubmit}
          className="comments_sub_form comments_sub_form_2"
        >
          <div className="comment_box">
            <div className="comment_profile_logo ">L</div>

            <div className="comment_input">
              <input
                value={cmtBdy}
                type="text"
                placeholder="Add a comment..."
                className="comment_input_box"
                onChange={(e) => setcmtBdy(e.target.value)}
              />
            </div>
          </div>{" "}
          <div className="comment_btns">
            <div
              className="comment_cancel_btn"
              onClick={() => setEdit(false) }
            >
              Cancel
            </div>
            <button className={`comment_btn`}>Save</button>
          </div>
        </form>
      ) : (
        <div className="comment">
          <div className="comment_profile_logo">L</div>

          <div className="comment_section">
            <p className="usercommented">
              @{userCommented} commented {moment(commentOn).fromNow}
            </p>
            <p className="comment_body">{commentBody}</p>
          </div>
        </div>
      )}

      {currentUser?.result._id === userId && (
        <div className="comment_edit_btns">
          <button onClick={()=>handlDelete(cmt_id)} className="comment_delete_btn">Delete</button>
          <button
            className="comment_edit_btn"
            onClick={() => handleEdit(cmt_id, commentBody)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default DisplayComments;
