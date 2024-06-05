import { useState } from "react";

const [points, setPoints] = useState(0);

export default class PointsController{
    
    static GetPoints(){
        return points;
    }
    
    static AddPoints(){
        setPoints(points + 1);
    }
}