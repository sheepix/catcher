
var basePath = "http://localhost:8080/crm/";

if (!($ = window.jQuery)) { // typeof jQuery=='undefined' works too 
  var jqLib = document.createElement('script'); 
  jqLib.src = 'http://code.jquery.com/jquery-2.1.1.min.js'; 
  document.body.appendChild(jqLib); 
  var catcher = document.createElement('script');
  chacher.src = 'http:/'
} else { 
  getCompanyInfo();
} 

function getCompanyInfo(){
	var url = document.URL;
	var zlCompReg = /company\.zhaopin\.com/,
	jobsCompReg = /search\.51job\.com\/list/;

	if (zlCompReg.test(url)) {
		zhilianCompanyInfo();
	} else {
		alert('对不起，暂时还不支持该网站。');
	}
}

function openWindow(href){
	if(!window.open(href)) location.href = href;
}

function zhilianCompanyInfo() {
	var compName = $('.Terminal-title').text().trim(),
	$basicInfo = $('.basic-information'),
	nature   = $basicInfo.find('dt:contains(公司性质)+dd').text().trim(),
	compSize = $basicInfo.find('dt:contains(公司规模)+dd').text().trim(),
	industry = $basicInfo.find('dt:contains(公司行业)+dd').text().trim();

	if (confirm('即将在crm3内新建公司：' + compName)) {
		$.ajax({
			url: basePath + 'api/newCompany.do',
			data: {'compName': compName},
			dataType: 'json',
			success: function(json) {
				if (json.msg == 'ok') {
					alert('保存成功!');
					setTimeout(function(){openWindow(json['redirect-url'])},0);
				}
			}
		})
	}
	
}