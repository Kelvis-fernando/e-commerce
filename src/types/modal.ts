export interface ModalProps {
  title?: string;
  message?: string;
  close?: () => void;
  open?: () => void;
}
