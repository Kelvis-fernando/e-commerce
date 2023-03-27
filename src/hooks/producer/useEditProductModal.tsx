import { FormEvent } from "react";
import { ProducerService } from "../../services/producerService";

export const useEditProductModal = () => {
  const { updateData } = ProducerService();

  const handleEditProduct = async (event: FormEvent, id?: number) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    if (id !== undefined) {
      return await updateData(data, id);
    }

    return console.log(data, "id undefined");
  };

  return {
    handleEditProduct,
  };
};
