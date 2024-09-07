import logo from "../assets/logo.png";
import "./Header.css";
import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  InputGroup,
} from "react-bootstrap";
import { BsSearch, BsArrowLeft } from "react-icons/bs"; // İkonlar için react-icons kullanımı

function Header() {
  const [expanded, setExpanded] = useState(false);
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  // Ekran boyutuna göre isMobile state'ini güncelleyen efekt
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);

    // Component unmount olduğunda event listener'ı kaldır
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="outer-shell">
      {/* Arama ikonuna tıklandığında gösterilecek tam ekran arama alanı */}
      <div className="header-container">
        {searchExpanded && (
          <div className="fullscreen-search">
            <Button
              variant="link"
              onClick={() => setSearchExpanded(false)}
              className="back-button"
            >
              <BsArrowLeft size={30} />
            </Button>
            <Form className="fullscreen-search-form">
              <FormControl
                type="search"
                placeholder="Etkinlik, İş İlanı, Blog Ara"
                aria-label="Search"
              />
            </Form>
          </div>
        )}
        {/* Navbar */}
        <Navbar expand="lg" expanded={expanded} className="techcareer-navbar">
          <div className="d-flex align-items-center">
            {/* Toggle Button */}
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            {/* Logo */}
            <Navbar.Brand href="/" className="ms-2">
              <img src={logo} alt="Techcareer Logo" className="navbar-logo" />
            </Navbar.Brand>
          </div>
          {/* Collapse */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Search Bar: Sadece geniş ekranlarda göster */}
            {!isMobile && (
              <Form className="d-flex mx-auto navbar-search">
                <InputGroup>
                  {/* Sol tarafta arama ikonu eklemek için InputGroup kullanımı */}
                  <InputGroup.Text id="basic-addon1">
                    <BsSearch />
                  </InputGroup.Text>
                  <FormControl
                    type="search"
                    placeholder="Etkinlik, İş İlanı, Blog Ara"
                    className="me-2"
                    aria-label="Search"
                  />
                </InputGroup>
              </Form>
            )}
            <Nav className="ms-auto">
              <NavDropdown title="Etkinlikler" id="basic-nav-dropdown">
                <NavDropdown.Item href="#bootcamp">Bootcamp</NavDropdown.Item>
                <NavDropdown.Item href="#hackathons">
                  Hackathons
                </NavDropdown.Item>
                <NavDropdown.Item href="#hiringchallenge">
                  Hiring Challenge
                </NavDropdown.Item>
                <NavDropdown.Item href="/allevents">
                  Tüm Etkinlikler
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#jobs">İş İlanları</Nav.Link>
              <Nav.Link href="/courses">
                <span style={{ color: "#00c26d" }}>●</span>Eğitimler
              </Nav.Link>
              <NavDropdown title="Komünite" id="community-dropdown">
                <NavDropdown.Item href="#join">
                  Komüniteye Katıl
                </NavDropdown.Item>
                <NavDropdown.Item href="#tdc">TDC</NavDropdown.Item>
                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                <NavDropdown.Item href="#podcast">Podcast</NavDropdown.Item>
                <NavDropdown.Item href="/careerguide">
                  Kariyer Rehberi
                </NavDropdown.Item>
                <NavDropdown.Item href="#tech-dictionary">
                  Teknik Sözlük
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#companies">Şirketler</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {/* Giriş Butonu ve Koşullu Arama İkonu */}
          <div className="d-flex align-items-center">
            {/* Arama İkonu: Sadece mobil görünümde gösterilir */}
            {isMobile && (
              <Button
                variant="success"
                className="ms-3"
                onClick={() => setSearchExpanded(true)}
              >
                <BsSearch size={20} />
              </Button>
            )}
            <Button variant="success" className="ms-3">
              Giriş / Üye Ol
            </Button>
          </div>
        </Navbar>
      </div>
    </div>
  );
}
export default Header;
