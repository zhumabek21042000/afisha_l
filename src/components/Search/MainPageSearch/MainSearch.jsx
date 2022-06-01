import React, { useEffect } from "react";
import { Button, Modal } from "semantic-ui-react";

function MainSearch(props) {
  const [open, setOpen] = React.useState(props.status);
  // useEffect(() => {
  //   setOpen(props.status);
  // });
  return (
    <Modal
      closeIcon
      centered={false}
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>Show Modal</Button>}
    >
      <Modal.Header>Thank you!</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          Your subscription has been confirmed
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </Modal.Actions>
    </Modal>
  );
}

export default MainSearch;
