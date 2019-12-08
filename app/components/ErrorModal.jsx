import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

export default function ErrorModal({message, onClose}) {
    return (
        <Modal isOpen={true} centered={true}>
            <ModalHeader>ERROR</ModalHeader>
            <ModalBody>
                {message}
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={onClose}>Close</Button>{' '}
            </ModalFooter>
        </Modal>
    )
}
