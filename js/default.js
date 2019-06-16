
	$(window).load(function(){
		if(document.cookie.indexOf("visited") < 0){ // cookie doesnt exist, show tutorial
			var now = new Date();
			now.setTime(now.getTime() + 1000*60*60*24*365);
			var poop = "visited=yes; expires=" + now.toUTCString();
			$('#startModal').modal('show');
			document.cookie = poop;
		}
    });

	$(document).ready(function () {

    $('#submitform').validate({ // initialize the plugin
        ignore: [],
		rules: {
            customerName: {
                required: true,
				minlength: 3
            },
            companyName: {
                required: false
            },
			customerPhone: {
                required: true,
                digits: true,
				minlength: 9,
            },
            customerEmail: {
                required: true,
                email: true
            },
			pendantSlotInfo: {
				required: true
			}
        }
    });
	setTimeout(function(){$('#chromeNotice').fadeOut(400)}, 10000); // hide error after 10 seconds
});

$(".tutorialReplay").click(function () {
	$('#startModal').modal('show');
});

$(".wiringDiagram").click(function () {
	$(this).children("img").clone().appendTo($("#diagramEnhancer"));
	$('#diagramZoom').modal('show');
});

$('#diagramZoom').on('hidden.bs.modal', function (e) {
	$("#diagramEnhancer img").remove();
})

$(".mobileProducts").click(function () {
	$('.products.col-md-6').css("display","block");
	$('.products.col-md-6').css("opacity","1");
});

