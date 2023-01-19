import axios from "axios";
import fetch from "node-fetch";

const ACCESS_TOKEN = 'eUXL27Cq+JJ815Y7kL5ZDt5hTjT5NiG6r4m/Rye620g=';


class DataModel {

    getData = async (req, res) => {
        let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/GetStelleById?stelleUuid=62355225-2ff8-422d-9716-3eb81e86befe`)
        
        let JsonData = await data.json();
        return JsonData;
    }


}

export default new DataModel;