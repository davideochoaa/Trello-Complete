

function Adduser({onClose, deleteFunction}) {
   return (
      <div>
         <button type="button" onClick={onClose}>
            CHIUDI
         </button>
         <button type="button" onClick={deleteFunction}>
            CANCELLA CARD
         </button>
      </div>
   )
}

export default Adduser;