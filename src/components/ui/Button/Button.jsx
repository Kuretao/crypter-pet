


export const Button = ({additionalClass, text, maxWidth}) =>{
    let btnClass;
    switch(additionalClass){
        case "transparent":
            btnClass = "button-transparent";
            break;
            case "dark":
                btnClass = "button--dark";
                break;
                case "white":
                    btnClass = "button--white";
                    break;
        default:
            btnClass = '';
    }
    return(
        <>
            <button className={`btn ${btnClass}`} style={{maxWidth}}>{text}</button>
        </>
    );
}