import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string; // For accessibility
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ariaLabel,
  ...props
}) => {
  // Base Styles
  const baseStyles =
    'rounded-lg font-semibold transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 select-none cursor-pointer disabled:cursor-not-allowed';

  // Responsive Size Variants
  const sizeStyles = {
    sm: 'px-3 py-1 text-sm md:px-4 md:py-2 md:text-base',
    md: 'px-4 py-2 text-base md:px-6 md:py-3 md:text-lg',
    lg: 'px-6 py-3 text-lg md:px-8 md:py-4 md:text-xl',
  };

  // Color Variants
  const variantStyles = {
    primary:
      'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-300',
    secondary:
      'bg-gray-500 text-white hover:bg-gray-600 focus-visible:ring-gray-300',
    danger: 'bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-300',
  };

  return (
    <button
      role="button"
      aria-label={
        ariaLabel || (typeof children === 'string' ? children : 'Button')
      }
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
