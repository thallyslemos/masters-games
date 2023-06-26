type TextButtonProps = {
  onClickButton: () => any;
};
export function TextButton({ onClickButton }: TextButtonProps) {
  return (
    <button
      className="px-4 text-white bg-BLUE-2 border-l rounded "
      onClick={onClickButton}
    >
      Search
    </button>
  );
}
