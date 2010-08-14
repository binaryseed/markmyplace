if(window.top==window)
{
	var marker = document.createElement("div")
	marker.setAttribute('id','mmp_marker')
	document.body.insertBefore(marker,document.body.firstChild)
	
	var element
	
	var clickLocation, elementLocation
	
	document.addEventListener("click",function(event){
		
		if(event.button==1 && event.target.nodeName!="A")
		{
			element = event.target
			clickLocation = event.pageY
			
			marker.style.height = "20px"
			marker.style.visibility = "visible"
			marker.style.top = (event.pageY-10)+"px"
			if (event.target.id=="mmp_marker") { marker.style.visibility = "hidden" }
		}
		
	}, false)
	
	window.addEventListener("resize",function(event){
		
		if (!element) { return }
		
		var curtop = 0
		var obj = element
		
		while (obj.offsetTop==obj.parentNode.offsetTop) { obj = obj.parentNode }
		
		do { curtop += obj.offsetTop } while ( obj = obj.offsetParent )
		elementLocation = curtop
		
		if (Math.abs(elementLocation-clickLocation)<200)
		{
			marker.style.top = (elementLocation+"px")
			if(element.offsetHeight>20) { marker.style.height = element.offsetHeight+"px" }
		}

	}, false)
}
