import React, {useState} from "react";
import "./styles.css";
import SignInput from "../../components/SignInput";
import SignButtom from "../../components/SignButton";
import ProfileButtom from "../../components/ProfileButton";
import HomeHeader from "../../components/HomeHeader";
import SeeProfile from "../../components/SeeProfile";
import Profile from "../../components/Profile";


const Home = (props) => {

  const [status, setState] = useState("Não");
  const [profileName, setProfileName] = useState({nome: "Matheus", zap: "8388889999", 
  email: "matheus@gmail.com", cpf:"11111111111", aniversario: "14/12/2001"});

  const [showProfile, setShowProfile] = useState(false);

  
  function handleView () {
  
     setShowProfile(true);
      
  };
  
  const submitEdit = () => {

     setShowProfile(false);

   };

    return (
        <div id = "home">
          <div id = "title">
          <HomeHeader />
          </div>
          
          <div id = "profile">

          <ProfileButtom onClick={handleView} text="VISUALIZAR PERFIL" />

          { showProfile ? ( 
            <div>
    
            <Profile name = {profileName.nome} zap = {profileName.zap} email = {profileName.email}
             cpf = {profileName.cpf} aniversario = {profileName.aniversario}> </Profile>
      
            </div>
          ) : (
            <></>
          )}
        
          <div> </div>
          <ProfileButtom onClick={submitEdit} text="EDITAR PERFIL" />
          
          </div>        
        </div>     
    );
  };

  
  export default Home;