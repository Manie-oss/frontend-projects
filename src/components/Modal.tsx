import { useState, useRef } from "react";

// style for modal-content
const ModalContentStyle = {
  border: "2px solid black",
  padding: "1rem",
  margin: "15% auto",
  backgroundColor: "white",
  width: "80%",
};
// style for modal
const ModalOverlayStyle = {
  position: "fixed",
  height: "100%",
  width: "100%",
  top: "0",
  left: "0",
};

function ModalContent({ setIsModalOpen }) {
    const ref = useRef(null);

  return (
    <div
      ref={ref}
      style={ModalOverlayStyle}
      onClick={(e) => {
        if(ref.current == e.target){
            setIsModalOpen(false);
        }
      }}
    >
      <div style={ModalContentStyle}>
        <h4>Modal</h4>
        <p>modal content</p>
      </div>
    </div>
  );
}

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(isModalOpen);

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "grey" }}>
        <button
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
        >
          {isModalOpen ? "Close Modal" : "Open Modal"}
        </button>
      </div>
      {isModalOpen && <ModalContent setIsModalOpen={setIsModalOpen} />}
    </>
  );
}

export default Modal;
