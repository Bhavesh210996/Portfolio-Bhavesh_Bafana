interface ButtonProps {
    className: string;
    onClick: () => void;
    children: React.ReactNode;
}
export const Button = ({className, onClick, children}: ButtonProps) => {
    return (
        <button className={className} onClick={onClick}>{children}</button>
    )
}