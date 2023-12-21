interface MatchModal {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const MatchModal = ({ isOpen, onClose, children }: MatchModal) => {
  return (
    isOpen && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-96 rounded bg-white p-8 shadow-lg">
          <button
            className="absolute right-2 top-2 rounded bg-blue-500 px-2 py-1 text-xs text-white"
            onClick={onClose}
          >
            X
          </button>
          <div className="pointer-events-none">{children}</div>
        </div>
      </div>
    )
  );
};

export default MatchModal;
