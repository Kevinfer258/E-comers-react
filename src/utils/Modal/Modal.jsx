import "./modal.css";

const Modal = ({ showModal, onClose, children }) => {
  return (
    <>
      {showModal && (
        <div className="modal">
          <div className="modal__container">
            <i className="bx bx-x" onClick={() => onClose(false)}></i>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
