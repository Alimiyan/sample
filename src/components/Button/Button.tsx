interface ButtonProps {
    children: string | JSX.Element,
    bgColor?: string,
    customClass?: string,
    validate: () => void,
}

function Button({ children, bgColor, customClass, validate }: ButtonProps) {
    return (
        <button
            className={`btn ${bgColor} ${customClass}  text-white normal-case hover:bg-blue-800 font-bold `}
            onClick={validate}
        >
            {children}
        </button>
    )
}

export default Button