import "./Button.scss";

interface ButtonProps {
  text: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {text} {children}
    </button>
  );
};

export default Button;
