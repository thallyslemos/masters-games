type TextButtonProps = {
  title: string;
  onClickButton: () => any;
};
export function TextButton({ onClickButton, title= "Button" }: TextButtonProps) {
  return (
    <button
      className="px-4 text-white bg-BLUE-2 border-l rounded "
      onClick={onClickButton}
    >
      {title}
    </button>
  );
}
