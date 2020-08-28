 function getTime() {
//     now = new Date()
//     console.log(now);
//     dday = new Date(2020,07,29,16,00,00); // 원하는 날짜, 시간 정확하게 초단위까지. 0이 1월입니다
    
	const now = new Date().getTime() + (new Date().getTimezoneOffset()*1000*60);//시스템 date를 UTC로 변경
	const dday = new Date('2020/08/31 09:00:00').getTime() - (540*1000*60);//한국기준-UTC 기준을 위한 오프셋, 06이 7월, 540은 한국의 타임존 오프셋

    days = (dday - now) / (1000 * 60 * 60 * 24);
    dRound = Math.floor(days);


    hours = ((dday - now) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60);
    hhRound = Math.floor(hours);


    minutes = ((dday - now) % (1000 * 60 * 60)) / (1000 * 60);
    mRound = Math.floor(minutes);


    seconds = ((dday - now - 1) % (1000 * 60)) / 1000;
    sRound = Math.round(seconds);

    document.getElementById("counter1").innerHTML = dRound;
    document.getElementById("counter2").innerHTML = hhRound;
    document.getElementById("counter3").innerHTML = mRound;
    document.getElementById("counter4").innerHTML = sRound;
    newtime = window.setTimeout("getTime();", 1000);
  }

  getTime();


// function CountDownTimer(dday,show){
//   	var countDownDate = new Date(dday).getTime() - (540*1000*60);
//     var handle = null
    
//     return {
//       start: function(){
//         this.handle = setInterval(function(){
//         	var now = new Date().getTime() + new Date().getTimezoneOffset()*1000*60;
//           	var distance = countDownDate - now;
//           	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//             var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//           	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//           	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          
//           if (days < 0) {
//           	days = 0;
//             hours = 0;
//             minutes = 0;
//             this.stop();
//           }
//           show({
//             days: days,
//             hours: hours,
//             minutes: minutes,
//             seconds: seconds,
//           });
//         }, 1000);
//       },
//       stop: function(){
//       	clearInterval(this.handle)
//       }
//     }
//   }
  
//   var count = CountDownTimer('2020/08/31 09:00:00', function(data){
//   	var countDayId = $("#count");
//     var dayEl = countDayId.find(".day");
//     var timeEl = countDayId.find(".time");
//     var minuteEl = countDayId.find(".minute");
//     var secondEl = countDayId.find(".second");
    
//     dayEl.html(data.days);
//     timeEl.html(data.hours);
//     minuteEl.html(data.minutes);
//     secondEl.html(data.seconds);
    
//   })
  
//   count.start()
 

