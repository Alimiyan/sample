interface InputBoxProps {
    label?: string,
    type: string,
    placeholder?: string,
    customClass?: string,
    state: string | any,
    setState: (val: string) => void,
    onBlur?: () => void
}

function InputBox({ label, type, placeholder, customClass, state, setState, onBlur }: InputBoxProps) {

    return (
        <>
            {label &&
                <label className="label mt-3">
                    <span className="label-text font-bold">{label}</span>
                </label>
            }
            <input
                type={type}
                className={`input input-bordered ${customClass}`}
                placeholder={placeholder}
                value={state}
                onChange={(e) => setState(e.target.value)}
                onBlur={onBlur}
            />
        </>
    )
}

export default InputBox