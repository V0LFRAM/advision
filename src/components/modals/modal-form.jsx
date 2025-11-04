const ModalForm = ({ setIsOpenModalForm }) => {
  return (
    <div className="absolute z-[1000] top-0 left-0 w-[100vw] h-[100vh] bg-[black]">
      <h2>Modal Form</h2>
      <button onClick={() => setIsOpenModalForm(false)}>x</button>
    </div>
  );
};

export { ModalForm };
