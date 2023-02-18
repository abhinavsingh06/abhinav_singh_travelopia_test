import React from "react";
import classnames from "classnames";

const Input = ({
  type = "text",
  name,
  label,
  value,
  onChange,
  placeholder,
  disabled = false,
  required = true,
  className = "",
}) => {
  return (
    <div className="mt-6">
      {label && (
        <label
          className="block text-sm font-medium
              leading-5 text-bb-gray-700"
        >
          {label}
        </label>
      )}
      <div className="mt-1 rounded-md shadow-sm">
        <input
          name={name}
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={classnames(
            "block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
            [className]
          )}
        />
      </div>
    </div>
  );
};

export default Input;