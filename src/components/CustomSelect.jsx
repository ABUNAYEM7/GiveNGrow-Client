import React, { useContext } from "react";
import Select from "react-select";
import { AuthContext } from "../AuthProvider/AuthProvider";

const CustomSelect = () => {
    const {selectValue,setSelectValue} = useContext(AuthContext)

  const options = [
    { value: "Personal issue", label: "Personal issue" },
    { value: "Startup", label: "Startup" },
    { value: "Business", label: "Business" },
    { value: "Creative ideas", label: "Creative ideas" },
    { value: "Social Work", label: "Social Work" },
  ];

  const customStyles = {
    control: (baseStyles, state) => ({
      ...baseStyles,
      borderColor: state.isFocused ? "#E07A5F" : "#D1D5DB",
      outlineColor: "#E07A5F",
      backgroundColor: state.isFocused ? "#F8E5E1" : "transparent",
      padding: "0.5rem",
      borderRadius: "0.375rem",
      transition: "border-color 0.2s ease, background-color 0.2s ease",
    }),
    menu: (baseStyles) => ({
      ...baseStyles,
      backgroundColor: "#F8E5E1",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      borderRadius: "0.375rem",
    }),
    option: (baseStyles, state) => ({
      ...baseStyles,
      backgroundColor: state.isSelected
        ? "#E07A5F"
        : state.isFocused
        ? "#F8E5E1"
        : "transparent",
      color: state.isSelected ? "#FFFFFF" : "#4A5568",
      padding: "0.5rem",
      borderRadius: "0.375rem",
    }),
    singleValue: (baseStyles, state) => ({
      ...baseStyles,
      color: state.isSelected ? "#B2BEB5" : "#000000",
    }),
  };

  const onchangeHandler =(selectedValue)=>{
    setSelectValue(selectedValue)
  }
console.log(selectValue)
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Campaign Type</span>
      </label>
      <Select
        value={selectValue}
        onChange={onchangeHandler}
        options={options}
        styles={customStyles}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default CustomSelect;
