
import DataModel from "../models/data.model.js";


class DataController {

    getData = async (req, res) => {
        const data = await DataModel.getData(res);
        // console.log(data)
        console.log(JSON.stringify(data))
    }

}

export default new DataController;