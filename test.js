


var redColor = '#fcd6d6';


var buttonSvg = document.getElementById("buttonSvg");
console.log(buttonSvg);

buttonSvg.addEventListener("load", () => { 

var buttonSvgDoc = buttonSvg.contentDocument;

var buttonSvgDocSnap = Snap(buttonSvgDoc.getElementById("buttonSvg"));

var box = buttonSvgDocSnap.selectAll('rect');


box[0].animate({
		fill: redColor,
		stroke: redColor
	}, 300);



alert("anan");
console.log("hello"); 


})











// //<![CDATA[
		
// 		// wait until all the resources are loaded
// 		window.addEventListener("load", findSVGElements, false);
		
// 		// fetches the document for the given embedding_element
// 		function getSubDocument(embedding_element)
// 		{
// 			if (embedding_element.contentDocument) 
// 			{
// 				return embedding_element.contentDocument;
// 			} 
// 			else 
// 			{
// 				var subdoc = null;
// 				try {
// 					subdoc = embedding_element.getSVGDocument();
// 				} catch(e) {}
// 				return subdoc;
// 			}
// 		}
				
// 		function findSVGElements()
// 		{
// 			var elms = document.querySelectorAll(".emb");
// 			for (var i = 0; i < elms.length; i++)
// 			{
// 				var subdoc = getSubDocument(elms[i])
// 				if (subdoc)
// 					subdoc.getElementById("svgbar").setAttribute("fill", "lime");
// 			}
// 		}
// 		//]]>













