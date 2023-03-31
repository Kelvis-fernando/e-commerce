import { FormEvent, useState } from "react";
import { ProducerService } from "../../services/producerService";

const useAddProductForm = () => {
  const { postData } = ProducerService();

  const [showToastError, setShowToastError] = useState(false);

  const handleCreateProduct = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    const result = await postData(data);
    return result;
  };
  return { handleCreateProduct, postData, showToastError, setShowToastError };
};

export default useAddProductForm;
