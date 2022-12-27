import "./spinner_styles.css";
interface SpinnerProps {
  id?: string;
  isMobile?: boolean;
}

export const CustomSpinner = ({ id, isMobile }: SpinnerProps) => {
  return (
    <div
      id={id}
      className={isMobile ? "lds-roller roller-mobile" : "lds-roller"}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
