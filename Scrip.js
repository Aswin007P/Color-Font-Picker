
        let h2=document.getElementById('head');
        let h1=document.getElementById('11');
        let h4=document.getElementById('12');
        let h3=document.getElementById('13');
        let h5=document.getElementById('15');
        let h10=document.getElementById('45');
        function changeTextColor(color){
            h2.style.color=color;
        }
        function changeBackGroundColor(bgcolor){
            h2.style.backgroundImage = "none";
            h2.style.backgroundColor=bgcolor;
        }
        function changeFont(font){
            h2.style.fontFamily=font;
        }
        function changeFontStyle(styl) {
            h2.style.fontStyle=h3.value;
        }
        function changeFontWeight(){
            h2.style.fontWeight=h4.value;
        }
        function changeFontSize(){
            if(h1.value<50)
            h2.style.fontSize=h1.value;
        }
        function chngbg(){
            h2.style.backgroundColor=h5.value;
        }
        function chngc(){
            h2.style.color=h10.value;
        }
        function changeBackGroundImage(src){
            h2.style.backgroundImage=`url('${src}')`;
            h2.style.backgroundRepeat = "no-repeat";
            h2.style.backgroundSize = "cover";       
            h2.style.backgroundPosition = "center";  
        }
        function filed(e){
            const file = e.files[0];
            if (!file) return;
            if (!file.type.startsWith("image/")) {
                alert("Please select an image file only!");
                return;
            }
            const reader = new FileReader();
            reader.onload = function(e) {
                h2.style.background = `url('${e.target.result}') center/cover no-repeat`;
              };
      
              reader.readAsDataURL(file);
        }
        function DownloadImage(){
            html2canvas(h2).then(canvas => {
                const link = document.createElement("a");
                link.download = "my-quote.png";
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        
        }