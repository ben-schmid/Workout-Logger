import logo from "./images/logo.png"

function SiteLogo() {
    return <img
        src={logo} 
        alt="Logo" 
        style={{ width: "75px", height: "auto" }}
        />;
  }

  export default SiteLogo;