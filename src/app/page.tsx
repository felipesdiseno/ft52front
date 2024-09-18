"use client";
import Modal from "@/components/inputEventAdministrator/modal";
import { useState } from "react";
import InputEventAd from "@/components/inputEventAdministrator/index";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div>
      <h1>este es el home</h1>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Crear Evento
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <InputEventAd />
      </Modal>
    </div>
  );
}
