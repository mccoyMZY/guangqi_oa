var start = {
  format: 'YYYY-MM-DD hh:mm',
	minDate: $.nowDate(0), //设定最小日期为当前日期
	isinitVal: true,
	festival: false,
	ishmsVal: false,
	maxDate: '2099-06-30 23:59', //最大日期
	choosefun: function(elem, datas) {
		end.minDate = datas; //开始日选好后，重置结束日的最小日期
	}
};
var end = {
	format: 'YYYY-MM-DD hh:mm',
	minDate: $.nowDate(0), //设定最小日期为当前日期
	festival: false,
	maxDate: '2099-06-16 23:59', //最大日期
	choosefun: function(elem, datas) {
		start.maxDate = datas; //将结束日的初始值设定为开始日的最大日期
	}
};
$('#inpstart').jeDate(start);
$('#inpend').jeDate(end);

$('.inpstart').jeDate(start);
$('.inpend').jeDate(end);