interface customedButtonInterface {
  className?: string;
  onClick?: () => void;
  label: string;
}

const CustomedButton = (props: customedButtonInterface) => {
  return <button {...props}> {props.label} </button>;
};

export default CustomedButton;
