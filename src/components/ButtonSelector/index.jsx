import AddIcon from '@mui/icons-material/Add';
import "./style.css";

export const ButtonSelector = ({
  isMulti = false,
  onClick,
  options = [],
  value,
}) => {
  const onClickHandler = (option) => {
    if (isMulti) {
      if(value.includes(option.value)) onClick(value.filter( v => v !== option.value)) 
      else onClick([...value, option.value]);
    } else {
      onClick(option.value);
    }
  };
  console.log('buuton',value);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {options.map((option) => {
        return (
          <button
          type='button'
            className={`btn-selector ${
              isMulti
                ? value.includes(option.value)
                  ? "active"
                  : ""
                : value === option.value
                ? "active"
                : ""
            }`}
            key={option.value}
            onClick={onClickHandler.bind(this, option)}
          >
            {option.label}
            { isMulti && <AddIcon />}
          </button>
        );
      })}
    </div>
  );
};
