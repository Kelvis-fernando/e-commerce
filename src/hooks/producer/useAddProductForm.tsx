import { FormEvent } from "react";
import { ProducerService } from "../../services/producerService";

const useAddProductForm = () => {
  const { postData } = ProducerService();

  const handleCreateProduct = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    postData(data);
  };
  return { handleCreateProduct, postData };
};

export default useAddProductForm;
