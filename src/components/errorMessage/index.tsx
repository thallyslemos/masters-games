export function ErrorMessage({errorTitle = "Error", errorMessage = "Message"}) {
  return (
    <div role="alert" className="m-auto px-2">
      <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
        {errorTitle}
      </div>
      <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}