$('.mobileClose').click(function() {
	$('.products.col-md-6').removeAttr('style');
});






			$('div.scroller').droppable( {
				hoverClass: "scrollTest",
				accept: ".dragDropItem",
				over: function(event, ui){
					$("div.col-md-5.products").scrollTo({top:2000, left:700}, 2000);
				},
				out: function(event, ui) {
					$("div.col-md-5.products").stop();
			//    // stop on unhover
				}
			});
			
			$('div.scroller.up').droppable( {
				hoverClass: "scrollTest",
				accept: ".dragDropItem",
				over: function(event, ui){
					$("div.col-md-5.products").scrollTo({top:0, left:700}, 2000);
				},
				out: function(event, ui) {
					$("div.col-md-5.products").stop();
			//    // stop on unhover
				}
			});
			
			//pendant eclousure prices in order of buttons plus customization fee
			var pendantPrices = [56.56+10,83.66+14,119.07+16,224.13+18,267.28+20,383.40+22];
			
			var currentPendant = pendantPrices[0];
			
			var newPendant = "";

			var customFee = 0;
			
			var price = customFee + currentPendant;
			
			//console.log(price);
			
			$('#estimated-price').html(price.toFixed(2));

			var jsonPendantInfo = [
			/*Slot One   */  {"partNumber":"", "btnDesc":""},
			/*Slot Two   */  {"partNumber":"", "btnDesc":""},
			/*Slot Three */  {"partNumber":"", "btnDesc":""},
			/*Slot Four  */  {"partNumber":"", "btnDesc":""},
			/*Slot Five  */  {"partNumber":"", "btnDesc":""},
			/*Slot Six   */  {"partNumber":"", "btnDesc":""},
			/*Slot Seven */  {"partNumber":"", "btnDesc":""},
			/*Slot Eight */  {"partNumber":"", "btnDesc":""},
			/*Slot Nine  */  {"partNumber":"", "btnDesc":""},
			/*Slot Ten   */  {"partNumber":"", "btnDesc":""},
			/*Slot Eleven*/  {"partNumber":"", "btnDesc":""},
			/*Slot Twelve*/  {"partNumber":"", "btnDesc":""},
		
			];

			$("#sendRequest").click(function() {
				$("#pendantSlotInfo").val(
				'[{"part_number":"' + jsonPendantInfo[0].partNumber + '", "button_description":"' + jsonPendantInfo[0].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[1].partNumber + '", "button_description":"' + jsonPendantInfo[1].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[2].partNumber + '", "button_description":"' + jsonPendantInfo[2].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[3].partNumber + '", "button_description":"' + jsonPendantInfo[3].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[4].partNumber + '", "button_description":"' + jsonPendantInfo[4].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[5].partNumber + '", "button_description":"' + jsonPendantInfo[5].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[6].partNumber + '", "button_description":"' + jsonPendantInfo[6].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[7].partNumber + '", "button_description":"' + jsonPendantInfo[7].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[8].partNumber + '", "button_description":"' + jsonPendantInfo[8].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[9].partNumber + '", "button_description":"' + jsonPendantInfo[9].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[10].partNumber + '", "button_description":"' + jsonPendantInfo[10].btnDesc
				+ '"},{"part_number":"' + jsonPendantInfo[11].partNumber + '", "button_description":"' + jsonPendantInfo[11].btnDesc
				+ '"}]'
				
				);
				
				$fullPartNumber = $("#partNoNumbers").html();
				
				$(".partNoLetters").each(function(){
					if(!$(this).hasClass("noShow"))
						$fullPartNumber += $(this).html();
				});
				
				if(!$('.partNoLight').hasClass("noShow")){
						$fullPartNumber += $('.partNoLight').html();
				};
				
				$("#fullPartNumber").val($fullPartNumber);
				
				$("#price").val($("#estimated-price").html());
				
			$("#submitform").submit(); //make submitform
			
			});
		
			
			
			  
	
		$("#background").css("height", $(window).height()-50);
		
		/*Function for next button shows next slide and hides itself when it reaches final slide and displays previous always*/
		function emptySlots(){
			$empty = false;
			$(".buttonSpace").each(function (index){//check every button space 
				if($(this).css('display') != "none" && !$(this).hasClass("button")){ // if the button is being displayed check if its empty
					$("#emptyAlert").fadeIn(500);
					document.getElementById('emptyAlert').scrollIntoView(); // scroll to error in case the pendant is too long 					
					//alert("button "+(index+1));
					//$(this).addClass("empty");					
					$empty = true;
					//return false;
				}
			});
			
			setTimeout(function(){$('#emptyAlert').fadeOut(400)}, 10000); // hide error after 10 seconds
			
			return $empty;
		}
		function closePanels($firstOpen){
			if($firstOpen === undefined) {
			  $firstOpen = false;
			}
			//close the panels for the switches and buttons
			$('.panelToggler').each(function(index){				
				if($(this).children('span').hasClass("panelOpen")){
					$(this).trigger("click");
				}
				if($firstOpen == 1 && index == 0){
					$(this).trigger("click");
				}
			});
		}
		//changes the number of wires required $wires - number of wires being added /subtracted $sub- false ADD the wires | true SUBSTRACT the wires
		function WiresChange($wires, $sub){
			if($wires === undefined) {
			  $wires = 1;
			}
			if($sub === undefined) {
			  $sub = false;
			}

			//change the number or wires displayed
			$wire_amount = $('#wiresTotal').html();
			console.log("sub: "+ $sub);
			if($sub == true){
				$wire_amount = parseInt($wire_amount) - parseInt($wires);
			}else{
				$wire_amount = parseInt($wire_amount) + parseInt($wires);
			}
			
			$('#wiresTotal').html($wire_amount);	
			
			$("input:radio[name='cable']").attr("disabled", false); //remove any disabled attr from the radio buttons
			$("input:radio[value='noCable']").attr("checked", true);
			
			//disable the cables based onn how many cables are required
			if($wire_amount > 8){
				$('.conductors8').attr("disabled", true);
				//$('.conductors8 + li').addClass('notAvailable');
			}
			if($wire_amount > 12){
				$('.conductors12').attr("disabled", true);
			}
			if($wire_amount > 16){
				$('.conductors16').attr("disabled", true);
			}
			if($wire_amount > 24){
				$('.conductors24').attr("disabled", true);
				// put notice to call for wire pricing please call
				
			}
		}
		$("#nextBtn").click(function() {			
			$current = $(".rightPanelActive").attr('id');
			$next = $("#" + $current).next().attr('id');
			
			// if the next step is the cable page and the buttons are empty display return false
			if($next == "chooseCableRight"&& emptySlots()){
				return false;
			}
			
			// if the next step is the review page and the the cable has not been added properly return false
			if($next == "reviewPendantRight"&& $('#continue').val() == 0){
				$("#lengthAlert").fadeIn(500);
				setTimeout(function(){$('#lengthAlert').fadeOut(400)}, 10000); // hide error after 10 seconds
				return false;
			}
			
			$("#" + $current).toggleClass("rightPanelActive rightPanelInactive");
			$("#" + $current).next().toggleClass("rightPanelActive rightPanelInactive");
			//$("#prevBtn").css("opacity", 1);
			//$("#prevBtn").css("left", 0);
			$("#prevBtn").css("display", "block");
			
			if($next == 'chooseCableRight'){ //remove delete buttons for panel 3 and beyond
				$(".button > i.deleteButton").addClass("review");
				//close the panels for the switches nad buttons
				closePanels(1);
				$("#estimated-price").data("nocableprice", $("#estimated-price").html());
			}

			if($next == 'reviewPendantRight'){
				/////$("#nextBtn").css("opacity", 0);
				//$("#nextBtn").css("left", -5000);
				$("#nextBtn").css("display", "none");
				$('.products.col-md-6').css("display","block");
				$('.products.col-md-6').css("opacity","1");
			} 
			
			$('li.active').removeClass('active');
			$("li[data-slide='" + $next + "']").addClass('active');
			
		});
		
		/**/
		
		
		/*Function for previous button shows previous slide and hides itself when it reaches final slide and displays next always*/
		$("#prevBtn").click(function() {			
			$current = $(".rightPanelActive").attr('id');
			$("#" + $current).toggleClass("rightPanelActive rightPanelInactive");
			$("#" + $current).prev().toggleClass("rightPanelActive rightPanelInactive");
			//$("#nextBtn").css("opacity", 1);
			//$("#nextBtn").css("left", 0);
			$("#nextBtn").css("display", "block");
			$prev = $("#" + $current).prev().attr('id');
			
			if($prev != 'chooseCableRight'){ // show the delete button for first and second steps (previousbutton will never be clicked to go to  the final step)
				$(".button > i.deleteButton").removeClass("review");				
			}
			if($prev == 'choosePendantRight'){
				//$("#prevBtn").css("opacity", 0);
				//$("#prevBtn").css("left", -5000);
				$("#prevBtn").css("display", "none");
				closePanels(1);
			}
			if($prev == 'chooseButtonsRight'){
				$("input:radio[value='noCable']").click();
			}
			
			
			$('li.active').removeClass('active');
			$("li[data-slide='" + $prev + "']").addClass('active');
		});
		
	/*	$('.steps').click(function(){
			$current = $('.steps.active').data('slide');
			$next = $(this).data('slide');
			if($current == $next){ //if current one is clicked do nothing 
				return false;
			}
			if(($next == "reviewPendantRight" || $next == "chooseCableRight") && emptySlots()){// if the next step is the review page
				return false;
			}

			$(".posAbs.rightPanelActive").toggleClass("rightPanelActive rightPanelInactive");
			$('li.active').removeClass('active');
			
			$(this).addClass('active');			
			$("#" + $next).toggleClass("rightPanelActive rightPanelInactive");
			
			//new way by step
			//step 1: choosePendantRight
			if($next == 'choosePendantRight'){
				$("#nextBtn").css("display", "block");
				$("#prevBtn").css("display", "none");
				$(".button > i.deleteButton").removeClass("review");
				closePanels(); //closes all panels of the buttons to prevent the right side from being too long
			}   
			
			//step 2: chooseButtonsRight
			if($next == 'chooseButtonsRight'){  
				$("#nextBtn").css("display", "block");
				$("#prevBtn").css("display", "block");	
				$(".button > i.deleteButton").removeClass("review");
				//closePanels(1); // closes all panels except for the first one
			}
			
			//step 3: chooseCableRight
			if($next == 'chooseCableRight'){
				$("#nextBtn").css("display", "block");
				$("#prevBtn").css("display", "block");
				$(".button > i.deleteButton").addClass("review");
				closePanels();
			}
			
			//step 4: reviewPendantRight			
			if($next == 'reviewPendantRight'){
				$("#nextBtn").css("display", "none");
				$("#prevBtn").css("display", "block");
				$(".button > i.deleteButton").addClass("review");
				closePanels();
			}
			
			
			
			/* old style
			if($next != 'reviewPendantRight'){  
				$("#nextBtn").css("display", "block");
				if($next != 'chooseCableRight'){
					$(".button > i.deleteButton").removeClass("review");
				}
				
			}
			if($next != 'choosePendantRight'){
				$("#prevBtn").css("display", "block");
			}
				
			if($next == 'reviewPendantRight'){
			//check if pendant is full
				$("#nextBtn").css("display", "none");
				$('.products.col-md-6').css("display","block");
				$('.products.col-md-6').css("opacity","1");
				$(".button > i.deleteButton").addClass("review");
				closePanels();
			}
			if($next == 'choosePendantRight'){
				$("#prevBtn").css("display", "none");
				closePanels();
			}
			if($next == 'chooseCableRight'){
				$(".button > i.deleteButton").addClass("review");

			}
		});*/
				
		
		/* Creates the draggable clone for any button */
		/*  helper:clone allows us to pull a clone, not the actual item
			containment:window prevents the user from pulling the items off screen
			appendTo:body allows the cloned item to be above everything in the html to avoid overflow and other styling
			cursorAt: {top:[50% of the height of .dragDropItem.ui-draggable-dragging],left:[50% of the width of .dragDropItem.ui-draggable-dragging]}
		
		*/
		$(".dragDropItem").draggable({
		
		revert: "invalid", 
		
		refreshPositions: true, 
		
		scroll: "true", opacity: 0.5, 
		
		helper: "clone", 
		
		containment: "window", 
		
		appendTo: "body", 
		
		cursor: "-webkit-grabbing", 
		
		cursorAt: {top:50,left:75},
		
		start: function(event, ui) { 
		
			if ($("#pendantSpan").html() != "Two") {
				$("div.scroller").toggle(); 
			};
			
			if ($(window).width() < 1000) {
				$('.products.col-md-6').css("opacity", "0");
			}
		
		},
		
		stop:  function(event, ui) { 
		
			if ($("#pendantSpan").html() != "Two") {
				$("div.scroller").toggle(); 
			}; 
			
			if ($(window).width() < 1000) {
				$('.products.col-md-6').css("opacity", "1");
			}
		
		}
		
		});
		
		
		/* Toggles the flip on click of the specific boxes [front to back] */
		$(".fa-info-circle").click(function() {
			$(this).parent().parent(".flipper").addClass("flipped");
		});
		
		/* Toggles the flip on click of the specific boxes [back to front] */
		$(".fa-chevron-circle-left").click(function() {
			$(this).parent().parent(".flipper").removeClass("flipped");
		});
		
		/*Toggles the panel body under the panel header of page two and changes the chevron arrow to reflect it's status*/
		
		$('.panelToggler').click(function() {
			$(this).next(".panel-body").slideToggle(350);
			$(this).children("span").toggleClass("panelOpen","");
		});

		
		/*Tooltips*/
		$(function () {
			$('[data-toggle="tooltip"]').tooltip()
		})
		
		
		
	/*Functions below graciously provided by Dido's Cafe*/	
	

	$('.firstPanelItem').click(function() {
		$words = ["Two", "Four", "Six", "Eight", "Ten", "Twelve"];
		var select_num = $(".firstPanelItem").index(this); 
		$selection = (select_num + 1)*2;
		newPendant = pendantPrices[select_num];
		price = price - currentPendant + newPendant;
		//console.log(newPendant + " newPendant");
		currentPendant = newPendant;
		//console.log(currentPendant + " currentPendant");
		//console.log(price + " PRICE");
		$('#estimated-price').html(price.toFixed(2));
		$(".buttonSpace").css("display","none");
		$(".buttonSpace").removeAttr("id");
		$(".buttonSpace").children(".buttonInput").prop("disabled", true);
		$(".buttonSpace").slice(0, $selection).css("display","-webkit-box");
		$(".buttonSpace").slice(0, $selection).css("display","flex");
		$(".buttonSpace").slice(0, $selection).children(".buttonInput").removeAttr("disabled");
		$(".buttonSpace:eq("+ ($selection-1) +")").attr("id", "lastBS");
		
		$(".buttonSpace").each(function(){
			if($(this).hasClass("button") && $(this).css('display') == 'none'){
				$(this).children(".deleteButton").click();
			}
		});
		
		/*change the part number to  match selection of pendant*/
		$(".partNoLetters").addClass("noShow");
		$(".partNoLetters").slice(0, $selection).removeClass("noShow");
		$("#partNoNumbers").html($selection + 100);
				
		if($("#lastBS").hasClass("switch") && $("#lastBS").children(".deleteButton").is(":visible")){
			$("#lastBS").children(".deleteButton").trigger( "click" );
		}
		$("#pendantSpan").html($words[select_num]);	
		//$("#pendantButtonsInput").text() = $("#choosePendantLeft > p").text();
		$("#pendantButtonsInput").val($("#choosePendantLeft > p").text());
		if ($(window).width() < 1000) {
				$('.products.col-md-6').toggle();
			}
		
		/* Clears data from the object sent to PHP when the pendant size is changed to reflect. i works as selection number because it corresponds to the first number in the array to be emptied */		
		for (i = $selection; i < 12; i++) {		
			jsonPendantInfo[i].partNumber = "";		
			jsonPendantInfo[i].btnDesc = "";		
		};
		//change prewiring fee according to number of buttons
		$prewire_fee = [22, 24, 26, 28, 30, 32]; 
		$('#prewire_yes').val($prewire_fee[select_num]);
	});
	
	$(".button").draggable({opacity: 0.7, helper: "clone", scroll: true});
	
	$(".buttonSpace").droppable({
	 accept:function(e){
			if($(this).hasClass("button")){ return false} //if there is a button in it already
			if(e.hasClass("switch") && $(this).attr("id") == "lastBS"){return false;}//if you're dragging a switch to last space
			if(e.hasClass("switch") && $(this).next(".buttonSpace").hasClass("button")){return false;}//if you're trying to put a switch on the slot above an occupied space
			return true;
			},
	 activeClass: "highlightDrop", // gives this class to the droppable object when draggable is being dragged
	 //hoverClass: "hover",
	 over: function(event, ui){
		$(this).removeClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").removeClass("hover");
		 }
		$(this).addClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").addClass("hover");
		 }
	 },
	 out: function(event, ui) {
		$(this).removeClass("hover");
		 if($('.ui-draggable-dragging').hasClass("switch")){
			$(this).next(".buttonSpace").removeClass("hover");
		 }	
	 },
	 drop: function(event, ui){
		//remove hover class 		
		 $(this).removeClass("hover");		
		 if($('.ui-draggable-dragging').hasClass("switch")){		
			$(this).next(".buttonSpace").removeClass("hover");		
		 }		
		$data = ui.draggable.data();
		
		var buttonPrice = $data.price;
		
		//console.log(buttonPrice);
		
		price = price + parseFloat(buttonPrice);
		
		//console.log(price + " PRICE");
		
		$('#estimated-price').html(price.toFixed(2));
		
		$(this).children(".infoDisplay").attr('price',$data.price);
		
		if(ui.draggable.hasClass("switch")){ /*if item dragged is a switch*/
			$(this).addClass("button switch");
			$(this).children(".btnLabel").addClass("btnLabel");	
			$(this).next(".buttonSpace").addClass("button switch");	
			$(this).next(".buttonSpace").removeClass("highlightDrop");	
			$(this).next(".buttonSpace").children(".btnLabel").addClass("btnLabel");
			$(this).children(".buttonInput").val(ui.draggable.attr("data-part"));
			$(this).next(".buttonSpace").children(".deleteButton").hide();
			$(this).children(".infoDisplay").show();
			$(this).children(".infoDisplay").addClass("switchInfo");
			$(this).children(".infoDisplay").children(".btnPartNo").html($data.partno);			
			$(this).children(".infoDisplay").children(".btnDesc").html($data.desc);			
			$(this).children(".infoDisplay").children(".btnCover").html($data.cover);
			$(this).children(".infoDisplay").children(".btnWires").html($data.wires);
			var index = $(".buttonSpace").index(this);
			jsonPendantInfo[index].partNumber = $data.partno + " | Button 1/2" ;
			jsonPendantInfo[index].btnDesc = $data.desc;
			jsonPendantInfo[index+1].partNumber = $data.partno + " | Button 2/2";
			jsonPendantInfo[index+1].btnDesc = $data.desc;
			
			/*add the 2 letter alias to part number (CC 10/19/17)*/
			$('.partNoLetters').eq(index).html($data.partno.match(/\(([^)]+)\)/)[1]); // gets the 2 letters inside the parentheses () and puts them in the correct spot
			$('.partNoLetters').eq(index+1).addClass("noShow"); //do not show the empty spot for the second spot of the switch
			$('.partNoLetters').eq(index+1).html(""); 
			
			/*add the number of wires required*/
			WiresChange($data.wires);
			
			
			//$(this).next(".buttonSpace").children(".infoDisplay").show();
				if(ui.draggable.hasClass("onOff")) {
					$(this).addClass("on");
					$(this).next(".buttonSpace").addClass("off");
				}
		}else{
			$(this).children(".btnLabel").addClass("btnLabel");
			$(this).children(".infoDisplay").show();
			$(this).children(".infoDisplay").children(".btnPartNo").html($data.partno);
			$(this).children(".infoDisplay").children(".btnDesc").html($data.desc);
			$(this).children(".infoDisplay").children(".btnCover").html($data.cover);
			$(this).children(".infoDisplay").children(".btnWires").html($data.wires);
			$(this).addClass("button");		
			$(this).children(".buttonInput").val(ui.draggable.attr("data-part"));
			$(this).children(".deleteButton").attr("style");
			var index = $(".buttonSpace").index(this);
			jsonPendantInfo[index].partNumber = $data.partno;
			jsonPendantInfo[index].btnDesc = $data.desc;
			
			/*add the 2 letter alias to part number (CC 10/19/17)*/
			$('.partNoLetters').eq(index).html($data.partno.match(/\(([^)]+)\)/)[1]); // gets the 2 letters inside the parentheses () and puts them in the correct spot
			
			/*add the number of wires required*/
			WiresChange($data.wires);

			
			
			
				if(ui.draggable.hasClass("pushLock")) {
					$(this).addClass("pushLock");
				};
				
				if(ui.draggable.hasClass("toggleSwitch")) {
					$(this).addClass("toggleSwitch");
				};
				
				if(ui.draggable.hasClass("blindRubber")) {
					$(this).addClass("blindRubber");
				};
				
				if(ui.draggable.hasClass("selectorSwitch")) {
					$(this).addClass("selectorSwitch");
				};
				
  				if(ui.draggable.hasClass("buzzer")) {
					$(this).children(".btnLabel").addClass("round");
				};
  				if(ui.draggable.hasClass("horn")) {
					$(this).children(".btnLabel").addClass("round");
				};  
				
			
		}
	 }
	});
	//removes button / switch
	$(".deleteButton").click(function(){
	
		//$data = grab the price value from this specific item;
	
		var buttonPrice = $(this).siblings(".infoDisplay").attr('price');
		
		//console.log(buttonPrice);
			
		price = price - buttonPrice;
		
		//console.log(price + " PRICE");
		
		$('#estimated-price').html(price.toFixed(2));
		
		$(this).siblings(".infoDisplay").attr('price',"");
		
		if($(this).parent(".buttonSpace").hasClass("switch")){/*if switch*/
			$(this).parent(".buttonSpace").removeClass("button  switch");
			$(this).parent(".buttonSpace").removeClass("on off");
			$(this).parent(".buttonSpace").next(".buttonSpace").removeClass("button  switch");
			$(this).parent(".buttonSpace").next(".buttonSpace").removeClass("on off");
			$(this).next(".buttonInput").attr("value", "");
			$(this).parent(".buttonSpace").next(".buttonSpace").children(".buttonInput").attr("value", "");
			$(this).parent(".buttonSpace").next(".buttonSpace").children(".deleteButton").removeAttr("style");
			/*hide button side info and empty value being displayed*/
			$(this).siblings(".infoDisplay").hide();
			$(this).siblings(".infoDisplay").children(".btnPartNo").html("");	
			$(this).siblings(".infoDisplay").children(".btnDesc").html("");	
			$(this).siblings(".infoDisplay").children(".btnCover").html("");	
			$(this).siblings(".infoDisplay").removeClass("switchInfo");
			
			/*remove the 2 letters fot the part number */
			$parentButton = $(this).parent(".buttonSpace"); // get buttonspace for the delete button
			$parentIndex = $(".buttonSpace").index($parentButton); // get index of said button
			$('.partNoLetters').eq($parentIndex).html('_');//use index to change 2 letter alias in part number 		
			$('.partNoLetters').eq($parentIndex+1).removeClass("noShow");//use index to change 2 letter alias in part number 
			$('.partNoLetters').eq($parentIndex+1).html('_');//make sure that second space for the button has a blank space 		
			
			/*add the number of wires required*/
			WiresChange($data.wires, true);

			
			
		}else{/*else it's just one button*/
			$(this).parent(".buttonSpace").removeClass("button selectorSwitch toggleSwitch blindRubber pushLock");
			$(this).next(".buttonInput").attr("value", "");
			/*hide button side info and empty value being displayed*/
			$(this).siblings(".infoDisplay").hide();
			$(this).siblings(".infoDisplay").children(".btnPartNo").html("");
			$(this).siblings(".infoDisplay").children(".btnDesc").html("");	
			$(this).siblings(".infoDisplay").children(".btnCover").html("");
			
			/*remove the 2 letters fot the part number */
			$parentButton = $(this).parent(".buttonSpace"); // get buttonspace for the delete button
			$parentIndex = $(".buttonSpace").index($parentButton); // get index of said button
			//console.log("delete button space parent" + $parentIndex);
			$('.partNoLetters').eq($parentIndex).html('_');//use index to change 2 letter alias in part number 
			
			/*add the number of wires required*/
			WiresChange($data.wires, true);
			
		}
	});
	
	$("input:radio[name='cable']").click(function(){
		if($(this).val() == 'noCable'){ 

			// hide the options for cable length and prewire
			$("#length_div").hide('slow');
			
			// if the current price is different from the price without cable change it back to price without cable 
			if($("#estimated-price").data("nocableprice") != $("#estimated-price").html()){ 
				$("#estimated-price").html($("#estimated-price").data("nocableprice"));
			}
			
			//clear the input fields for the cable length and prewire
			$('#cableLength').val("");
			$('#prewire_no').prop('checked', true);
			
			//allow to user to continue to next screen
			$('#continue').val(1);
			
			$('#cableTypeInput').val('No Cable');
		
			$('#cableLengthInput').val('0');
		
			$('#preWired').val('');
			
			return
		}
		//update multiplier for length  maybe		REMOVE
		$('#cableLength').data("footprice", $(this).data('price'));
		
		// show the options for cable length and prewire
		$("#length_div").show('slow');
			
		$('#cableLength').focus();
		
		//cannot continue until the price of the cable gets added
		$('#continue').val(0);
	});
	/*$('#cableLength').change(function(){
		
		 // if 0 display error? 
		/* console.log("$('#estimated-price').data('nocableprice') " +  $('#estimated-price').data("nocableprice"));

		 //console.log("$price_without_cable " + $price_without_cable);
		 
		 /*console.log("$(this).val() " + $(this).val());
		 console.log("$(this).data('footprice') " + $(this).data('footprice'));
		 $("input:radio[name='prewire']").attr("disabled", false);
		 //console.log("$newPrice " + $newPrice);

		 
		 
		 //testing: add the current price to the price without cable  update the nocableprice before going to step 3
		//$('#estimated-price').data('nocableprice', parseFloat($('#estimated-price').html()) );
		
		//console.log("$('#estimated-price').data('nocableprice') " +  $('#estimated-price').data("nocableprice"));
		//$price_without_cable =  $('#estimated-price').data('nocableprice');
		
		//$newPrice = ($(this).val() *  $(this).data('footprice')) + $price_without_cable;
		//$('#estimated-price').html($newPrice.toFixed(2));
		
		
	});*/

	$('#cableLength').change(function(){
		$('#continue').val(0);
	});	
	 $('#add_cable').click(function(){
		 		
		var $length = parseFloat($('#cableLength').val());
		
		if($length < 1 || isNaN($length)){
			$("#lengthAlert").fadeIn(500);
			setTimeout(function(){$('#lengthAlert').fadeOut(400)}, 10000); // hide error after 10 seconds
			$('#continue').val(0);
			return false;
		}
		
		var $price_per_foot =  parseFloat($('input:radio[name="cable"]:checked').data('price'));
		var $prewired = parseFloat($('input:radio[name="prewire"]:checked').val());
		var $price_without_cable = parseFloat($("#estimated-price").data("nocableprice"));
		var $total_cable_price = ($length * $price_per_foot) + $prewired;
		var $newPrice = $price_without_cable + $total_cable_price
		$("#estimated-price").html($newPrice.toFixed(2));
		
		$('#continue').val(1); //allows to continue 
		
		$('#cableTypeInput').val($('input:radio[name="cable"]:checked').val());
		
		$('#cableLengthInput').val($length);
		
		$('#preWired').val($prewired);
	 });
