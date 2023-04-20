import axios from "axios";
import { useEffect,useState } from "react";
const Api = () =>{
    const [data,setData] = useState();
    useEffect(() => {
        axios.get('https://jk-tv.netlify.app/cartoons/get_all').then((d) => setData(d.data));
    });
    return(
        <div>
            {data.map((d,index) => (
                sx
            ))}
        </div>
    )

}
export default Api