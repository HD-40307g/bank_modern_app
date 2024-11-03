interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
};

const Button = ({ className = '', children='Get Started' }: ButtonProps) => (
  <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-lg text-primary outline-none ${className} rounded-lg`}>{children}</button>
  );

export default Button;
