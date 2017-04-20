var $hereForPicker
var $aReasonPicker
var $hereForOutlinePicker
var $aReasonOutlinePicker

$(function() {
	$hereForPicker = $("#here-for-picker")
	$aReasonPicker = $("#a-reason-picker")
	$hereForOutlinePicker = $("#here-for-outline-picker")
	$aReasonOutlinePicker = $("#a-reason-outline-picker")
	$("#container").svg({loadURL: "logo.svg"})
	$("#swap-button").click(onSwapButtonClicked)
})

$(window).resize(function() {
	
})

function onSwapButtonClicked() {
	var hereFor = $hereForPicker.val()
	var aReason = $aReasonPicker.val()
	var hereForOutline = $hereForOutlinePicker.val()
	var aReasonOutline = $aReasonOutlinePicker.val()
	$hereForPicker.val(aReason)
	$aReasonPicker.val(hereFor)
	$hereForOutlinePicker.val(aReasonOutline)
	$aReasonOutlinePicker.val(hereForOutline)
	setHereForColor(aReason)
	setAReasonColor(hereFor)
	setHereForOutlineColor(aReasonOutline)
	setAReasonOutlineColor(hereForOutline)
}

function setBackgroundColor(picker) { setColor(picker, "background") }
function setHereForColor(picker) { setColor(picker, "here-for") }
function setAReasonColor(picker) { setColor(picker, "a-reason") }
function setHereForOutlineColor(picker) { setColor(picker, "here-for-outline") }
function setAReasonOutlineColor(picker) { setColor(picker, "a-reason-outline") }

function setColor(picker, id) {
	var svg = $("#container").svg("get");
	$("#" + id, svg.root()).attr("fill", "#" + picker.toString())
}