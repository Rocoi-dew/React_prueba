function Boton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`
        px-6
        py-3
        bg-blue-600
        text-white
        text-lg
        font-semibold
        rounded-xl
        border-2
        border-blue-600
        shadow-lg
        shadow-blue-500/30
        transition-all
        duration-300
        hover:bg-blue-700
        hover:border-blue-700
        hover:-translate-y-1
        hover:shadow-xl
        hover:shadow-blue-500/40
        active:translate-y-0
        focus:outline-none
        focus:ring-4
        focus:ring-blue-300
        disabled:opacity-50
        disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  )
}

export default Boton