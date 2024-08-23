import logo from "../assets/logo.png";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="d-flex align-items-center w-100">
            {/* Logo ve Arama Kısmı */}
            <Navbar.Brand href="#home" className="me-3">
              <img src={logo} alt="techcareer logo" />
            </Navbar.Brand>
            <Form className="d-flex flex-grow-1 me-3">

              <FormControl
                type="search"
                placeholder="Etkinlik, İş İlanı, Blog Ara"
                className="me-2"
                aria-label="Etkinlik, İş İlanı, Blog Ara"
              ></FormControl>
            </Form>
            {/* Navbar Toggler ve Diğer Elemanlar */}
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                <NavDropdown title="Etkinlikler" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#bootcamp">Bootcamp</NavDropdown.Item>
                  <NavDropdown.Item href="#hackathons">
                    Hackathons
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#hiringchallenge">
                    Hiring Challenge
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#tümetkinlikler">
                    Tüm Etkinlikler
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#işilanları">İş İlanları</Nav.Link>
                <Nav.Link href="#eğitimler">
                  <span style={{ color: "#00C26D" }}>●</span> Eğitimler
                </Nav.Link>
                <NavDropdown title="Komünite">
                  <NavDropdown.Item href="#komüniteyetıl">
                    Komüniteye Katıl
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#tdc">TDC</NavDropdown.Item>
                  <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                  <NavDropdown.Item href="#podcast">Podcast</NavDropdown.Item>
                  <NavDropdown.Item href="#kariyerrehberi">
                    Kariyer Rehberi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#tekniksözlük">
                    Teknik Sözlük
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#şirketler">Şirketler</Nav.Link>
              </Nav>

              <div className="me-auto">
                <Button
                  style={{ backgroundColor: "#00C26D", borderColor: "white" }}
                >
                  Giriş / Üye Ol
                </Button>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
