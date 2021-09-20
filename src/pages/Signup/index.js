import React, { useState } from "react";
import SignInput from "../../components/SignInput";
import SignButtom from "../../components/SignButton";
import InvalidityMsg from "../../components/InvalidityMsg";
import "./styles.css";
import { validateEmail, validatePassword, validateName, validateCpf} from "../../util/validation";


/*   <SignInput label="Especialidades" type = "especialidades" />
          <SignInput label="Cargo Atual" type = "cargoAtual" /> 
          <SignInput label="Redes Sociais" type = "redesSociais" /> 
          <SignInput label="Foto" type = "foto" /> 
*/

const Signup = () => {

    // criando os estados
  const [email, setEmail] = useState({ value: "", invalidity: "" });
  const [password, setPassword] = useState({ value: "", invalidity: "" });
  const [name, setName] = useState({ value: "", invalidity: "" });
  const [cpf, setCpf] = useState({ value: "", invalidity: "" });

  // funcoes para mudar os estados
  const changeEmail = (e) => {
    const value = e.target.value;

    setEmail({ ...email, value });
    // como email eh um objeto { value: '', indalidity: '' },
    // vamos clonar as propriedades do objeto usando o operador spread { ...email },
    // e atribuir o novo valor de value { ...email, value }
  };

  const changePassword = (e) => {
    const value = e.target.value;

    setPassword({ ...password, value });
  };

  const changeName = (e) => {
    const value = e.target.value;

    setName({ ...name, value });
  };

  const changeCpf = (e) => {
    const value = e.target.value;

    setCpf({ ...cpf, value });
  };

  const validateForm = () => {
    const invalidityEmail = validateEmail(email.value);
    const invalidityPassword = validatePassword(password.value);
    const invalidityName = validateName(name.value);
    const invalidityCpf = validateCpf(cpf.value);

    setEmail({ ...email, invalidity: invalidityEmail });
    setPassword({ ...password, invalidity: invalidityPassword });
    setName({ ...name, invalidity: invalidityName });
    setCpf({ ...cpf, invalidity: invalidityCpf });

    return !invalidityEmail && !invalidityPassword && !invalidityName && !invalidityCpf ? true : false;
  };

  const submit = () => {
    validateForm()
      // bip bip
    
  };


    return (
      <div id="cadastro">
        <div id = "cadastroBox">
          <span>Cadastro</span>
          <SignInput 
            value={name.value}
            onChange={changeName} 
            label="Nome" 
            type = "name" />
          <InvalidityMsg msg={name.invalidity} />
          <SignInput 
            value={email.value}
            onChange={changeEmail} 
            label="Email"
            type = "email" />
          <InvalidityMsg msg={email.invalidity} />
          <SignInput 
          value={cpf.value}
          onChange={changeCpf} 
          label="CPF" 
          type = "cpf" />
          <InvalidityMsg msg={cpf.invalidity} />
          <SignInput label="WhatsApp" type = "number" />
          <SignInput label="Data de Aniversário" type = "date" />
          <SignInput 
            value={password.value} 
            onChange={changePassword} 
            label="Senha"
            type = "password" 
          />
          <InvalidityMsg msg={password.invalidity} />
          <SignButtom onClick={submit} text = "CADASTRAR" />
        </div>
      </div>
    );
  };
  
  export default Signup;