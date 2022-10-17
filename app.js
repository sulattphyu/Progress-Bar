var getdownloadbtn = document.querySelector('.download-btn');
var getprogressbar = document.querySelector('.progress-bar');
var seturl = "https://linkedin.com"
// var seturl = "https://sulattphyu.github.io/table-project/"

getdownloadbtn.addEventListener('click',function(){
	

	getdownloadbtn.setAttribute("disabled",true);

	var setwidth = 0;

	var setinv = setInterval(progressinc,100);

	function progressinc(){

		if(setwidth >= 100){
			clearInterval(setinv);
			window.location.href = seturl;
		}else{
			setwidth ++;
			
			//ayay tat lar
			getprogressbar.style.width = `${setwidth}%`; 
			
			// %number twy tat lar
			getprogressbar.setAttribute(`data-inc`,`${setwidth}%`);
		}

   }

  });


//    DownloadCV sample
//     getdownloadbtn.addEventListener('click',function(){
// 		window.location.href = seturl;

// 	})



	
		