/***************************************************************/	
	$("input:radio[name='light']").change(function(){
		
		//get the data of clicked lement
		$data = $(this).data();
		
		if($(this).val() == 'noLight'){ 

			// remove the light 
			$(".lightcircle").removeClass('active');
			
				//remove price of light
				var lightPrice = $data.price;
				console.log("light Price:"+price);
				
				price = price - parseFloat(lightPrice);								
				$('#estimated-price').html(price.toFixed(2));
			
				$(this).data('price', 0);
			
			$('#pilotLight .infoDisplay').hide();
			
			$('#pilotLight .infoDisplay .btnPartNo').html('');			
			
			$('.partNoLight').addClass("noShow");
			
			$('#lightInfo').val('noLight');
			
			return
		}
		
		//show the light as being 'ON'
		$(".lightcircle").addClass('active');
		
		
		$('#pilotLight').children(".infoDisplay").children(".btnPartNo").html($data.partno);			
		
		
		//remove price of prevously selected
		//add price of light				
		var oldLightPrice = $('input:radio[name="light"][value="noLight"]').data('price');
		var lightPrice = $data.price;						
		price = (price - parseFloat(oldLightPrice)) + parseFloat(lightPrice);								
		//price = price + parseFloat(lightPrice);								
		$('#estimated-price').html(price.toFixed(2));
		
		//add price of selected radio
		$('input:radio[name="light"][value="noLight"]').data('price', $data.price);		
		
		//add the 2 letter code at the end of the part number
		$('.partNoLight').html($data.partno.match(/\(([^)]+)\)/)[1]); 
		$('.partNoLight').removeClass("noShow");
		
		//display the light's info
		$('#pilotLight .infoDisplay').show();
		
		//add info to hidden input to be sent 
		
		$('#lightInfo').val($data.partno + "|" + $data.desc);
		
	});
	
	