export default function sketchOne (p) {

    let x , y;

    let bgColor = (10, 10, 100);

    var circlesCoord = [], localCirclesCoord = [];
  
    p.setup = function () {
      p.createCanvas(window.innerWidth, window.innerHeight);
      x = window.innerWidth / 2;
      y = window.innerHeight - 100;
    };
  
    p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
        //this is for the props
        console.log("rendering..."); console.log(props);
        if (props.bgColor){
            console.log("found color");
            bgColor = props.bgColor;
        }
        if(props.circlesCoord){
            console.log("found coordinates");
            circlesCoord = props.circlesCoord;
            localCirclesCoord = circlesCoord;
        }
    };

    function updatePositions(){
        for(let i = 0; i < localCirclesCoord.length; i++){
            circlesCoord[i][0] = localCirclesCoord[i][0] + p.random(-1, 1);
            circlesCoord[i][1] = localCirclesCoord[i][1] + p.random(-1, 1);
            if(circlesCoord[i][3] <= circlesCoord[i][2]){
                circlesCoord[i][3] += 1;
            }
            localCirclesCoord[i][1] -= localCirclesCoord[i][2]/20;
            if( localCirclesCoord[i][1] <= 0){
                localCirclesCoord.splice(i, 1);
                localCirclesCoord.push([p.random(window.innerWidth - 50), p.random(window.innerHeight - 150, window.innerHeight - 50), p.random(10,60), 0]);
            }
        }
    }

    p.draw = function () {
        p.background(bgColor);
        p.noStroke();

        p.fill(p.color([255-bgColor[0], 255-bgColor[1], 255-bgColor[2]]));

        updatePositions();

        const maxWidth = window.innerWidth;
        const maxHeight = window.innerHeight;
        for (let i = 0; i < circlesCoord.length; i ++) {

            p.circle(circlesCoord[i][0], circlesCoord[i][1], circlesCoord[i][3]);
                
        }
    };

}