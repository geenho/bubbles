import React, {useState, useRef, useEffect} from "react";

/**
 * component svg
 */
const Bubble = function (props) {

    /*const [X1, setX1] = useState(200)

    const [Y1, setY1] = useState(200)

    useEffect(() => {
        console.log("the bubble is mounted(" + X1 + ")");
        let frameManager = null;
        let pos = 800;
        let currentPos = X1;
        let positionManager = setInterval(() => {
            if(currentPos >= pos){
                clearTimeout(positionManager);
            }
            currentPos += 1;
            setX1(currentPos);
        }, 2);
    }, [])*/

    const [id, setId] = useState(Math.random().toString(36).substr(2, 9));

    const [X1, setX1] = useState(Math.floor(Math.random() * 800));

    const [Y1, setY1] = useState(Math.floor(Math.random() * 800));

    const [R1, setR1] = useState(10 + Math.floor(Math.random() * 90));

    const [color, setColor] = useState(
        ["#eb4034", "#32a852", "#4287f5"][Math.floor(Math.random() * 3)]
    );

    const [display, setDisplay] = useState(true);

    useEffect(() => {
        console.log("the bubble is mounted(id : " + id + ", interval : " + (R1 * 1.2) + "ms, transition : " + (R1/(100 - 6)) + "s)");
        let positionManager = setInterval(() => {
            if(Math.floor(Math.random() * 1) === 0 && display){
                if(document.getElementById(id)){
                    document.getElementById(id).style.transform = "translate(" + Math.floor(Math.random() * 10) + "px, " + Math.floor(Math.random() * 10) + "px)";
                }
            }
        }, (R1 * 1.2));
    }, [])

    if(display){
        return(
            <circle id = {id} cx={X1} cy={Y1} style={{fill: "white", transition: "all " + (R1/(100 - 6)) + "s", stroke: color}} 
                r={R1} stroke="black" strokeWidth="3" 
                onClick={() => {setDisplay(false)}}/>
        );
    }else{
        return (<></>);
    }
}

export default Bubble;