var map;
var feature_group;
function loadQGIS(){	
	map = L.map('map', { zoomControl:true }).fitBounds([[1.18696906129,103.557355926],[1.51280279022,104.126030001]]);
	var hash = new L.Hash(map); //add hashes to html address to easy share locations
	var additional_attrib = 'created w. <a href="https://github.com/geolicious/qgis2leaf" target ="_blank">qgis2leaf</a> by <a href="http://www.geolicious.de" target ="_blank">Geolicious</a> & contributors<br>';
	feature_group = new L.featureGroup([]);
	var raster_group = new L.LayerGroup([]);
	var basemap_0 = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});	
	basemap_0.addTo(map);
	var basemap_1 = L.tileLayer('http://{s}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png', {attribution: additional_attrib + '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'});	
	
	var osmGeocoder = new L.Control.OSMGeocoder({
            collapsed: false,
            position: 'topright',
            text: 'Find!',
			});
		osmGeocoder.addTo(map);
		
	var baseMaps = {
		'OSM Standard': basemap_0,
		'OSM Black & White': basemap_1
	};
	L.control.layers(baseMaps,{},{collapsed:true}).addTo(map);
		function updateOpacity(value) {
	}
	L.control.scale({options: {position: 'bottomleft',maxWidth: 100,metric: true,imperial: false,updateWhenIdle: false}}).addTo(map);
	
	var marker = L.marker([1.32082, 103.93805],
            {draggable: true,        // Make the icon dragable
            title: 'Hover Text',     // Add a title
            opacity: 0.8}            // Adjust the opacity
            )
            .addTo(map)
			

			
		marker.on("dragend",function(ev){

            var chagedPos = ev.target.getLatLng();
			var newLat = chagedPos.lat
			var newLng = chagedPos.lng
			var checkAddress = "http://nominatim.openstreetmap.org/reverse?json_callback=myfunction&lat="+newLat+"&lon="+newLng+"&zoom=18&addressdetails=1"		
					
			window.open("http://www.latlong.net/c/?lat="+newLat+"&long="+newLng+"", "myWindow", "width=999, height=999")
        
        });
	
	$('#loading').hide();
}

var prevBank = false;
var prevBus = false;
var prevChild = false;
var prevCC = false;
var prevConStore = false;
var prevElder = false;
var prevFireStn = false;
var prevHaunted = false;
var prevHawker = false;
var prevHospital = false;
var prevJC = false;
var prevLib = false;
var prevMoh = false;
var prevMrt = false;
var prevMusuem = false;
var prevPark = false;
var prevPetrol = false;
var prevWorship = false;
var prevPolice = false;
var prevPolyclinic = false;
var prevPri = false;
var prevSec = false;
var prevShopping = false;
var prevSports = false;
var prevSupermkt = false;
var prevTertEdu = false;

var bankBuffer = "BankDissolve200_Bank";
var busBuffer = "BusDissolve200_Bus";
var ccBuffer = "CCDissolve200_CC";
var childBuffer = "ChildDissolve200_Child";
var conStoreBuffer = "ConStoreDissolve200_ConStore";
var elderBuffer = "ElderlyDissolve200_Elder";
var hawkerBuffer = "HawkerDissolve200_Hawker";
var hospitalBuffer = "HospitalDissolve200_Hospital";
var jcBuffer = "JCDissolve200_JC";
var libBuffer = "LibDissolve200_Lib";
var mohBuffer = "MohDissolve200_Moh";
var mrtBuffer = "MrtDissolve200_Mrt";
var parkBuffer = "ParkDissolve200_Park";
var petrolBuffer = "PetrolDissolve200_Petrol";
var policeBuffer = "PoliceDissolve200_Police";
var polyclinicBuffer = "PolyclinicDissolve200_Polyclinic";
var priBuffer = "PriDissolve200_Pri";
var secBuffer = "SecDissolve200_Sec";
var shoppingBuffer = "ShoppingDissolve200_Shopping";
var sportsBuffer = "SportsDissolve200_Sport";
var supermktBuffer = "SupermktDissolve200_Supermkt";
var worshipBuffer = "WorshipDissolve200_Worship";

