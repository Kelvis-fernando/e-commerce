import { LoginModalContainer } from "../../styles/auth/loginModal";

const LoginModal = () => {
  return (
    <LoginModalContainer>
      <h1>Olá, seja bem vindo</h1>
      <h3>Entre na sua conta</h3>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Entrar</button>
      </form>
      <h2>Não tem uma conta? cadastre-se</h2>
      <h2>Esqueceu a senha??</h2>
    </LoginModalContainer>
  );
};

export default LoginModal;
