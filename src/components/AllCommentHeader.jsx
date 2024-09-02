import { Button } from "react-bootstrap";
import "./AllCommentHeader.css";
import { NavLink } from "react-router-dom";
import commentlogo from "../assets/allcommentheaderimage.png";

function AllCommentHeader() {
  return (
    <div className="all-comment-header-shell">
      <div className="all-comment-container">
        <div className="row">
          <div className="col-10">
            <NavLink to="/" className="all-comment-tags">
              Anasayfa
            </NavLink>
            <span style={{ color: "#fff" }}>›</span>&emsp;
            <NavLink className="all-comment-tags">
              Bizi Katılımcılardan Dinle
            </NavLink>
            <h1 className="all-comment-header">
              Bizi <span style={{ color: "#00c26d" }}>Katılımcılardan</span> Dinle
            </h1>
            <p className="all-comment-header-text">
              Yeni mezun adayların yeteneklerini geliştirmelerini ve yeni iş
              fırsatlarına ulaşmalarını hedefleyen Techcareer.net'i,
              etkinliklerine katılan birçok adaydan dinleyin.
            </p>
            <Button variant="success" className="all-comment-button">
              Keşfet
            </Button>
          </div>
          <div className="col-2 comment-logo">
            <img src={commentlogo} alt="comment logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllCommentHeader;
