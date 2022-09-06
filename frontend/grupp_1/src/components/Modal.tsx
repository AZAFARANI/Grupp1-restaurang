import { Div } from "./Styled/Div";
import { Icon } from "./Styled/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Span } from "./Styled/Span";
import { Button } from "./Styled/Button";
import { useEffect, useState } from "react";

export const Modal = () => {
  const [modalConfirm, setmodalConfirm] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("confirm");
    if (stored) {
      const hasAcceptedGDPR: boolean = JSON.parse(stored);
      if (hasAcceptedGDPR) {
        setShowModal(false);
      } else {
        setShowModal(true);
      }
    } else setShowModal(true);
  }, [modalConfirm]);

  function store(accepted: boolean) {
    localStorage.setItem("confirm", JSON.stringify(accepted));
  }

  return (
    <Div
      position="fixed"
      bottom="10px"
      left="50%"
      transform="translateX(-50%)"
      borderRadius="15px"
      backgroundColor="white"
      width="auto"
      height="auto"
      className={`${showModal ? "show" : "hidden"} `}
    >
      <Div alignItems="flex-end" justifyContent="center" height="auto">
        <Icon
          right="15px"
          top="10px"
          cursor={"pointer"}
          icon={faXmark}
          onClick={() => {
            setShowModal(modalConfirm);
            store(false);
          }}
        ></Icon>
      </Div>
      <Span width="70%" padding="20px 20px">
        We use our own third-party cookies to personalize content and to analyze
        web traffic. Read more about cookies
      </Span>
      <Div
        flexDirection="row"
        justifyContent="center"
        gap="20px"
        padding="10px 0"
      >
        <Button
          background="#A3A380"
          width="40%"
          height="40px"
          onClick={() => {
            setmodalConfirm(true);
            setShowModal(modalConfirm);
            store(true);
          }}
        >
          <Span fontSize="14pt">Accept</Span>
        </Button>
        <Button
          width="30%"
          height="40px"
          background="#4c4c4c"
          onClick={() => {
            setShowModal(modalConfirm);
            store(false);
          }}
        >
          <Span fontSize="14pt">Reject</Span>
        </Button>
      </Div>
    </Div>
  );
};
