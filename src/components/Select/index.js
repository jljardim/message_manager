const Select = ({titleLabel, options, value, onChange}) => {
    return (
      <>
        <label className="label_select_message">{titleLabel}</label>
        <select value={value} onChange={onChange}>
          <option></option>
          {options.map((option) => (
            <>
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            </>
          ))}
        </select>
      </>
    );
}

export default Select;