export const BotonGradiente = ({
    children,
    type = "button",
    ...props
}) => {
    return (
        <button
            type={type}
            {...props}
            className="text-heading bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5"
        >
            {children}
        </button>
    )
}