function computeServices(){
	$('#loading').show();
	document.getElementById("step2").style.display = "block";
	document.getElementById("serviceTabID").style.display = "block";

	removeAllResidential();
	document.getElementById("residentialBufferOn").value = "off";
	document.getElementById("nearestOn").value = "off";
	document.getElementById("returnId").style.display = "none";
	document.getElementById("short").innerHTML = "";
	removeResidentialBuffer();
	removeAllPoints();
	removeBufferOnly();
	
	if(prevBank == true){
		if (bank.checked != 1){
			map.removeLayer(exp_bankbedokJSON);
			if(exp_BankBuffer200JSON !== undefined){
				map.removeLayer(exp_BankBuffer200JSON);
			}
			if(exp_BankBuffer100JSON !== undefined){
				map.removeLayer(exp_BankBuffer100JSON);
			}
			if(exp_BankBuffer300JSON !== undefined){
				map.removeLayer(exp_BankBuffer300JSON);
			}
			if(exp_BankBuffer400JSON !== undefined){
				map.removeLayer(exp_BankBuffer400JSON);
			}
			prevBank = false;
		}
	}else{
		if (bank.checked == 1){
			loadBankPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadBankBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadBankBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadBankBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadBankBuffer400();
			}
			prevBank = true;
		}else if(exp_bankbedokJSON === undefined || exp_BankBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevBus == true){
		if (busStop.checked != 1){
			map.removeLayer(exp_busbedokJSON);
			if(exp_BusBuffer200JSON !== undefined){
				map.removeLayer(exp_BusBuffer200JSON);
			}
			if(exp_BusBuffer100JSON !== undefined){
				map.removeLayer(exp_BusBuffer100JSON);
			}
			if(exp_BusBuffer300JSON !== undefined){
				map.removeLayer(exp_BusBuffer300JSON);
			}
			if(exp_BusBuffer400JSON !== undefined){
				map.removeLayer(exp_BusBuffer400JSON);
			}
			prevBus = false;
		}
	}else{
		if (busStop.checked == 1){
			loadBusPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadBusBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadBusBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadBusBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadBusBuffer400();
			}
			prevBus = true;
		}else if(exp_busbedokJSON === undefined || exp_BusBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevChild == true){
		if (childcare.checked != 1){
			map.removeLayer(exp_childcarebedokJSON);
			if(exp_ChildBuffer200JSON !== undefined){
				map.removeLayer(exp_ChildBuffer200JSON);
			}
			if(exp_ChildBuffer100JSON !== undefined){
				map.removeLayer(exp_ChildBuffer100JSON);
			}
			if(exp_ChildBuffer300JSON !== undefined){
				map.removeLayer(exp_ChildBuffer300JSON);
			}
			if(exp_ChildBuffer400JSON !== undefined){
				map.removeLayer(exp_ChildBuffer400JSON);
			}
			prevChild = false;
		}
	}else{
		if (childcare.checked == 1){
			loadChildPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadChildBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadChildBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadChildBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadChildBuffer400();
			}
			prevChild = true;
		}else if(exp_childcarebedokJSON === undefined || exp_ChildBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevCC == true){
		if (communityCentre.checked != 1){
			map.removeLayer(exp_communitycentresbedokJSON);
			if(exp_CCBuffer200JSON !== undefined){
				map.removeLayer(exp_CCBuffer200JSON);
			}
			if(exp_CCBuffer100JSON !== undefined){
				map.removeLayer(exp_CCBuffer100JSON);
			}
			if(exp_CCBuffer300JSON !== undefined){
				map.removeLayer(exp_CCBuffer300JSON);
			}
			if(exp_CCBuffer400JSON !== undefined){
				map.removeLayer(exp_CCBuffer400JSON);
			}
			prevCC = false;
		}
	}else{
		if (communityCentre.checked == 1){
			loadCCPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadCCBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadCCBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadCCBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadCCBuffer400();
			}
			prevCC = true;
		}else if(exp_communitycentresbedokJSON === undefined || exp_CCBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevConStore == true){
		if (convenienceStore.checked != 1){
			map.removeLayer(exp_conveniencestorebedokJSON);
			if(exp_ConStoreBuffer200JSON !== undefined){
				map.removeLayer(exp_ConStoreBuffer200JSON);
			}
			if(exp_ConStoreBuffer100JSON !== undefined){
				map.removeLayer(exp_ConStoreBuffer100JSON);
			}
			if(exp_ConStoreBuffer300JSON !== undefined){
				map.removeLayer(exp_ConStoreBuffer300JSON);
			}
			if(exp_ConStoreBuffer400JSON !== undefined){
				map.removeLayer(exp_ConStoreBuffer400JSON);
			}
			prevConStore = false;
		}
	}else{
		if (convenienceStore.checked == 1){
			loadConStorePoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadConStoreBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadConStoreBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadConStoreBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadConStoreBuffer400();
			}
			prevConStore = true;
		}else if(exp_conveniencestorebedokJSON === undefined || exp_ConStoreBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevElder == true){
		if (eldercare.checked != 1){
			map.removeLayer(exp_eldercarebedokJSON);
			if(exp_ElderlyBuffer200JSON !== undefined){
				map.removeLayer(exp_ElderlyBuffer200JSON);
			}
			if(exp_ElderlyBuffer100JSON !== undefined){
				map.removeLayer(exp_ElderlyBuffer100JSON);
			}
			if(exp_ElderlyBuffer300JSON !== undefined){
				map.removeLayer(exp_ElderlyBuffer300JSON);
			}
			if(exp_ElderlyBuffer400JSON !== undefined){
				map.removeLayer(exp_ElderlyBuffer400JSON);
			}
			prevElder = false;
		}
	}else{
		if (eldercare.checked == 1){
			loadElderPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadElderBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadElderBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadElderBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadElderBuffer400();
			}
			prevElder = true;
		}else if(exp_eldercarebedokJSON === undefined || exp_ElderlyBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevFireStn == true){
		if (fireStation.checked != 1){
			map.removeLayer(exp_eldercarebedokJSON);
			map.removeLayer(exp_ElderlyBuffer200JSON);
			prevFireStn = false;
		}
	}else{
		if (fireStation.checked == 1){
			loadFireStnPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadFireStnBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadFireStnBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadFireStnBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadFireStnBuffer400();
			}
			prevFireStn = true;
		}else if(exp_eldercarebedokJSON === undefined || exp_ElderlyBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevHaunted == true){
		if (hauntedPlaces.checked != 1){
			map.removeLayer(exp_eldercarebedokJSON);
			map.removeLayer(exp_ElderlyBuffer200JSON);
			prevHaunted = false;
		}
	}else{
		if (hauntedPlaces.checked == 1){
			loadHauntedPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadHauntedBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadHauntedBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadHauntedBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadHauntedBuffer400();
			}
			prevHaunted = true;
		}else if(exp_eldercarebedokJSON === undefined || exp_ElderlyBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevHawker == true){
		if (hawker.checked != 1){
			map.removeLayer(exp_hawkerbedokJSON);
			if(exp_HawkerBuffer200JSON !== undefined){
				map.removeLayer(exp_HawkerBuffer200JSON);
			}
			if(exp_HawkerBuffer100JSON !== undefined){
				map.removeLayer(exp_HawkerBuffer100JSON);
			}
			if(exp_HawkerBuffer300JSON !== undefined){
				map.removeLayer(exp_HawkerBuffer300JSON);
			}
			if(exp_HawkerBuffer400JSON !== undefined){
				map.removeLayer(exp_HawkerBuffer400JSON);
			}
			prevHawker = false;
		}
	}else{
		if (hawker.checked == 1){
			loadHawkerPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadHawkerBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadHawkerBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadHawkerBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadHawkerBuffer400();
			}
			prevHawker = true;
		}else if(exp_hawkerbedokJSON === undefined || exp_HawkerBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevHospital == true){
		if (hospital.checked != 1){
			map.removeLayer(exp_hospitalsbedokJSON);
			if(exp_HospitalBuffer200JSON !== undefined){
				map.removeLayer(exp_HospitalBuffer200JSON);
			}
			if(exp_HospitalBuffer100JSON !== undefined){
				map.removeLayer(exp_HospitalBuffer100JSON);
			}
			if(exp_HospitalBuffer300JSON !== undefined){
				map.removeLayer(exp_HospitalBuffer300JSON);
			}
			if(exp_HospitalBuffer400JSON !== undefined){
				map.removeLayer(exp_HospitalBuffer400JSON);
			}
			prevHospital = false;
		}
	}else{
		if (hospital.checked == 1){
			loadHospitalPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadHospitalBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadHospitalBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadHospitalBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadHospitalBuffer400();
			}
			prevHospital = true;
		}else if(exp_hospitalsbedokJSON === undefined || exp_HospitalBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevJC == true){
		if (jcSch.checked != 1){
			map.removeLayer(exp_JCbedokJSON);
			if(exp_JCBuffer200JSON !== undefined){
				map.removeLayer(exp_JCBuffer200JSON);
			}
			if(exp_JCBuffer100JSON !== undefined){
				map.removeLayer(exp_JCBuffer100JSON);
			}
			if(exp_JCBuffer300JSON !== undefined){
				map.removeLayer(exp_JCBuffer300JSON);
			}
			if(exp_JCBuffer400JSON !== undefined){
				map.removeLayer(exp_JCBuffer400JSON);
			}
			prevJC = false;
		}
	}else{
		if (jcSch.checked == 1){
			loadJCPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadJCBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadJCBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadJCBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadJCBuffer400();
			}
			prevJC = true;
		}else if(exp_JCbedokJSON === undefined || exp_JCBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevLib == true){
		if (library.checked != 1){
			map.removeLayer(exp_librariesbedokJSON);
			if(exp_LibBuffer200JSON !== undefined){
				map.removeLayer(exp_LibBuffer200JSON);
			}
			if(exp_LibBuffer100JSON !== undefined){
				map.removeLayer(exp_LibBuffer100JSON);
			}
			if(exp_LibBuffer300JSON !== undefined){
				map.removeLayer(exp_LibBuffer300JSON);
			}
			if(exp_LibBuffer400JSON !== undefined){
				map.removeLayer(exp_LibBuffer400JSON);
			}
			prevLib = false;
		}
	}else{
		if (library.checked == 1){
			loadLibPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadLibBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadLibBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadLibBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadLibBuffer400();
			}
			prevLib = true;
		}else if(exp_librariesbedokJSON === undefined || exp_LibBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevMoh == true){
		if (mohClinics.checked != 1){
			map.removeLayer(exp_clinicsbedokJSON);
			if(exp_MohBuffer200JSON !== undefined){
				map.removeLayer(exp_MohBuffer200JSON);
			}
			if(exp_MohBuffer100JSON !== undefined){
				map.removeLayer(exp_MohBuffer100JSON);
			}
			if(exp_MohBuffer300JSON !== undefined){
				map.removeLayer(exp_MohBuffer300JSON);
			}
			if(exp_MohBuffer400JSON !== undefined){
				map.removeLayer(exp_MohBuffer400JSON);
			}
			prevMoh = false;
		}
	}else{
		if (mohClinics.checked == 1){
			loadMohPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadMohBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadMohBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadMohBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadMohBuffer400();
			}
			prevMoh = true;
		}else if(exp_clinicsbedokJSON === undefined || exp_MohBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevMrt == true){
		if (mrt.checked != 1){
			map.removeLayer(exp_mrtbedokJSON);
			if(exp_MrtBuffer200JSON !== undefined){
				map.removeLayer(exp_MrtBuffer200JSON);
			}
			if(exp_MrtBuffer100JSON !== undefined){
				map.removeLayer(exp_MrtBuffer100JSON);
			}
			if(exp_MrtBuffer300JSON !== undefined){
				map.removeLayer(exp_MrtBuffer300JSON);
			}
			if(exp_MrtBuffer400JSON !== undefined){
				map.removeLayer(exp_MrtBuffer400JSON);
			}
			prevMrt = false;
		}
	}else{
		if (mrt.checked == 1){
			loadMrtPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadMrtBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadMrtBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadMrtBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadMrtBuffer400();
			}
			prevMrt = true;
		}else if(exp_mrtbedokJSON === undefined || exp_MrtBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevMusuem == true){
		if (museum.checked != 1){
			map.removeLayer(exp_mrtbedokJSON);
			map.removeLayer(exp_MrtBuffer200JSON);
			prevMusuem = false;
		}
	}else{
		if (museum.checked == 1){
			loadMrtPoint();
			loadMrtBuffer200();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadMrtBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadMrtBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadMrtBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadMrtBuffer400();
			}
			prevMusuem = true;
		}else if(exp_mrtbedokJSON === undefined || exp_MrtBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevPark == true){
		if (nationalParks.checked != 1){
			map.removeLayer(exp_parksbedokJSON);
			if(exp_ParkBuffer200JSON !== undefined){
				map.removeLayer(exp_ParkBuffer200JSON);
			}
			if(exp_ParkBuffer100JSON !== undefined){
				map.removeLayer(exp_ParkBuffer100JSON);
			}
			if(exp_ParkBuffer300JSON !== undefined){
				map.removeLayer(exp_ParkBuffer300JSON);
			}
			if(exp_ParkBuffer400JSON !== undefined){
				map.removeLayer(exp_ParkBuffer400JSON);
			}
			prevPark = false;
		}
	}else{
		if (nationalParks.checked == 1){
			loadParkPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadParkBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadParkBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadParkBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadParkBuffer400();
			}
			prevPark = true;
		}else if(exp_parksbedokJSON === undefined || exp_ParkBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevPetrol == true){
		if (petrolKiosks.checked != 1){
			map.removeLayer(exp_petrolstationsbedokJSON);
			if(exp_PetrolBuffer200JSON !== undefined){
				map.removeLayer(exp_PetrolBuffer200JSON);
			}
			if(exp_PetrolBuffer100JSON !== undefined){
				map.removeLayer(exp_PetrolBuffer100JSON);
			}
			if(exp_PetrolBuffer300JSON !== undefined){
				map.removeLayer(exp_PetrolBuffer300JSON);
			}
			if(exp_PetrolBuffer400JSON !== undefined){
				map.removeLayer(exp_PetrolBuffer400JSON);
			}
			prevPetrol = false;
		}
	}else{
		if (petrolKiosks.checked == 1){
			loadPetrolPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadPetrolBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadPetrolBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadPetrolBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadPetrolBuffer400();
			}
			prevPetrol = true;
		}else if(exp_petrolstationsbedokJSON === undefined || exp_PetrolBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevWorship == true){
		if (worship.checked != 1){
			map.removeLayer(exp_placeofworshipbedokJSON);
			if(exp_WorshipBuffer200JSON !== undefined){
				map.removeLayer(exp_WorshipBuffer200JSON);
			}
			if(exp_WorshipBuffer100JSON !== undefined){
				map.removeLayer(exp_WorshipBuffer100JSON);
			}
			if(exp_WorshipBuffer300JSON !== undefined){
				map.removeLayer(exp_WorshipBuffer300JSON);
			}
			if(exp_WorshipBuffer400JSON !== undefined){
				map.removeLayer(exp_WorshipBuffer400JSON);
			}
			prevWorship = false;
		}
	}else{
		if (worship.checked == 1){
			loadWorshipPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadWorshipBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadWorshipBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadWorshipBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadWorshipBuffer400();
			}
			prevWorship = true;
		}else if(exp_placeofworshipbedokJSON === undefined || exp_WorshipBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevPolice == true){
		if (police.checked != 1){
			map.removeLayer(exp_policebedokJSON);
			if(exp_PoliceBuffer200JSON !== undefined){
				map.removeLayer(exp_PoliceBuffer200JSON);
			}
			if(exp_PoliceBuffer100JSON !== undefined){
				map.removeLayer(exp_PoliceBuffer100JSON);
			}
			if(exp_PoliceBuffer300JSON !== undefined){
				map.removeLayer(exp_PoliceBuffer300JSON);
			}
			if(exp_PoliceBuffer400JSON !== undefined){
				map.removeLayer(exp_PoliceBuffer400JSON);
			}
			prevPolice = false;
		}
	}else{
		if (police.checked == 1){
			loadPolicePoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadPoliceBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadPoliceBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadPoliceBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadPoliceBuffer400();
			}
			prevPolice = true;
		}else if(exp_policebedokJSON === undefined || exp_PoliceBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevPolyclinic == true){
		if (polyClinics.checked != 1){
			map.removeLayer(exp_polyclinicabedokJSON);
			if(exp_PolyclinicBuffer200JSON !== undefined){
				map.removeLayer(exp_PolyclinicBuffer200JSON);
			}
			if(exp_PolyclinicBuffer100JSON !== undefined){
				map.removeLayer(exp_PolyclinicBuffer100JSON);
			}
			if(exp_PolyclinicBuffer300JSON !== undefined){
				map.removeLayer(exp_PolyclinicBuffer300JSON);
			}
			if(exp_PolyclinicBuffer400JSON !== undefined){
				map.removeLayer(exp_PolyclinicBuffer400JSON);
			}
			prevPolyclinic = false;
		}
	}else{
		if (polyClinics.checked == 1){
			loadPolyclinicPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadPolyclinicBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadPolyclinicBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadPolyclinicBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadPolyclinicBuffer400();
			}
			prevPolyclinic = true;
		}else if(exp_polyclinicabedokJSON === undefined || exp_PolyclinicBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevPri == true){
		if (priSch.checked != 1){
			map.removeLayer(exp_prischoolbedokJSON);
			if(exp_PriBuffer200JSON !== undefined){
				map.removeLayer(exp_PriBuffer200JSON);
			}
			if(exp_PriBuffer100JSON !== undefined){
				map.removeLayer(exp_PriBuffer100JSON);
			}
			if(exp_PriBuffer300JSON !== undefined){
				map.removeLayer(exp_PriBuffer300JSON);
			}
			if(exp_PriBuffer400JSON !== undefined){
				map.removeLayer(exp_PriBuffer400JSON);
			}
			prevPri = false;
		}
	}else{
		if (priSch.checked == 1){
			loadPriPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadPriBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadPriBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadPriBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadPriBuffer400();
			}
			prevPri = true;
		}else if(exp_prischoolbedokJSON === undefined || exp_PriBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevSec == true){
		if (secSch.checked != 1){
			map.removeLayer(exp_secschoolbedokJSON);
			if(exp_SecBuffer200JSON !== undefined){
				map.removeLayer(exp_SecBuffer200JSON);
			}
			if(exp_SecBuffer100JSON !== undefined){
				map.removeLayer(exp_SecBuffer100JSON);
			}
			if(exp_SecBuffer300JSON !== undefined){
				map.removeLayer(exp_SecBuffer300JSON);
			}
			if(exp_SecBuffer400JSON !== undefined){
				map.removeLayer(exp_SecBuffer400JSON);
			}
			prevSec = false;
		}
	}else{
		if (secSch.checked == 1){
			loadSecPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadSecBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadSecBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadSecBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadSecBuffer400();
			}
			prevSec = true;
		}else if(exp_secschoolbedokJSON === undefined || exp_SecBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevShopping == true){
		if (shopping.checked != 1){
			map.removeLayer(exp_shoppingbedokJSON);
			if(exp_ShoppingBuffer200JSON !== undefined){
				map.removeLayer(exp_ShoppingBuffer200JSON);
			}
			if(exp_ShoppingBuffer100JSON !== undefined){
				map.removeLayer(exp_ShoppingBuffer100JSON);
			}
			if(exp_ShoppingBuffer300JSON !== undefined){
				map.removeLayer(exp_ShoppingBuffer300JSON);
			}
			if(exp_ShoppingBuffer400JSON !== undefined){
				map.removeLayer(exp_ShoppingBuffer400JSON);
			}
			prevShopping = false;
		}
	}else{
		if (shopping.checked == 1){
			loadShoppingPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadShoppingBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadShoppingBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadShoppingBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadShoppingBuffer400();
			}
			prevShopping = true;
		}else if(exp_shoppingbedokJSON === undefined || exp_ShoppingBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevSports == true){
		if (sportsFacility.checked != 1){
			map.removeLayer(exp_sportsbedokJSON);
			if(exp_SportsBuffer200JSON !== undefined){
				map.removeLayer(exp_SportsBuffer200JSON);
			}
			if(exp_SportsBuffer100JSON !== undefined){
				map.removeLayer(exp_SportsBuffer100JSON);
			}
			if(exp_SportsBuffer300JSON !== undefined){
				map.removeLayer(exp_SportsBuffer300JSON);
			}
			if(exp_SportsBuffer400JSON !== undefined){
				map.removeLayer(exp_SportsBuffer400JSON);
			}
			prevSports = false;
		}
	}else{
		if (sportsFacility.checked == 1){
			loadSportsPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadSportsBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadSportsBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadSportsBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadSportsBuffer400();
			}
			prevSports = true;
		}else if(exp_sportsbedokJSON === undefined || exp_ShoppingBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevSupermkt == true){
		if (supermarket.checked != 1){
			map.removeLayer(exp_supermarketbedokJSON);
			if(exp_SupermktBuffer100JSON !== undefined){
				map.removeLayer(exp_SupermktBuffer100JSON);
			}
			if(exp_SupermktBuffer200JSON !== undefined){
				map.removeLayer(exp_SupermktBuffer200JSON);
			}
			if(exp_SupermktBuffer300JSON !== undefined){
				map.removeLayer(exp_SupermktBuffer300JSON);
			}
			if(exp_SupermktBuffer400JSON !== undefined){
				map.removeLayer(exp_SupermktBuffer400JSON);
			}
			prevSupermkt = false;
		}
	}else{
		if (supermarket.checked == 1){
			loadSupermarketPoint();
			if( $('#ex13').data('slider').getValue() == "100"){
				loadSupermarketBuffer100();
			}else if( $('#ex13').data('slider').getValue() == "200"){
				loadSupermarketBuffer200();
			}
			else if( $('#ex13').data('slider').getValue() == "300"){
				loadSupermarketBuffer300();
			}
			else if( $('#ex13').data('slider').getValue() == "400"){
				loadSupermarketBuffer400();
			}
			prevSupermkt = true;
		}else if(exp_supermarketbedokJSON === undefined || exp_SupermktBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevTertEdu == true){
		if (tertiaryEdu.checked != 1){
			map.removeLayer(exp_supermarketbedokJSON);
			map.removeLayer(exp_SupermktBuffer200JSON);
			prevTertEdu = false;
		}
	}else{
		if (tertiaryEdu.checked == 1){
			loadTertEduPoint();
			loadTertEduBuffer200();
			prevTertEdu = true;
		}else if(exp_supermarketbedokJSON === undefined || exp_SupermktBuffer200JSON === undefined){
		//do nothing
		}
	}
	
	if(prevBank == true || prevBus == true || prevChild == true || prevCC == true || prevConStore == true || prevElder == true || prevFireStn == true || prevHaunted == true || prevHawker == true || prevHospital == true || prevJC == true || prevLib == true || prevMoh == true || prevMrt == true || prevMusuem == true || prevPetrol == true || prevPark == true || prevWorship == true || prevPolice == true || prevPolyclinic == true || prevPri == true || prevSec == true || prevShopping == true || prevSports == true || prevSupermkt == true || prevTertEdu == true){
		intersectingResidential();
		document.getElementById("step3").style.display = "block";
		document.getElementById("bufferSlider").style.display = "block";
	}else{
		document.getElementById("step3").style.display = "none";
		document.getElementById("bufferSlider").style.display = "none";
		$('#myModal2').modal('hide');
		$('#loading').hide();
	}
}

function intersectingResidential(){
	var intersectArray = [];
	if(prevBank == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[bankBuffer] == "Bank"){
				intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
			}
		}
	}
	
	if(prevBus == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[busBuffer] == "Bus"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevChild == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[childBuffer] == "Child"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevCC == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[ccBuffer] == "CC"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevConStore == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[conStoreBuffer] == "ConStore"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevElder == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[elderBuffer] == "Elder"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevFireStn == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties["BusDissolve200_Bus"] == "Bus"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevHaunted == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties["BusDissolve200_Bus"] == "Bus"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevHawker == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[hawkerBuffer] == "Hawker"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevHospital == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[hospitalBuffer] == "Hospital"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevJC == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[jcBuffer] == "JC"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevLib == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[libBuffer] == "Lib"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevMoh == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[mohBuffer] == "Moh"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevMrt == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[mrtBuffer] == "Mrt"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevMusuem == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties["BusDissolve200_Bus"] == "Bus"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevPark == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[parkBuffer] == "Park"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevPetrol == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[petrolBuffer] == "Petrol"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevWorship == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[worshipBuffer] == "Worship"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevPolice == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[policeBuffer] == "Police"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevPolyclinic == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[polyclinicBuffer] == "Polyclinic"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevPri == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[priBuffer] == "Pri"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevSec == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[secBuffer] == "Sec"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevShopping == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[shoppingBuffer] == "Shopping"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevSports == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[sportsBuffer] == "Sport"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevSupermkt == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties[supermktBuffer] == "Supermkt"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}
	
	if(prevTertEdu == true){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			if(exp_residentialbedok.features[i].properties["BusDissolve200_Bus"] == "Bus"){
				var sameIndex = false;
				for(var j = 0; j<intersectArray.length; j++){
					var intersectSplit = intersectArray[j].split(",");
					if(intersectSplit[1] == exp_residentialbedok.features[i].properties["index"]){
						sameIndex = true;
						var addCount = parseInt(intersectSplit[0])+1;
						intersectArray[j] = addCount + "," + exp_residentialbedok.features[i].properties["index"];
						break;
					}
				}
				if(sameIndex == false){
					intersectArray.push("0,"+exp_residentialbedok.features[i].properties["index"]);
				}
			}
		}
	}

	//Sort the array
	//intersectArray.sort(function(a, b){return b-a});
	
	//Find the top score (most num of overlap for buildings)
	//var firstIntersectSplit = intersectArray[0].split(",");
	var topScore = 0;
	for(var i = 0; i<intersectArray.length; i++){
		var intersectSplit = intersectArray[i].split(",");
		if(parseInt(intersectSplit[0]) > topScore){
			topScore = parseInt(intersectSplit[0]);
		}
	}
	
	//Compute second top score
	var secondTop = 0;
	if(topScore != 0){
		for(var i = 0; i<intersectArray.length; i++){
			var intersectSplit = intersectArray[i].split(",");
			if(parseInt(intersectSplit[0]) < topScore){
				if(parseInt(intersectSplit[0]) > secondTop){
					secondTop = parseInt(intersectSplit[0]);
				}
			}
		}
	}
	
	var count = 0;
	var count2 = 0;
	console.log("topscore "+topScore);
	console.log("secondTop "+secondTop);
	
	//Change color
	for(var i = 0; i<intersectArray.length; i++){
		var intersectSplit = intersectArray[i].split(",");
		if(intersectSplit[0] == topScore){
			count++;
			exp_residentialbedok.features[parseInt(intersectSplit[1]-1)].properties["color_qgis2leaf"]="#FFFF00";
		}
	}
	
	if(topScore != 0){
		for(var i = 0; i<intersectArray.length; i++){
			var intersectSplit = intersectArray[i].split(",");
			if(intersectSplit[0] == secondTop){
				count2++;
				exp_residentialbedok.features[parseInt(intersectSplit[1]-1)].properties["color_qgis2leaf"]="#F2F5A9";
			}
		}
	}
	document.getElementById("highlightedBuilding").innerHTML = count;
	document.getElementById("highlightedBuilding2").innerHTML = count2;
	
	loadBedokResidential();
	
	$('#myModal2').modal('hide');
	$('#loading').hide();
}

