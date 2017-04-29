// Static Values
var greenColor = '#ddf8cc';
var mainGreenColor = '#ddf8cc';
var darkGreenColor = '#54DA00';

var redColor = '#fcd6d6';
var mainRedColor = '#fcd6d6';
var darkRedColor = '#BB0000';

var blackColor = '#000000';

var grayColor = '#959A8F';



var mainSvgObject = document.getElementById("mainSvg"); //
var yepSignSvgObject = document.getElementById("yepSignSvg");
var nopeSignSvgObject = document.getElementById("nopeSignSvg");
var offStateSvgObject = document.getElementById("offStateSvg");

var audioFile = new Audio('./media/bensound-dubstep.mp3');
audioFile.play();


window.addEventListener('load', function(){
    
    var mainSvgObjectDoc = mainSvgObject.contentDocument;  //
    var yepSignSvgObjectDoc = yepSignSvgObject.contentDocument;
    var nopeSignSvgObjectDoc = nopeSignSvgObject.contentDocument;
    var offStateSvgObjectDoc = offStateSvgObject.contentDocument;

    var mainSvgObjectSnap = Snap(mainSvgObjectDoc.getElementsByTagName('svg')[0]); //
    var yepSignSvgObjectSnap = Snap(yepSignSvgObjectDoc.getElementsByTagName('svg')[0]);
    var nopeSignSvgObjectSnap = Snap(nopeSignSvgObjectDoc.getElementsByTagName('svg')[0]);
    var offStateSvgObjectSnap = Snap(offStateSvgObjectDoc.getElementsByTagName('svg')[0]);
    
    // Getting objects to manipulate


    // MAIN SVG
    var mainBoxArea = mainSvgObjectSnap.select("#checkBoxes");
    var mainSvgBoxes = mainSvgObjectSnap.selectAll("#checkBoxes rect");
    var extraBoxes = mainSvgObjectSnap.select("#extraBoxes");
    
    var phoneLight1 = mainSvgObjectSnap.select("#phoneLight1");
    var phoneLight2 = mainSvgObjectSnap.select("#phoneLight2");
    var cablePath = mainSvgObjectSnap.selectAll("#cable path");
    var cableLine = mainSvgObjectSnap.selectAll("#cable line");
    var cable =  mainSvgObjectSnap.select("#cable");

    var mainSvgPaths = mainSvgObjectSnap.selectAll("path");
    var mainSvgLines = mainSvgObjectSnap.selectAll("line");


    var checkNopeClickArea = mainSvgObjectSnap.select("#checkNopeClickArea");
    var cableClickArea = mainSvgObjectSnap.select("#cableClickArea");


    // CHECK SVG
    var checkBoxes = yepSignSvgObjectSnap.selectAll("#checkBoxes rect");
    var checkBoxesSvgPaths = yepSignSvgObjectSnap.selectAll("path");
    var checkBoxesSvgLines = yepSignSvgObjectSnap.selectAll("line");

    // NOPE SVG
    var nopeBoxes = nopeSignSvgObjectSnap.selectAll("#nopeBoxes rect");

    // OFF STATE SVG
    var offStateSvgPaths = offStateSvgObjectSnap.selectAll("path");
    var offStateSvgLines = offStateSvgObjectSnap.selectAll("line");

    var offCableClickArea = offStateSvgObjectSnap.select("#cableClickArea");
    var onCableClickArea = yepSignSvgObjectSnap.select("#cableClickArea");





    extraBoxes.attr({
            display: 'none'
        });



    function hideBoxes(){
        
        mainBoxArea.attr({
            display: 'none'
        });

        toOffState();
    };


    function showBoxes(){

        mainBoxArea.attr({
            display: 'block'
        });

    }

    function toOnState(){

        for(var i = 0, length1 = mainSvgPaths.length; i < length1; i++){    

            mainSvgPaths[i].animate({
                d: checkBoxesSvgPaths[i].attr('d')
                    

            },1000);
        };
        mainSvgLines[0].animate({
                x1: checkBoxesSvgLines[0].attr('x1'),
                x2: checkBoxesSvgLines[0].attr('x2'),
                y1: checkBoxesSvgLines[0].attr('y1'),
                y2: checkBoxesSvgLines[0].attr('y2')
            
            },1000,mina.default, function(){
                showBoxes();
            }); 

        cableClickArea.animate({

                x: onCableClickArea.attr('x'),
                y: onCableClickArea.attr('y')


            },1000);




        // Coloring

        var colorToUse;

        if (mainSvgObjectSnap.hasClass('nopeSign')) {
            colorToUse = redColor;
        }
        else{
            colorToUse = greenColor;
            audioFile.play();
        }


        for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){    

            mainSvgBoxes[i].animate({
                
                fill: colorToUse

            },300);
        };

        //toggle phone lights color
        phoneLight1.animate({
            fill: colorToUse
        }, 300);

        phoneLight2.animate({
            fill: colorToUse
        }, 300);

        // toggle cable color
        cablePath[0].animate({
            fill: colorToUse,
            stroke: colorToUse
        }, 300);

        cableLine[0].animate({
            fill: colorToUse,
            stroke: colorToUse
        }, 300);

    }

    function toOffState(){
        
        for(var i = 0, length1 = mainSvgPaths.length; i < length1; i++){    

            mainSvgPaths[i].animate({
                d: offStateSvgPaths[i].attr('d')
                    

            },1000);
        };
        mainSvgLines[0].animate({
                x1: offStateSvgLines[0].attr('x1'),
                x2: offStateSvgLines[0].attr('x2'),
                y1: offStateSvgLines[0].attr('y1'),
                y2: offStateSvgLines[0].attr('y2')
            
            },1000); 

        cableClickArea.animate({

                x: offCableClickArea.attr('x'),
                y: offCableClickArea.attr('y')


            },1000);

        // Coloring
        for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){    

            mainSvgBoxes[i].animate({
                
                fill: grayColor

            },300);

        audioFile.pause();
        
        };

        //toggle phone lights color
        phoneLight1.animate({
            fill: grayColor
        }, 300);

        phoneLight2.animate({
            fill: grayColor
        }, 300);

        // toggle cable color
        cablePath[0].animate({
            fill: grayColor,
            stroke: grayColor
        }, 300);

        cableLine[0].animate({
            fill: grayColor,
            stroke: grayColor
        }, 300);

    };

    function checkToNope()
    {   
        // arrange boxes and toggle color
        for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){    

            mainSvgBoxes[i].animate({
                x: nopeBoxes[i].attr('x'),
                y: nopeBoxes[i].attr('y'),
                fill: nopeBoxes[i].attr('fill')

            },300);
        };

        //toggle phone lights color
        phoneLight1.animate({
            fill: redColor
        }, 300);

        phoneLight2.animate({
            fill: redColor
        }, 300);

        // toggle cable color
        cablePath[0].animate({
            fill: redColor,
            stroke: redColor
        }, 300);

        cableLine[0].animate({
            fill: redColor,
            stroke: redColor
        }, 300);

        // toggle extra boxes
        extraBoxes.attr({
            display: 'block'
        });
        mainSvgObjectSnap.toggleClass("nopeSign");
        audioFile.pause();
    };





    function nopeToCheck()
    {
        // arrange boxes and toggle color
        for(var i = 0, length1 = mainSvgBoxes.length; i < length1; i++){

            mainSvgBoxes[i].animate({
                x: checkBoxes[i].attr('x'),
                y: checkBoxes[i].attr('y'),
                fill: checkBoxes[i].attr('fill')

            },300); 
        };

        // toggle phone lights color
        phoneLight1.animate({
            fill: greenColor
        }, 300);

        phoneLight2.animate({
            fill: greenColor
        }, 300);

        // toggle cable color
        cablePath[0].animate({
            fill: greenColor,
            stroke: greenColor
        }, 300);

        cableLine[0].animate({
            fill: greenColor,
            stroke: greenColor
        }, 300);

        // toggle extra boxes
        extraBoxes.attr({
            display: 'none'
        });

        mainSvgObjectSnap.toggleClass("nopeSign");
        audioFile.play();
    };



    // Calls 
    cableClickArea.click(function(){
        if (!mainSvgObjectSnap.hasClass("state_off")) {
            hideBoxes();
            mainSvgObjectSnap.toggleClass("state_off");

        }
        else{
            toOnState();
            mainSvgObjectSnap.toggleClass("state_off");
        }


    }, true);
    

    checkNopeClickArea.click(function(){


        

        if (!mainSvgObjectSnap.hasClass("nopeSign")) {
            checkToNope();
            
        }
        else
        {   
            nopeToCheck();
            
        }
        
    });




}, true);














