// Types / Interfaces
type SelectInputProps = {
    value: string;
    name: string;
    options: { label?: string; value: string }[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    className?: string;
};

const SelectInput = ({ value, name, options, onChange, className = "" }: SelectInputProps) => {
    return (
        <select
            name={name}
            value={value}
            className={
                className
                    ? className
                    : `h-full w-full rounded-md border border-gray-500 bg-secondary-bg py-2 pl-2 text-sm text-gray-400 outline-none`
            }
            onChange={onChange}
        >
            {options.map((opt, ind) => {
                return (
                    <option key={999999 + ind} className="bg-secondary-bg outline-none" value={opt.value}>
                        {opt.label || opt.value}
                    </option>
                );
            })}
        </select>
    );
};
export default SelectInput;
