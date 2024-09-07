import {HeaderOption} from "./HeaderOption.tsx";

export function Header() {
    return (
        <div style={{
            display: 'flex',
            flexDirection : "row",
            alignItems: "center",
            paddingLeft:"10px",
            gap:"25px",
            height: "10.833vh", width: "100vw",backgroundColor: "#ffffff",
        justifyContent : "center",
        }}

            >
            <ol style={{listStyleType:"none", gap:"25px",alignItems: "center", display:"flex", justifyContent:"center", flexDirection : "row"}} >
            <HeaderOption link="www.google.com" text = "Find Freelancer"/>
            <HeaderOption link="www.google.com" text = "Find Work"/>
            <HeaderOption link="www.google.com" text = "Social"/>
                <HeaderOption link="www.google.com" text = "Roles"/>

            </ol>
        </div>
    )
}