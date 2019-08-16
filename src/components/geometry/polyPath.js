import React, {useState, useRef, useEffect} from "react";

/**
 * component svg
 */
const Polygon = function (props) {

    const [X1, setX1] = useState(200)

    const X1frame = useRef(null);

    const X1manager = useRef(null);

    useEffect(() => {
        function animation(destination){
            var pos = X1;
            X1frame.current = setInterval(() => {
                if(pos >= destination){
                    clearInterval(X1frame.current)
                }else{
                    pos += 10;
                    setX1(pos)
                }
            }, 10)
        }

        X1manager.current = setInterval(() => {
            animation(X1 + Math.floor(Math.random() * 100));
        },1100)
    },[]);

    return(
        <>
            <svg version="1.1" id="h-load" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 1000 1000">
                    <polygon points={X1+",100 500,100 250,210"}
                            style={{fill: "none", stroke: "black"}}
                    />
            </svg>
        </>
    );
}

export default Polygon;