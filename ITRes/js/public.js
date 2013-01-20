function $(id){return document.getElementById(id)} 
function moveElement(elementID,final_x,final_y,interval) {//这个方法在DOM艺术那个书上讲的很清楚 
if (!document.getElementById) return false; 
if (!document.getElementById(elementID)) return false; 
var elem = document.getElementById(elementID); 
if (elem.movement) { 
clearTimeout(elem.movement); 
} 
if (!elem.style.left) { 
elem.style.left = "0px"; 
} 
if (!elem.style.top) { 
elem.style.top = "0px"; 
} 
var xpos = parseInt(elem.style.left); 
var ypos = parseInt(elem.style.top); 
if (xpos == final_x && ypos == final_y) { 
return true; 
} 
if (xpos < final_x) { 
var dist = Math.ceil((final_x - xpos)/10); 
xpos = xpos + dist; 
} 
if (xpos > final_x) { 
var dist = Math.ceil((xpos - final_x)/10); 
xpos = xpos - dist; 
} 
if (ypos < final_y) { 
var dist = Math.ceil((final_y - ypos)/10); 
ypos = ypos + dist; 
} 
if (ypos > final_y) { 
var dist = Math.ceil((ypos - final_y)/10); 
ypos = ypos - dist; 
} 
elem.style.left = xpos + "px"; 
elem.style.top = ypos + "px"; 
var repeat = "moveElement('"+elementID+"',"+final_x+","+final_y+","+interval+")"; 
elem.movement = setTimeout(repeat,interval); 
} 
function imgChange(num){//切换图片焦点 
if(!$('flash')) return false; 
var piclist=$('playimg').getElementsByTagName('img'); 
var imgheight=piclist[0].offsetHeight; 
var moveY=-(imgheight*num); 
moveElement('playimg',0,moveY,5); 
} 
function classToggle(arr,n){//切换按钮样式 
for(var i=0;i<arr.length;i++){ 
arr[i].className=''; 
} 
arr[n].className='current'; 
} 
function btnChange(btns){//鼠标移动播放 
if(!$(btns)) return false; 
$('flash').onmouseover = function(){autokey = false}; 
$('flash').onmouseout = function(){autokey = true}; 
var arr=$(btns).getElementsByTagName('li'); 
for(var i=0;i<arr.length;i++){ 
arr[i].index=i;//设置索引号 
arr[i].onmouseover=function(){ 
//var num=index(this,arr); 
classToggle(arr,this.index); 
imgChange(this.index); 
} 
} 
} 
function autoChange(btns){ 
if(!$(btns)) return false; 
if(!autokey) return false; 
var arr=$(btns).getElementsByTagName('li'); 
for(var i=0;i<arr.length;i++){ 
if(arr[i].className=='current'){ 
var n=i+1; 
} 
} 
if(n>=arr.length) n=0; 
classToggle(arr,n); 
imgChange(n); 
} 
var autokey = true; 
setInterval("autoChange('playbtn')",3000); 
window.onload=function(){ 
btnChange('playbtn'); 
} 





function getFocus()
{
	var inputText = document.getElementsByName('wd')[0];
	inputText.value='';
}
function outFocus()
{
	var inputText = document.getElementsByName('wd')[0];
	inputText.value='请输入搜索内容';
}

	function EnglishIn()
	{
		var imageId='englishRowColImg';
		var textId='englishRowColText';
		var imageSrc=[
					'image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg','image/book.jpg'];
		var textHtml=[
					'111111','111111','111111','111111','111111','111111','111111','111111','111111'];

		for(i=0;i<imageSrc.length;i++)
		{
			var image=document.getElementById(imageId+i);
			var text=document.getElementById(textId+i);
			image.src=imageSrc[i];
			text.innerHTML=textHtml[i];
		}
	}
	function EnglishOut()
	{
		var imageId='englishRowColImg';
		var textId='englishRowColText';
		var imageSrc = [
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg',
					'http://i-7.vcimg.com/crop/2c2871057d45a3ef4182a6b7bd20aedf57700(100x100)/thumb.jpg'
					];
		var textHtml=[
					'aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa','aaaaaaaa'];

		for(i=0;i<imageSrc.length;i++)
		{
			var image=document.getElementById(imageId+i);
			var text=document.getElementById(textId+i);
			image.src=imageSrc[i];
			text.innerHTML=textHtml[i];
		}
		
	}

	function RecentHotDownloadIn()
	{
		var textId='recentHot';
		var textHtml=[
					'热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa','热门下载aaa'];

		for(i=0;i<textHtml.length;i++)
		{
			var text=document.getElementById(textId+i);
			text.innerHTML=textHtml[i];
		}
	}
	function RecentHotDownloadOut()
	{
		var textId='recentHot';
		var textHtml=[
					'热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载'];

		for(i=0;i<textHtml.length;i++)
		{
			var text=document.getElementById(textId+i);
			text.innerHTML=textHtml[i];
		}
		
	}

	function RecommandHotDownloadIn()
	{
		var textId='recentHot';
		var textHtml=[
					'热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐','热门推荐'];

		for(i=0;i<textHtml.length;i++)
		{
			var text=document.getElementById(textId+i);
			text.innerHTML=textHtml[i];
		}
	}
	function RecommandHotDownloadOut()
	{
		var textId='recentHot';
		var textHtml=[
					'热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载','热门下载'];

		for(i=0;i<textHtml.length;i++)
		{
			var text=document.getElementById(textId+i);
			text.innerHTML=textHtml[i];
		}
		
	}
