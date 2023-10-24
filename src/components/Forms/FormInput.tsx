/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
const FormInput = ({
  name,
  type,
  size,
  value,
  placeholder,
  label,
  defaultValue,
}: any) => {
  const { control } = useFormContext();
  return (
    <div>
      <span>{label ? label : null}</span>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            placeholder={placeholder}
            size={size}
            type={type}
            {...field}
            defaultValue={defaultValue ? defaultValue : ""}
            value={value ? value : field.value}
            className="input input-bordered input-info w-full max-w-xs"
          />
        )}
      />
    </div>
  );
};

export default FormInput;
