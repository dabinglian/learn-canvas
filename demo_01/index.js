$(function(){
	var page = {
		init: function(){
			this.bindEvent();
		},
		bindEvent: function(){
			var self = this;
			$(".frame-list li").on("click", function(){
				var $this = $(this);
				$this.siblings().removeClass("active");
				$this.addClass("active");
				return false;
			});

			$(".img-list li").on("click", function(){
				var $this = $(this);
				$this.siblings().removeClass("active");
				$this.addClass("active");
				return false;
			});

			$(".btn").on("click", function(){
				var $this = $(this);
				var frameKey = $(".frame-list li.active").data("key");
				var imgKey = $(".img-list li.active").data("key");
				self.renderCanvas(imgKey);
				self.renderFrame(frameKey);
			});
		},
		renderCanvas: function(imgKey){
			var ctx = document.getElementById('canvas').getContext('2d');
			var img = new Image();
			img.onload = function(){
				ctx.drawImage(img,0,0,200,257,0,0,200,257);
			}
			img.src = './images/'+imgKey+'.jpg';
		},
		renderFrame: function(frameKey){
			var url = './images/'+frameKey+'.png';
			var image = '<img src="'+url+'">';
			$('.show-stage .frame').html(image);
		}
	};
	page.init();
});