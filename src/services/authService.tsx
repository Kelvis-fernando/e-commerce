import axios from "axios";

const authService = () => {
  const loginRequest = async (loginData: {
    [k: string]: FormDataEntryValue;
  }) => {
    try {
      const result = await axios.post(
        "https://localhost:7064/api/v1/user/login",
        { Email: loginData.email, Password: loginData.password }
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const registerRequest = async (registerData: {
    [k: string]: FormDataEntryValue;
  }) => {
    try {
      const result = await axios.post(
        "https://localhost:7064/api/v1/user/register",
        {
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
          confirmPassword: registerData.confirmPassword,
          typeOfUser: registerData.typeOfUser,
        }
      );
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const forgotPasswordRequest = () => {};

  return { loginRequest, registerRequest, forgotPasswordRequest };
};

export default authService;
