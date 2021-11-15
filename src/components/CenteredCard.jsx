import "./style.css";
const CenteredCard = ({ children }) => {
  return (
    <div className="centeredcard">
      <span>{children}</span>
    </div>
  );
};

export default CenteredCard;
