import "./Search.scss";
import class8Img from "../../Images/class8Img.png";
import { MdClose } from "react-icons/md";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="search for Item" />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={class8Img} alt="" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">Product description</span>
               
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
