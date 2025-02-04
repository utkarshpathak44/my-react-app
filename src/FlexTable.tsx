const FlexTable = () => {
  const tableHeader = ``;

  return (
    <>
      <div className="w-full border border-stone-400 rounded h-auto  overflow-hidden">
        <div className="w-full flex flex-row h-30">
            <div>
                <input type="checkbox" />
            </div>
            <div>
                Document name
            </div>
            <div>
                Status
            </div>
            <div>
                lastModified
            </div>
        </div>
      </div>
    </>
  );
};


export default FlexTable;