
import { useState } from "react";
import { commentForm } from "./FormModel";


function Addcomment({ onSubmit2, onClose2 }) {
   
   const [commentContent, setCommentContent] = useState({
      [commentForm.text]: "",
   })

   const onChangeHandlerCommentText = (e) => {
      const { value, name } = e.target;
      setCommentContent({...commentContent, [name]: value});
   }

   return (
         <form onSubmit={onSubmit2}>
            <div>
               <input className={"gino"}
               name={commentForm.text}
               id={commentForm.text}
               value={commentContent[commentForm.text]}
               onChange={onChangeHandlerCommentText}>
               </input>
            </div>
            <div className={"buttonsContainers"}>
               <button type="button" onClick={onClose2}>
                  CHIUDI
               </button>
               <button type="submit" >
                  COMMENTA
               </button>
         </div>
      </form>
   );
}

export default Addcomment;