function bufferResidential(osmId){
	removeAllResidential();
	removeBufferOnly();
	document.getElementById("residentialBufferOn").value = "on";
	document.getElementById("returnId").style.display = "block";
	
	document.getElementById("step2").style.display = "none";
	document.getElementById("serviceTabID").style.display = "none";
	document.getElementById("step3").style.display = "none";
	document.getElementById("bufferSlider").style.display = "none";
	document.getElementById("highlightedBuilding").innerHTML = "1";
	document.getElementById("highlightedBuilding2").innerHTML = "";
	
	var index = 0;
	for(var i = 0; i<exp_residentialbedok.features.length; i++){
		if(exp_residentialbedok.features[i].properties["osm_id"] == osmId){
			index = i;
			break;
		}
	}
		
	if( $('#ex13').data('slider').getValue() == "100"){
		exp_residentialbedok.features[index].properties["color_qgis2leaf"]="#FFFF00";
		//exp_residentialbedok.features[index].properties["transp_qgis2leaf"]="0.5";
		exp_ResidentialBuffer100.features[index].properties["transp_qgis2leaf"]="0.25";
		loadBedokResidential100();
	}else if( $('#ex13').data('slider').getValue() == "200"){
		exp_residentialbedok.features[index].properties["color_qgis2leaf"]="#FFFF00";
		//exp_residentialbedok.features[index].properties["transp_qgis2leaf"]="0.5";
		exp_ResidentialBuffer200.features[index].properties["transp_qgis2leaf"]="0.25";
		loadBedokResidential200();
	}
	else if( $('#ex13').data('slider').getValue() == "300"){
		exp_residentialbedok.features[index].properties["color_qgis2leaf"]="#FFFF00";
		//exp_residentialbedok.features[index].properties["transp_qgis2leaf"]="0.5";
		exp_ResidentialBuffer300.features[index].properties["transp_qgis2leaf"]="0.25";
		loadBedokResidential300();
	}
	else if( $('#ex13').data('slider').getValue() == "400"){
		exp_residentialbedok.features[index].properties["color_qgis2leaf"]="#FFFF00";
		//exp_residentialbedok.features[index].properties["transp_qgis2leaf"]="0.5";
		exp_ResidentialBuffer400.features[index].properties["transp_qgis2leaf"]="0.25";
		loadBedokResidential400();
	}
	loadBedokResidential();
}

