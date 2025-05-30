import search from "./../../../assets/images/logo.png"

export const Logo = ({size}) => {
    let sizeClass;

    switch (size) {
        case 'small':
            sizeClass = 'logo--small';
            break;
        case 'medium':
            sizeClass = 'logo--medium';
            break;
        case 'large':
            sizeClass = 'logo--large';
            break;
        default:
            sizeClass = '';
    }
    
    return (
        <>
            <img src={search} className={`logo ${sizeClass}`} alt=""/>
        </>
    )
}