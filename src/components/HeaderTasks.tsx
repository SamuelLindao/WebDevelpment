import {useState} from "react";

export function HeaderTasks() {
    const [searchText, setSearchText] = useState('');

    return (
        <div style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'red',
            display: 'flex',
            flexDirection : "column",
            height: "9.537vh", width: "100%"}}>


            <input style={{height: "70%", width: "50%", borderWidth: "0px", borderRadius:"10px", paddingLeft:"10px", paddingRight:"10px"}}
            type="text"
            placeholder="Find Your Next"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}