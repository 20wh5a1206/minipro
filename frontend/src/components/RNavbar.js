import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

function HomeNavbar() {
    const clientId = '386932037035-k8v833noqjk7m4auae0t83vnkrqvvg3t.apps.googleusercontent.com';
    const logOut = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        let tokens = localStorage.getItem("token")
        if(tokens){
            localStorage.removeItem("token")
        }
        if (auth2 != null) {
          auth2.signOut().then(
            auth2.disconnect().then(this.props.onLogoutSuccess)
          )
        }
      
};
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="/home"><img
              src={require("./static/bvrit-logo.jpg")}
              width="80"
              height="40"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/publications">Publications</Nav.Link>
            <Nav.Link href="/insert">New Publication</Nav.Link>
          </Nav>
          <Nav>
          <GoogleLogout clientId={clientId} render={renderProps => (
       <Nav.Link href="/login"onClick={renderProps.onClick}>Logout</Nav.Link>
    )}buttonText="Log out" onLogoutSuccess={logOut} />
          </Nav>

        </Container>
      </Navbar>
    </>
  );
}

export default HomeNavbar;