import { FormEvent, useState } from "react";
import { ProducerService } from "../../services/producerService";
import { getFormData } from "../../utils/getFormData";

const useAddProductForm = () => {
  const { postData } = ProducerService();
  const [showToastError, setShowToastError] = useState(false);

  const handleCreateProduct = async (event: FormEvent) => {
    const data = await getFormData(event);
    const result = await postData(data);
    return result;
  };
  return { handleCreateProduct, postData, showToastError, setShowToastError };
};

export default useAddProductForm;
