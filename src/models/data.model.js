import axios from "axios";
import fetch from "node-fetch";

const ACCESS_TOKEN = '';


class DataModel {

    getData = async (req, res) => {
        let data = await fetch(`https://comanos.europersonal.com/api/public/v1/Stelle/GetStelleById?stelleUuid=`)
        
        let JsonData = await data.json();
        return JsonData;
    }


}

export default new DataModel;
