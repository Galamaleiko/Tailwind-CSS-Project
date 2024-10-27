const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullwidth }) => {
    return (
        <button className={`flex justify-center rounded-full items-center gap-2 px-7 py-4 border font-montserrat text-lg 
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :
                "bg-coral-red   text-white border-coral-red"} 
                leading-none
                ${fullwidth && 'w-full' }`}>
            {label}

            {iconURL && <img src={iconURL}
                alt="arrow right icon"
                className="ml-2 rounded-full w-5 h-5"
            />}



        </button>
    )
}

export default Button