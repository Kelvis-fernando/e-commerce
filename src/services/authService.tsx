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
      return result;
    } catch (error) {
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
      return result;
    } catch (error) {
      return error;
    }
  };
  const forgotPasswordRequest = async (email: {
    [k: string]: FormDataEntryValue;
  }) => {
    try {
      const result = await axios.post(
        `https://localhost:7064/api/v1/user/forgot-password?email=${email.email}`
      );
      return result;
    } catch (error) {
      return error;
    }
  };

  return { loginRequest, registerRequest, forgotPasswordRequest };
};

export default authService;
