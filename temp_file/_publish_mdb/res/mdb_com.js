window.addEventListener('DOMContentLoaded', (event) => {

	// 获取所有ul和li下的a标签
	var ulLiAnchors = document.querySelectorAll("ul li a");
	for (var i = 0; i < ulLiAnchors.length; i++) {
		var href = ulLiAnchors[i].getAttribute("href");
		// 判断是否是以"./"开头，".md"结尾
		if (href.startsWith("./") && href.endsWith(".md")) {
			// 将.md替换成.html
			href = href.replace(".md", ".html");
			ulLiAnchors[i].setAttribute("href", href);// 设置回href属性
		}
	}

	// 获取第一个 h1 标签
	var h1 = document.getElementsByTagName('h1')[0];

	// 创建一个 img 元素
	var img = document.createElement('img');

	// 设置 img 的属性
	img.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA5MzA4MjEwODk5IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjY2NzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCI+PHBhdGggZD0iTTQ0NC4zNjQ4IDQ2OS4zNTA0bDk3Ljc5Mi05Ny44NDMyYTQyLjY0OTYgNDIuNjQ5NiAwIDEgMC02MC4zMTM2LTYwLjM2NDhMMzExLjE0MjQgNDgxLjg0MzJhNDIuNjQ5NiA0Mi42NDk2IDAgMCAwIDAgNjAuMzEzNmwxNzAuNzAwOCAxNzAuNzAwOGE0Mi42NDk2IDQyLjY0OTYgMCAwIDAgNjAuMzEzNi02MC4zNjQ4bC05Ny43OTItOTcuNzkyaDIzOC43NDU2YTQyLjY0OTYgNDIuNjQ5NiAwIDEgMCAwLTg1LjM1MDRINDQ0LjM2NDh6TTUxMiAxMDI0QzIyOS4yMjI0IDEwMjQgMCA3OTQuNzc3NiAwIDUxMlMyMjkuMjIyNCAwIDUxMiAwczUxMiAyMjkuMjIyNCA1MTIgNTEyLTIyOS4yMjI0IDUxMi01MTIgNTEyeiIgZmlsbD0iIzY1OTFFOCIgcC1pZD0iNjY3MSI+PC9wYXRoPjwvc3ZnPg=='; 
	img.width = '50'; // 可按需调整
	img.height = '50'; // 可按需调整
	img.style.marginLeft = 'auto';  // 让图片在容器内右对齐
	img.style.cursor = 'pointer'; // 将鼠标指针改为手形以提醒用户可以点击
	
	var div = document.createElement('div');
	// 设置 div 的样式
	div.style.display = 'flex';  // 设置为flex布局
	div.style.justifyContent = 'space-between'; // 使内容两端对齐
	div.style.alignItems = 'center';

	// 将 h1 和 img 添加到 div 中
	div.appendChild(h1);
	div.appendChild(img);

	// 获取名为 "crossnote" 的类的第一个 div
	var crossnoteDiv = document.querySelector('.crossnote');

	// 获取 crossnoteDiv 的第一个子元素
	var firstChild = crossnoteDiv.firstChild;

	// 将新的 div 插入到 crossnoteDiv 的第一个子元素之前
	crossnoteDiv.insertBefore(div, firstChild);

	img.onclick = function() {
	  window.history.back();
	};
	
	h1.style.cursor = 'pointer';
	h1.onclick = function() {
		var homepageUrl = window.location.origin;

		// 返回首页
		window.location.href = homepageUrl;
	};
	
	
	// 创建一个新的图片元素
	var to_top_img = document.createElement('img');

	// 设置图片的源
	to_top_img.src = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA5MzA4ODU2NzYzIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjExMzU1IiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjEyOCIgaGVpZ2h0PSIxMjgiPjxwYXRoIGQ9Ik01MTEuOTk5NDg4IDBjLTI4Mi43MjYxOTYgMC01MTEuOTk5NDg4IDIyOS4yNzMyOTItNTExLjk5OTQ4OCA1MTEuOTk5NDg4czIyOS4yNzMyOTIgNTExLjk5OTQ4OCA1MTEuOTk5NDg4IDUxMS45OTk0ODggNTExLjk5OTQ4OC0yMjkuMjczMjkyIDUxMS45OTk0ODgtNTExLjk5OTQ4OFM3OTQuNzI1Njg0IDAgNTExLjk5OTQ4OCAweiBtMTguMjI3MTg4IDc1OS4xOTI4MDNjLTUuNTI5OTk5IDUuNTI4OTc1LTEzLjMxMjU0NCA4LjgwNjQyOS0yMS4xOTY0NTIgOC44MDY0MjktNy43ODI1NDUgMC0xNS42Njc0NzgtMy4yNzY0My0yMS4xOTY0NTMtOC44MDY0MjktNS41Mjk5OTktNS42MzEzNjQtOC43MDQwNC0xMy41MTczMjEtOC43MDQwNDEtMjEuNDAyMjUzIDAtNy44ODM5MDkgMy4xNzQwNDEtMTUuNzY4ODQyIDguNzA0MDQxLTIxLjI5ODg0MiA1LjUyODk3NS01LjYzMTM2NCAxMy40MTM5MDgtOC45MDg4MTcgMjEuMTk2NDUzLTguOTA4ODE3IDcuODgzOTA5IDAgMTUuNjY2NDU0IDMuMjc2NDMgMjEuMTk2NDUyIDguOTA4ODE3IDUuNTI4OTc1IDUuNTI5OTk5IDguODA2NDI5IDEzLjQxNDkzMiA4LjgwNjQyOSAyMS4yOTg4NDIgMCA3Ljg4NTk1Ny0zLjI3NjQzIDE1Ljc3MDg5LTguODA2NDI5IDIxLjQwMjI1M3ogbS0yMS4xOTY0NTItNzAuMzQ4MDE4Yy0xNi40ODY1ODUgMC0yOS45MDE1MTctMTMuNTE3MzIxLTI5LjkwMTUxOC0zMC4yMDc2NTkgMC0xNi41ODg5NzMgMTMuNDEzOTA4LTMwLjEwNTI3IDI5LjkwMTUxOC0zMC4xMDUyNyAxNi41ODg5NzMgMCAzMC4wMDI4ODIgMTMuNTE3MzIxIDMwLjAwMjg4MSAzMC4xMDUyNyAwIDE2LjY5MDMzOC0xMy40MTM5MDggMzAuMjA3NjU5LTMwLjAwMjg4MSAzMC4yMDc2NTl6IG0xODUuOTU3ODY2LTE4OC40MTYyMTNjLTkuMDExMjA2IDAtMTYuOTk4NTI3LTMuODkwNzYtMjIuNTI4NTI2LTEwLjAzNTA5TDU0NC44NzAyNyAzNjEuOTgzMDMybC0wLjUxMjk2NiAyMTQuOTM3ODg4cy01LjczNDc3NiAyMC4wNzAxOC0zMC4wMDI4ODIgMjAuMDcwMThjLTAuOTIxNDk2IDAtMS45NDUzOCAwLTIuODY2ODc2LTAuMTAyMzg4LTEuMDIzODg0IDAuMTAyMzg4LTEuOTQ1MzggMC4xMDIzODgtMi45NzAyODggMC4xMDIzODgtMjQuMTY2NzQxIDAtMjkuOTAwNDkzLTIwLjA3MDE4LTI5LjkwMDQ5NC0yMC4wNzAxOGwwLjUxMTk0Mi0yMTQuOTM3ODg4LTEyNy41ODkyOTQgMTI4LjQxMDQ1Yy01LjUyOTk5OSA2LjE0MzMwNi0xMy41MTczMjEgMTAuMDM1MDktMjIuNTI4NTI2IDEwLjAzNTA5LTE2Ljc5Mzc1IDAtMzAuMzExMDcxLTEzLjQxMzkwOC0zMC4zMTEwNzEtMzAuMDAyODgyIDAtOC44MDY0MjkgMy44OTA3Ni0xNi43OTM3NSAxMC4xMzc0NzgtMjIuMzIyNzI2bDE3NC44OTg4OTMtMTc2LjEyNzU1M3M0LjYwODUwMy00LjYwODUwMyA3LjA2NTgyNS03LjE2ODIxNGEyOS45MzgzNzcgMjkuOTM4Mzc3IDAgMCAxIDIxLjE5NjQ1My04LjgwNjQyOWM3LjY4MDE1NiAwIDE1LjM2MDMxMiAyLjk2OTI2NCAyMS4xOTY0NTMgOC44MDY0MjkgMi40NTczMjIgMi41NTk3MTEgNy4wNjU4MjYgNy4xNjgyMTQgNy4wNjU4MjYgNy4xNjgyMTRsMTc0Ljg5ODg5MiAxNzYuMTI3NTUzYzYuMjQ2NzE4IDUuNTI4OTc1IDEwLjEzNzQ3OCAxMy41MTczMjEgMTAuMTM3NDc4IDIyLjMyMjcyNiAwLjAwMjA0OCAxNi41ODc5NS0xMy41MTUyNzMgMzAuMDAyODgyLTMwLjMwOTAyMyAzMC4wMDI4ODJ6IiBmaWxsPSIjMDVBNjVBIiBwLWlkPSIxMTM1NiI+PC9wYXRoPjwvc3ZnPg=='; // 替换为你的图片URL

	// 设置图片的样式
	to_top_img.style.position = 'fixed';
	to_top_img.style.bottom = '20px';
	to_top_img.style.right = '20px';
	to_top_img.style.width = '50px';
	to_top_img.style.height = '50px';
	to_top_img.style.cursor = 'pointer';
	to_top_img.style.display = 'none';

	// 添加点击事件
	to_top_img.onclick = function() {
	  window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	// 将图片元素添加到页面中
	document.body.appendChild(to_top_img);
	var zoomElements = document.querySelectorAll('svg, img.zoom');
	zoomElements.forEach(function(el) {
	  el.style.cursor = 'zoom-in';
	  el.onclick = function(event) {
		event.preventDefault();
		
		var rect = this.getBoundingClientRect();
		
		var previewEl = this.cloneNode(true);
		previewEl.style.position = "fixed";
		previewEl.style.top = '50%';
		previewEl.style.left = '50%';
		previewEl.style.width = rect.width + 'px';
		previewEl.style.height = rect.height + 'px';
		previewEl.style.zIndex = "1002"; // 提升z-index使图片在背景之上
		document.body.appendChild(previewEl);
		
		// 创建一个空的元素作为背景
		var bgEl = document.createElement("div");
		document.body.appendChild(bgEl);
		
		// 如果是_svg_，则添加白底效果
		if (el.tagName.toLowerCase() === 'svg') {
		  bgEl.style.position = "fixed";
		  bgEl.style.top = '50%';
		  bgEl.style.left = '50%';
		  bgEl.style.zIndex = "1001"; // 设置z-index使背景在图片之下
		  bgEl.style.backgroundColor = "#fff"; // 白底
		}
		
		var overlay = document.createElement("div");
		overlay.style.position = "fixed";
		overlay.style.top = "0";
		overlay.style.left = "0";
		overlay.style.width = "100%";
		overlay.style.height = "100%";
		overlay.style.backgroundColor = "rgba(0,0,0,0.7)";
		overlay.style.zIndex = "1000";
		document.body.appendChild(overlay);
		
		overlay.onclick = exitZoom;
		previewEl.onclick = exitZoom;

		function exitZoom() {
		  overlay.remove();
		  bgEl.remove();
		  previewEl.remove();
		}

		// 动态调整放大倍数
		var scale;
		var vpSize = Math.min(window.innerWidth, window.innerHeight); // 视窗尺寸
		var elSize = Math.min(rect.width, rect.height); // 元素尺寸
		if (elSize / vpSize < 0.6) {
		  scale = '1.5'; // 小于60%放大为150%
		} else {
		  scale = '1'; // 若占据60%屏幕宽度，则不放大
		} 

		previewEl.style.transform = `translate(-50%, -50%) scale(${scale})`;
		previewEl.style.maxWidth = Math.min(vpSize, rect.width * scale) + 'px';
		previewEl.style.maxHeight = Math.min(vpSize, rect.height * scale) + 'px';

		// 如果是SVG, 白底要比放大后的SVG大5%
		if (el.tagName.toLowerCase() === 'svg') {
		  bgEl.style.width = (rect.width * scale * 1.05) + 'px';
		  bgEl.style.height = (rect.height * scale * 1.05) + 'px';
		  bgEl.style.transform = "translate(-50%, -50%)";
		}
	  }
	});
	document.addEventListener('keydown', function (e) {
		// 如果按下的是 "~"
		if (e.key === '`') {
			// 模拟点击
			document.getElementById('sidebar-toc-btn').click();
		}
	});
		
	window.onscroll = function() {
		// 如果页面滚动距离超过100px，则显示图片
		if (document.documentElement.scrollTop > 200) {
		to_top_img.style.display = 'block';
		} else { // 否则隐藏图片
		to_top_img.style.display = 'none';
		}
	};
	
});
