const GlowButton = ({ btnText, btnIcon, handleClick }) => {
  return (
    <div className="relative w-fit group transition-all">
      <div className="z-10 absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 blur-md opacity-75 group-hover:opacity-100 group-hover:duration-150 duration-1000 animate-tilt" />
      <button
        onClick={handleClick}
        className="relative bg-stone-900 px-8 py-2 rounded-xl z-20 tracking-wider items-center flex gap-2 active:bg-stone-800 group-hover:text-purple-300 duration-150"
      >
        {btnText} {btnIcon}
      </button>
    </div>
  );
};

export default GlowButton;