function shortestRoute(osmId){
	removeAllPoints();
	
	document.getElementById("residentialBufferOn").value = "on";
	document.getElementById("nearestOn").value = "on";
	document.getElementById("returnId").style.display = "block";
	
	document.getElementById("step2").style.display = "none";
	document.getElementById("serviceTabID").style.display = "none";
	document.getElementById("step3").style.display = "none";
	document.getElementById("bufferSlider").style.display = "none";
	document.getElementById("highlightedBuilding").innerHTML = "";
	document.getElementById("highlightedBuilding2").innerHTML = "";
	
	prevBank = false;
	prevBus = false;
	prevChild = false;
	prevCC = false;
	prevConStore = false;
	prevElder = false;
	prevFireStn = false;
	prevHaunted = false;
	prevHawker = false;
	prevHospital = false;
	prevJC = false;
	prevLib = false;
	prevMoh = false;
	prevMrt = false;
	prevMusuem = false;
	prevPark = false;
	prevPetrol = false;
	prevWorship = false;
	prevPolice = false;
	prevPolyclinic = false;
	prevPri = false;
	prevSec = false;
	prevShopping = false;
	prevSports = false;
	prevSupermkt = false;
	prevTertEdu = false;
	
	document.getElementById("short").innerHTML += "<b>Distance from nearest amenties: </b>"+"<br>";
	
	if (bank.checked == 1){
		//Get nearest bank_id and distance
		var bankIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				bankIdChosen = exp_ResidentialDistance.features[i].properties["Bank_Id"];
				document.getElementById("short").innerHTML += "Nearest Bank: "+ parseFloat(exp_ResidentialDistance.features[i].properties["Bank_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		//Change icon of bank_id
		for(var i = 0; i<exp_bankbedok.features.length; i++){
			if(exp_bankbedok.features[i].properties["ID"] == bankIdChosen){
				if(exp_bankbedok.features[i].properties["icon_exp"] == "posb.png"){
					exp_bankbedok.features[i].properties["icon_exp"] = "posbking.png";
				}else if(exp_bankbedok.features[i].properties["icon_exp"] == "dbs.png"){
					exp_bankbedok.features[i].properties["icon_exp"] = "dbsking.png";
				}else if(exp_bankbedok.features[i].properties["icon_exp"] == "ocbc.png"){
					exp_bankbedok.features[i].properties["icon_exp"] = "ocbcking.png";
				}else if(exp_bankbedok.features[i].properties["icon_exp"] == "uob.png"){
					exp_bankbedok.features[i].properties["icon_exp"] = "uobking.png";
				}else if(exp_bankbedok.features[i].properties["icon_exp"] == "maybank.png"){
					exp_bankbedok.features[i].properties["icon_exp"] = "maybankking.png";
				}
				break;
			}
		}
		
		//Load bank icon
		loadBankPoint();
	}
	if (busStop.checked == 1){
		var busIdChosen="";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				busIdChosen = exp_ResidentialDistance.features[i].properties["Bus_Id"];
				document.getElementById("short").innerHTML += "Nearest Bus Stop: "+parseFloat(exp_ResidentialDistance.features[i].properties["Bus_Dist"]).toFixed(2)+"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_busbedok.features.length; i++){
			if(exp_busbedok.features[i].properties["BUS_STOP_N"] == busIdChosen){
				exp_busbedok.features[i].properties["icon_exp"] = "busking.svg";
				break;
			}
		}
		
		loadBusPoint();
	}
	if (childcare.checked == 1){
		var childIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				childIdChosen = exp_ResidentialDistance.features[i].properties["Child_Id"];
				document.getElementById("short").innerHTML += "Nearest Childcare: "+parseFloat(exp_ResidentialDistance.features[i].properties["Child_Dist"]).toFixed(2)+"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_childcarebedok.features.length; i++){
			if(exp_childcarebedok.features[i].properties["OBJECTID"] == childIdChosen){
				exp_childcarebedok.features[i].properties["icon_exp"] = "childcareking.svg";
				break;
			}
		}
		
		loadChildPoint();
	}
	if (communityCentre.checked == 1){
		var ccIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				ccIdChosen = exp_ResidentialDistance.features[i].properties["CC_Id"];
				document.getElementById("short").innerHTML += "Nearest Community Centre: "+parseFloat(exp_ResidentialDistance.features[i].properties["CC_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_communitycentresbedok.features.length; i++){
			if(exp_communitycentresbedok.features[i].properties["OBJECTID"] == ccIdChosen){
				exp_communitycentresbedok.features[i].properties["icon_exp"] = "ccking.svg";
				break;
			}
		}
		
		loadCCPoint();
	}
	if (convenienceStore.checked == 1){
		var csIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				csIdChosen = exp_ResidentialDistance.features[i].properties["CS_Id"];
				document.getElementById("short").innerHTML += "Nearest Convenience Store: "+parseFloat(exp_ResidentialDistance.features[i].properties["CS_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_conveniencestorebedok.features.length; i++){
			if(exp_conveniencestorebedok.features[i].properties["ConStoreId"] == csIdChosen){
				if(exp_conveniencestorebedok.features[i].properties["icon_exp"] == "711.png"){
					exp_conveniencestorebedok.features[i].properties["icon_exp"] = "711king.png"
				}else if(exp_conveniencestorebedok.features[i].properties["icon_exp"] == "cheers.png"){
					exp_conveniencestorebedok.features[i].properties["icon_exp"] = "cheersking.png"
				}
				break;
			}
		}
		
		loadConStorePoint();
	}
	if (eldercare.checked == 1){
		var elderIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				elderIdChosen = exp_ResidentialDistance.features[i].properties["Elder_Id"];
				document.getElementById("short").innerHTML += "Nearest Eldercare: "+parseFloat(exp_ResidentialDistance.features[i].properties["Elder_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_eldercarebedok.features.length; i++){
			if(exp_eldercarebedok.features[i].properties["OBJECTID"] == elderIdChosen){
				exp_eldercarebedok.features[i].properties["icon_exp"] = "elderking.svg";
				break;
			}
		}
		
		loadElderPoint();
	}
	if (hawker.checked == 1){
		var hawkerIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				hawkerIdChosen = exp_ResidentialDistance.features[i].properties["Hawk_Id"];
				document.getElementById("short").innerHTML += "Nearest Hawker Centre: "+parseFloat(exp_ResidentialDistance.features[i].properties["Hawk_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_hawkerbedok.features.length; i++){
			if(exp_hawkerbedok.features[i].properties["OBJECTID"] == hawkerIdChosen){
				exp_hawkerbedok.features[i].properties["icon_exp"] = "foodking.svg";
				break;
			}
		}
		
		loadHawkerPoint();
	}
	if (hospital.checked == 1){
		var hosIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				hosIdChosen = exp_ResidentialDistance.features[i].properties["Hos_Id"];
				document.getElementById("short").innerHTML += "Nearest Hospital: "+parseFloat(exp_ResidentialDistance.features[i].properties["Hos_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_hospitalsbedok.features.length; i++){
			if(exp_hospitalsbedok.features[i].properties["ID"] == hosIdChosen){
				exp_hospitalsbedok.features[i].properties["icon_exp"] = "hospitalking.svg";
				break;
			}
		}
		
		loadHospitalPoint();
	}
	if (jcSch.checked == 1){
		var jcIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				jcIdChosen = exp_ResidentialDistance.features[i].properties["JC_Id"];
				document.getElementById("short").innerHTML += "JC: "+parseFloat(exp_ResidentialDistance.features[i].properties["JC_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_JCbedok.features.length; i++){
			if(exp_JCbedok.features[i].properties["JC_Id"] == jcIdChosen){		
				exp_JCbedok.features[i].properties["icon_exp"] = "jcking.svg";
				break;
			}
		}
		
		loadJCPoint();
	}
	if (library.checked == 1){
		var libIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				libIdChosen = exp_ResidentialDistance.features[i].properties["Lib_Id"];
				document.getElementById("short").innerHTML += "Lib: "+parseFloat(exp_ResidentialDistance.features[i].properties["Lib_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_librariesbedok.features.length; i++){
			if(exp_librariesbedok.features[i].properties["OBJECTID"] == libIdChosen){
				exp_librariesbedok.features[i].properties["icon_exp"] = "librariesking.svg";
				break;
			}
		}
		
		loadLibPoint();
	}
	if (mohClinics.checked == 1){
		var mohIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				mohIdChosen = exp_ResidentialDistance.features[i].properties["Moh_Id"];
				document.getElementById("short").innerHTML += "Nearest MOH CHAS Clinic: "+parseFloat(exp_ResidentialDistance.features[i].properties["Moh_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_clinicsbedok.features.length; i++){
			if(exp_clinicsbedok.features[i].properties["OBJECTID"] == mohIdChosen){
				exp_clinicsbedok.features[i].properties["icon_exp"] = "clinicking.svg";
				break;
			}
		}
		
		loadMohPoint();
	}
	if (mrt.checked == 1){
		var mrtIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				mrtIdChosen = exp_ResidentialDistance.features[i].properties["Mrt_id"]
				document.getElementById("short").innerHTML += "Nearest MRT: "+parseFloat(exp_ResidentialDistance.features[i].properties["Mrt_Dist"].toFixed(2)) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_mrtbedok.features.length; i++){
			if(exp_mrtbedok.features[i].properties["mrt_id"] == mrtIdChosen){
				exp_mrtbedok.features[i].properties["icon_exp"] = "mrtking.svg";
				break;
			}
		}
		
		loadMrtPoint();
	}
	if (nationalParks.checked == 1){
		var parkIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				parkIdChosen = exp_ResidentialDistance.features[i].properties["Park_Id"];
				document.getElementById("short").innerHTML += "Nearest Park: "+parseFloat(exp_ResidentialDistance.features[i].properties["Park_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_parksbedok.features.length; i++){
			if(exp_parksbedok.features[i].properties["OBJECTID"] == parkIdChosen){
				exp_parksbedok.features[i].properties["icon_exp"] = "parksking.svg";
				break;
			}
		}
		
		loadParkPoint();
	}
	if (petrolKiosks.checked == 1){
		var petrolIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				petrolIdChosen = exp_ResidentialDistance.features[i].properties["Petrol_Id"];
				document.getElementById("short").innerHTML += "Nearest Petrol Kiosk: "+parseFloat(exp_ResidentialDistance.features[i].properties["Petrl_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_petrolstationsbedok.features.length; i++){
			if(exp_petrolstationsbedok.features[i].properties["Petrol_Id"] == petrolIdChosen){
				if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "caltex.png"){
					exp_petrolstationsbedok.features[i].properties["icon_exp"] = "caltexking.png";
				}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "esso.png"){
					exp_petrolstationsbedok.features[i].properties["icon_exp"] = "essoking.png";
				}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "shell.png"){
					exp_petrolstationsbedok.features[i].properties["icon_exp"] = "shellking.png";
				}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "spc.png"){
					exp_petrolstationsbedok.features[i].properties["icon_exp"] = "spcking.png";
				}
				break;
			}
		}
		
		loadPetrolPoint();
	}
	if (worship.checked == 1){
		var worshipIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				worshipIdChosen = exp_ResidentialDistance.features[i].properties["Wrshp_Id"];
				document.getElementById("short").innerHTML += "Nearest Place of Worship: "+parseFloat(exp_ResidentialDistance.features[i].properties["Wrshp_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_placeofworshipbedok.features.length; i++){
			if(exp_placeofworshipbedok.features[i].properties["Worship_Id"] == worshipIdChosen){
				if(exp_placeofworshipbedok.features[i].properties["icon_exp"] == "mosque.svg"){
					exp_placeofworshipbedok.features[i].properties["icon_exp"] = "mosqueking.svg";
				}else if(exp_placeofworshipbedok.features[i].properties["icon_exp"] = "church.svg"){
					exp_placeofworshipbedok.features[i].properties["icon_exp"] = "churchking.svg";
				}else if(exp_placeofworshipbedok.features[i].properties["icon_exp"] = "temple.svg"){
					exp_placeofworshipbedok.features[i].properties["icon_exp"] = "templeking.svg";
				}
				
				break;
			}
		}
		
		loadWorshipPoint();
	}
	if (police.checked == 1){
		var policeIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				policeIdChosen = exp_ResidentialDistance.features[i].properties["Polic_Id"];
				document.getElementById("short").innerHTML += "Nearest Police: "+parseFloat(exp_ResidentialDistance.features[i].properties["Polic_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_policebedok.features.length; i++){
			if(exp_policebedok.features[i].properties["OBJECTID"] == policeIdChosen){
				exp_policebedok.features[i].properties["icon_exp"] = "policeking.svg";
				break;
			}
		}
		
		loadPolicePoint();
	}
	if (polyClinics.checked == 1){
		var polyclinicIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				polyclinicIdChosen = exp_ResidentialDistance.features[i].properties["Poi_Id"];
				document.getElementById("short").innerHTML += "Nearest Polyclinic: "+parseFloat(exp_ResidentialDistance.features[i].properties["Poi_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_polyclinicabedok.features.length; i++){
			if(exp_polyclinicabedok.features[i].properties["POI_Id"] == polyclinicIdChosen){
				exp_polyclinicabedok.features[i].properties["icon_exp"] = "polyclinicking.svg";
				break;
			}
		}
		
		loadPolyclinicPoint();
	}
	if (priSch.checked == 1){
		var priIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				priIdChosen = exp_ResidentialDistance.features[i].properties["Pri_Id"];
				document.getElementById("short").innerHTML += "Nearest Primary School: "+parseFloat(exp_ResidentialDistance.features[i].properties["Pri_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_prischoolbedok.features.length; i++){
			if(exp_prischoolbedok.features[i].properties["Pri_Id"] == priIdChosen){
				exp_prischoolbedok.features[i].properties["icon_exp"] = "primaryking.svg";
				break;
			}
		}
		
		loadPriPoint();
	}
	if (secSch.checked == 1){
		var secIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				secIdChosen = exp_ResidentialDistance.features[i].properties["Sec_Id"];
				document.getElementById("short").innerHTML += "Nearest Secondary School: "+parseFloat(exp_ResidentialDistance.features[i].properties["Sec_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_secschoolbedok.features.length; i++){
			if(exp_secschoolbedok.features[i].properties["Sec_Id"] == secIdChosen){
				exp_secschoolbedok.features[i].properties["icon_exp"] = "secondaryking.svg";
				break;
			}
		}
		
		loadSecPoint();
	}
	if (shopping.checked == 1){
		var shoppingIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				shoppingIdChosen = exp_ResidentialDistance.features[i].properties["Shop_Id"];
				document.getElementById("short").innerHTML += "Nearest Shopping Centre: "+parseFloat(exp_ResidentialDistance.features[i].properties["Shop_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_shoppingbedok.features.length; i++){
			if(exp_shoppingbedok.features[i].properties["Shop_Id"] == shoppingIdChosen){
				exp_shoppingbedok.features[i].properties["icon_exp"] = "shopking.svg";
				break;
			}
		}
		
		loadShoppingPoint();
	}
	if (sportsFacility.checked == 1){
		var sportsIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				sportsIdChosen = exp_ResidentialDistance.features[i].properties["Sport_Id"];
				document.getElementById("short").innerHTML += "Nearest Sports Facilities: "+parseFloat(exp_ResidentialDistance.features[i].properties["Sport_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_sportsbedok.features.length; i++){
			if(exp_sportsbedok.features[i].properties["OBJECTID"] == sportsIdChosen){
				exp_sportsbedok.features[i].properties["icon_exp"] = "sportsking.svg";
				break;
			}
		}
		
		loadSportsPoint();
	}
	if (supermarket.checked == 1){
		var supermktIdChosen = "";
		for(var i = 0; i<exp_ResidentialDistance.features.length; i++){
			if(exp_ResidentialDistance.features[i].properties["osm_id"] == osmId){
				supermktIdChosen = exp_ResidentialDistance.features[i].properties["Smkt_Id"];
				document.getElementById("short").innerHTML += "Nearest Supermarket: "+parseFloat(exp_ResidentialDistance.features[i].properties["Smkt_Dist"]).toFixed(2) +"m <br>";
				break;
			}
		}
		
		for(var i = 0; i<exp_supermarketbedok.features.length; i++){
			if(exp_supermarketbedok.features[i].properties["Suprmkt_Id"] == supermktIdChosen){
				if(exp_supermarketbedok.features[i].properties["icon_exp"] == "ntuc.png"){
					exp_supermarketbedok.features[i].properties["icon_exp"] = "ntucking.png";
				}else if(exp_supermarketbedok.features[i].properties["icon_exp"] == "shengsiong.png"){
					exp_supermarketbedok.features[i].properties["icon_exp"] = "shengsiongking.png";
				}else if(exp_supermarketbedok.features[i].properties["icon_exp"] == "giant.png"){
					exp_supermarketbedok.features[i].properties["icon_exp"] = "giantking.png";
				}
				break;
			}
		}
		
		loadSupermarketPoint();
	}
	
}