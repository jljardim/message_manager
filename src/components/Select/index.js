const Select = ({titleLabel, options, value, onChange}) => {
    return (
      <>
        <label>{titleLabel}</label>
        <select value={value} onChange={onChange}>
          
          {options.map((option) => (
            <>
            <option></option>
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