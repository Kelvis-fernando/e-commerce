import { useEffect, useState } from "react";
import LoginModal from "../components/auth/LoginModal";
import Modal from "../components/layout/Modal";
import Navbar from "../components/layout/Navbar";
import { useModal } from "../hooks/layout/useModal";
import { Main } from "../styles/app";
import { configureStore } from "@reduxjs/toolkit";
import { userStates, setUserLoged, setUserLogout } from "../states/userStates";

const Producer = () => {
  const { isModalOpen, setIsModalOpen } = useModal();
  const store = configureStore({
    reducer: userStates.reducer,
  });

  const [userIsLoged, setUserIsLoged] = useState(store.getState().userLoged);

  useEffect(() => {
    userIsLoged ? setIsModalOpen(false) : setIsModalOpen(true);
  }, [setIsModalOpen, store, userIsLoged]);

  const handleUserLoged = () => {
    store.dispatch(setUserLoged());
    setUserIsLoged(store.getState().userLoged);
  };

  const handleUserLogout = () => {
    store.dispatch(setUserLogout());
    setUserIsLoged(store.getState().userLoged);
  };

  return (
    <Main>
      <Navbar />
      {userIsLoged ? (
        <div>
          <h1>Bem vindo</h1>
        </div>
      ) : (
        <div>
          <Modal isOpen={isModalOpen}>
            <LoginModal />
          </Modal>
        </div>
      )}
    </Main>
  );
};

export default Producer;
