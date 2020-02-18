// ==UserScript==
// @name         damai
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://detail.damai.cn/item.htm*
// @include      https://buy.damai.cn/orderConfirm?*
// @grant        none
// ==/UserScript==

window.onload = function(){
    var run;
function select() {
	var piao_num = 1;
	var changci_name = '8月24-25日套票，包含两张门票';
	var tequanma = '123';

	//填写特权码
	if(document.getElementsByClassName('privilege').length > 0){
		document.getElementById('privilege_val').value= tequanma;
		document.getElementsByClassName('privilege_sub')[0].click();
	}


  //选中场次
	var changci = document.getElementsByClassName('perform__order__select__performs');
	for (let i = 0; i < changci.length; i++) {
		if(changci[i].getElementsByClassName('select_left')[0].innerHTML == '场次') {
			var changci_list = changci[i].getElementsByClassName('select_right_list_item');
			for (let j = 0; j < changci_list.length; j++) {
				var changci_list_span = changci_list[j].getElementsByTagName('span');
				if(changci_list_span[changci_list_span.length-1].innerHTML == changci_name) {
					changci_list[j].click();
				}
			}
		}
	}

	//选中票数
	var piaoshu = document.getElementsByClassName('perform__order__price');
	for (let i = 0; i < piaoshu.length; i++) {
		if(piaoshu[i].getElementsByClassName('number_left')[0].innerHTML == '数量') {
			for (let j = document.getElementsByClassName('cafe-c-input-number-input')[0].value; j < piao_num; j++) {
				piaoshu[i].getElementsByClassName('cafe-c-input-number-handler-up')[0].click();
			}
		}
	}

	//提交
	document.getElementsByClassName('buybtn')[0].click();
}

function buy() {
	var buy_name = new Array('肖广陵');

	//选中快递方式
	var way_list = document.getElementsByClassName('way-item');
	for (let i = 0; i < way_list.length; i++) {
		if(way_list[i].getElementsByClassName('way-title')[0].innerHTML == '快递') {
			way_list[i].click();
		}
	}
	//选中购票人
	setTimeout(function(){
		document.querySelectorAll('div[class="next-col buyer-list-item"]').forEach(
			function($a){
				if(buy_name.includes($a.children[0].querySelector('span[class="next-checkbox-label"]').innerHTML)){
					$a.children[0].click();
				}
			}
		)
		},300);

    setTimeout(function(){k
        document.getElementsByClassName('submit-wrapper')[0].getElementsByTagName('button')[0].click();
    },300);


	window.clearInterval(run);
}

function main() {
	switch(window.location.host) {
		case 'buy.damai.cn' :
			buy();
			break;
		case 'detail.damai.cn' :
			select();
			console.log('a round');
			break;
        default :
            window.clearInterval(run);
	}
}

function go() {
	run = setInterval(function(){main()}, 500);
}

function stop() {
	window.clearInterval(run);
}

go();

};