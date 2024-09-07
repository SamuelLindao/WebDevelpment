type HeaderOptionProps = {
    text: string;
    link: string;
};

export function HeaderOption({ text, link}: HeaderOptionProps) {
    return (

        <li style={{color:"red"}}>
            <a href={link} style={{color: "red"}}>{text}</a>
        </li>
    );
}
