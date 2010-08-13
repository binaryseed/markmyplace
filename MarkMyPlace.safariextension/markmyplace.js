if(window.top==window)
{
	var marker = document.createElement("div")
	marker.setAttribute('id','mmp_marker')
	document.body.insertBefore(marker,document.body.firstChild)
	
	document.addEventListener("click",function(event){
		
		if(event.button==1 && event.target.nodeName!="A")
		{
			marker.style.top = (event.pageY-10)+"px"
			if (event.target.id=="mmp_marker") { marker.style.top = "-100px" }
		}
		
	}, false)
}
