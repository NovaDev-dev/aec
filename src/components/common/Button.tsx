export function Button({ className = "", children, onClick, disabled }: any) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
                px-3 py-2 md:px-4 md:py-3
                rounded-md
                font-bold
                shadow-md

                md:text-lg text-xs 

                cursor-pointer
                transition-all duration-200 ease-in-out

                hover:opacity-90
                hover:shadow-md

                active:translate-y-0
                active:shadow-sm

                whitespace-nowrap

                ${className}
            `}
        >
            {children}
        </button>
    );
}