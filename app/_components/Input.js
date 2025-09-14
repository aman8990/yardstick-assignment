function Input({
  label,
  id,
  type,
  register,
  errors,
  value,
  disabled,
  required = false,
  placeholder,
  validationRules = {},
  autoComplete = 'on',
  onChange,
}) {
  return (
    <div>
      <label className="text-lg text-gray-200 font-medium">
        {label}{' '}
        <span className="text-red-500 text-sm">{errors?.[id]?.message}</span>
      </label>
      <div>
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          autoComplete={autoComplete}
          required={required}
          {...(register ? register(id, validationRules) : { value, onChange })}
          className={`w-full text-gray-900 bg-gray-200 outline-none block form-input px-2 py-1 ${
            disabled ? 'bg-blue-100 text-gray-500 cursor-not-allowed' : ''
          }`}
        />
      </div>
    </div>
  );
}

export default Input;
