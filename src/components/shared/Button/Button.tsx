import "./Button.scss";

interface ButtonProps {
  text?: string;
  className?: string;
  onClick: () => void;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  onClick,
  children,
}) => {
  return (
    <button className={className ? className : "button"} onClick={onClick}>
      {text} {children}
    </button>
  );
};

export default Button;
