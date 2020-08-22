import React, { useState, useEffect } from "react";

export const ModalHeader = (props) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{props.title}</h5>
      <button
        onClick={() => props.handleClose()}
        type="button"
        className="close"
        data-dismiss="modal"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
      {props.children}
    </div>
  );
};

export const ModalBody = (props) => {
  return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return (
    <div className="modal-footer d-flex  justify-content-around">
      {props.children}
    </div>
  );
};

const ModalContainer = ({ title, isOpen, children, closeModal }) => {
  const [modalShow, setModalShow] = useState("");
  const [display, setDisplay] = useState("none");

  const handleClose = () => {
    setModalShow("");
    setDisplay("none");
    closeModal();
  };

  useEffect(() => {
    const openModal = () => {
      setModalShow("show");
      setDisplay("block");
    };
    isOpen ? openModal() : closeModal();
  }, [isOpen, closeModal]);

  return (
    <div className="container" style={{ maxHeight: '60vh' }}>
      <div
        className={"modal fade " + modalShow}
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
        style={{ display }}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <ModalHeader handleClose={handleClose} title={title} />
            <ModalBody>{children}</ModalBody>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalContainer;
