window.onload = function() {
				var li = document.querySelectorAll("li");
				var div = document.querySelectorAll(".develop,.debug,.test,.collaboration,.extension")
				for(var i = 0; i < li.length;i++) {
					li[i].index = i;
					li[i].onclick = function() {
						for(var i = 0; i < li.length;i++) {
							li[i].className = " ";
							div[i].style.display = "none";
						};
						this.className = "begin";
						div[this.index].style.display = "block";
					};
				};
		};
