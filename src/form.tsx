const Form = () => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.currentTarget);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleCopy = (e: React.ClipboardEvent<HTMLInputElement>) => {
    console.log("copped");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Simple text
        <input
          type="text"
          name="text"
          onFocus={handleFocus}
          onCopy={handleCopy}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
