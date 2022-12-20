import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Document, Page } from "react-pdf";
import { pdfTest } from "../../../assets/pdf";

export function ModalViewDocuments(props) {
  const { show, close } = props;
  return (
    <Modal size="lg" show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Approve parking document</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Document
          file={pdfTest}
          options={{ Worker: "/pdf.worker.js" }}
          renderMode="canvas"
        >
          <Page pageNumber={1} />
        </Document>
      </Modal.Body>
      <Modal.Footer className="justify-content-md-center">
        <Button variant="danger" onClick={close}>
          Reject
        </Button>
        <Button variant="success" onClick={close}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
