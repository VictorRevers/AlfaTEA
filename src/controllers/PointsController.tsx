let points: number = 0;

export default class PointsController{
    static AddPoints(){
        points++;
        console.log("PONTOS: ", points);
    }

    static GetPoints(){
        return points;
    }
}