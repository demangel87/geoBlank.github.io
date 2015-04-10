function singapore(){
	map.fitBounds([[1.18696906129,103.557355926],[1.51280279022,104.126030001]]);
	document.getElementById("step2").style.display = "none";
	document.getElementById("serviceTabID").style.display = "none";
	document.getElementById("step3").style.display = "none";
	document.getElementById("bufferSlider").style.display = "none";
	removeAllResidential();
	removeAllBuffer();
	document.getElementById("areaChosen").value = "Singapore";
	document.getElementById("highlightedBuilding").innerHTML = "";
	document.getElementById("highlightedBuilding2").innerHTML = "";
	
	document.getElementById("fireStation").disabled = false;
	document.getElementById("hauntedPlaces").disabled = false;
	document.getElementById("museum").disabled = false;
	document.getElementById("tertiaryEdu").disabled = false;
}

function bedok(){
	map.fitBounds([[1.29648684066,103.894488693],[1.35392028931,103.965322578]]);
	document.getElementById("serviceTabID").style.display = "block";
	document.getElementById("step2").style.display = "block";

	removeAllResidential();
	removeAllBuffer();
	document.getElementById("areaChosen").value = "Bedok";
	document.getElementById("highlightedBuilding").value = "";
	
	document.getElementById("fireStation").disabled = true;
	document.getElementById("hauntedPlaces").disabled = true;
	document.getElementById("museum").disabled = true;
	document.getElementById("tertiaryEdu").disabled = true;
}

function tampines(){
	map.fitBounds([[1.3125707411,103.91444943],[1.37732033334,103.995341532]]);
	document.getElementById("serviceTabID").style.display = "block";
	document.getElementById("step2").style.display = "block";

	removeAllResidential();
	removeAllBuffer();
	document.getElementById("areaChosen").value = "Tampines";
	
	document.getElementById("hauntedPlaces").disabled = true;
}

function removeAllResidential(){
	if(exp_residentialbedokJSON !== undefined){
		for(var i = 0; i<exp_residentialbedok.features.length; i++){
			exp_residentialbedok.features[i].properties["color_qgis2leaf"]="#33a02c";
			exp_residentialbedok.features[index].properties["transp_qgis2leaf"]="1.0";
		}
		map.removeLayer(exp_residentialbedokJSON);
	}
}

function removeAllBuffer(){
	if(exp_bankbedokJSON !== undefined){
		map.removeLayer(exp_bankbedokJSON);
	}
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
	if(exp_busbedokJSON !== undefined){
		map.removeLayer(exp_busbedokJSON);
	}
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
	if(exp_childcarebedokJSON !== undefined){
		map.removeLayer(exp_childcarebedokJSON);
	}
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
	if(exp_communitycentresbedokJSON !== undefined){
		map.removeLayer(exp_communitycentresbedokJSON);
	}
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
	if(exp_conveniencestorebedokJSON !== undefined){
		map.removeLayer(exp_conveniencestorebedokJSON);
	}
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
	if(exp_eldercarebedokJSON !== undefined){
		map.removeLayer(exp_eldercarebedokJSON);
	}
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
	if(exp_hawkerbedokJSON !== undefined){
		map.removeLayer(exp_hawkerbedokJSON);
	}
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
	if(exp_hospitalsbedokJSON !== undefined){
		map.removeLayer(exp_hospitalsbedokJSON);
	}
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
	if(exp_JCbedokJSON !== undefined){
		map.removeLayer(exp_JCbedokJSON);
	}
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
	if(exp_librariesbedokJSON !== undefined){
		map.removeLayer(exp_librariesbedokJSON);
	}
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
	if(exp_clinicsbedokJSON !== undefined){
		map.removeLayer(exp_clinicsbedokJSON);
	}
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
	if(exp_mrtbedokJSON !== undefined){
		map.removeLayer(exp_mrtbedokJSON);
	}
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
	if(exp_parksbedokJSON !== undefined){
		map.removeLayer(exp_parksbedokJSON);
	}
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
	if(exp_petrolstationsbedokJSON !== undefined){
		map.removeLayer(exp_petrolstationsbedokJSON);
	}
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
	if(exp_placeofworshipbedokJSON !== undefined){
		map.removeLayer(exp_placeofworshipbedokJSON);
	}
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
	if(exp_policebedokJSON !== undefined){
		map.removeLayer(exp_policebedokJSON);
	}
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
	if(exp_polyclinicabedokJSON !== undefined){
		map.removeLayer(exp_polyclinicabedokJSON);
	}
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
	if(exp_prischoolbedokJSON !== undefined){
		map.removeLayer(exp_prischoolbedokJSON);
	}
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
	if(exp_secschoolbedokJSON !== undefined){
		map.removeLayer(exp_secschoolbedokJSON);
	}
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
	if(exp_shoppingbedokJSON !== undefined){
		map.removeLayer(exp_shoppingbedokJSON);
	}
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
	if(exp_sportsbedokJSON !== undefined){
		map.removeLayer(exp_sportsbedokJSON);
	}
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
	if(exp_supermarketbedokJSON !== undefined){
		map.removeLayer(exp_supermarketbedokJSON);
	}
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
	
	//Uncheck checkbox
	document.getElementById("bank").checked = false;
	document.getElementById("hospital").checked = false;
	document.getElementById("police").checked = false;
	document.getElementById("busStop").checked = false;
	document.getElementById("jcSch").checked = false;
	document.getElementById("polyClinics").checked = false;
	document.getElementById("childcare").checked = false;
	document.getElementById("library").checked = false;
	document.getElementById("priSch").checked = false;
	document.getElementById("communityCentre").checked = false;
	document.getElementById("mohClinics").checked = false;
	document.getElementById("secSch").checked = false;
	document.getElementById("convenienceStore").checked = false;
	document.getElementById("mrt").checked = false;
	document.getElementById("shopping").checked = false;
	document.getElementById("eldercare").checked = false;
	document.getElementById("sportsFacility").checked = false;
	document.getElementById("fireStation").checked = false;
	document.getElementById("nationalParks").checked = false;
	document.getElementById("supermarket").checked = false;
	document.getElementById("hauntedPlaces").checked = false;
	document.getElementById("petrolKiosks").checked = false;
	document.getElementById("tertiaryEdu").checked = false;
	document.getElementById("hawker").checked = false;
	document.getElementById("worship").checked = false;
	
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
}

function removeBufferOnly(){
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
}

function removeResidentialBuffer(){
	if(exp_ResidentialBuffer100JSON !== undefined){
		for(var i = 0; i<exp_ResidentialBuffer100.features.length; i++){
			exp_ResidentialBuffer100.features[i].properties["color_qgis2leaf"]="#33a02c";
			exp_ResidentialBuffer100.features[i].properties["transp_qgis2leaf"]="0.0";
		}
		map.removeLayer(exp_ResidentialBuffer100JSON);
	}
	if(exp_ResidentialBuffer200JSON !== undefined){
		for(var i = 0; i<exp_ResidentialBuffer200.features.length; i++){
			exp_ResidentialBuffer200.features[i].properties["color_qgis2leaf"]="#33a02c";
			exp_ResidentialBuffer200.features[i].properties["transp_qgis2leaf"]="0.0";
		}
		map.removeLayer(exp_ResidentialBuffer200JSON);
	}
	if(exp_ResidentialBuffer300JSON !== undefined){
		for(var i = 0; i<exp_ResidentialBuffer300.features.length; i++){
			exp_ResidentialBuffer300.features[i].properties["color_qgis2leaf"]="#33a02c";
			exp_ResidentialBuffer300.features[i].properties["transp_qgis2leaf"]="0.0";
		}
		map.removeLayer(exp_ResidentialBuffer300JSON);
	}
	if(exp_ResidentialBuffer400JSON !== undefined){
		for(var i = 0; i<exp_ResidentialBuffer400.features.length; i++){
			exp_ResidentialBuffer400.features[i].properties["color_qgis2leaf"]="#33a02c";
			exp_ResidentialBuffer400.features[i].properties["transp_qgis2leaf"]="0.0";
		}
		map.removeLayer(exp_ResidentialBuffer400JSON);
	}
	
}

function removeAllPoints(){
	if(exp_bankbedokJSON !== undefined){
		for(var i = 0; i<exp_bankbedok.features.length; i++){
			if(exp_bankbedok.features[i].properties["icon_exp"] == "posbking.png"){
				exp_bankbedok.features[i].properties["icon_exp"] = "posb.png";
				break;
			}else if(exp_bankbedok.features[i].properties["icon_exp"] == "dbsking.png"){
				exp_bankbedok.features[i].properties["icon_exp"] = "dbs.png";
				break;
			}else if(exp_bankbedok.features[i].properties["icon_exp"] == "ocbcking.png"){
				exp_bankbedok.features[i].properties["icon_exp"] = "ocbc.png";
				break;
			}else if(exp_bankbedok.features[i].properties["icon_exp"] == "uobking.png"){
				exp_bankbedok.features[i].properties["icon_exp"] = "uob.png";
				break;
			}else if(exp_bankbedok.features[i].properties["icon_exp"] == "maybankking.png"){
				exp_bankbedok.features[i].properties["icon_exp"] = "maybank.png";
				break;
			}
		}
		map.removeLayer(exp_bankbedokJSON);
	}
	if(exp_busbedokJSON !== undefined){
		for(var i = 0; i<exp_busbedok.features.length; i++){
			if(exp_busbedok.features[i].properties["icon_exp"] == "busking.svg"){
				exp_busbedok.features[i].properties["icon_exp"] = "bus.svg";
				break;
			}
		}
		map.removeLayer(exp_busbedokJSON);
	}
	if(exp_childcarebedokJSON !== undefined){
		for(var i = 0; i<exp_childcarebedok.features.length; i++){
			if(exp_childcarebedok.features[i].properties["icon_exp"] == "childcareking.svg"){
				exp_childcarebedok.features[i].properties["icon_exp"] = "childcare.svg";
				break;
			}
		}
		map.removeLayer(exp_childcarebedokJSON);
	}
	if(exp_communitycentresbedokJSON !== undefined){
		for(var i = 0; i<exp_communitycentresbedok.features.length; i++){
			if(exp_communitycentresbedok.features[i].properties["icon_exp"] == "ccking.svg"){
				exp_communitycentresbedok.features[i].properties["icon_exp"] = "cc.svg";
				break;
			}
		}
		map.removeLayer(exp_communitycentresbedokJSON);
	}
	if(exp_conveniencestorebedokJSON !== undefined){
		for(var i = 0; i<exp_conveniencestorebedok.features.length; i++){
			if(exp_conveniencestorebedok.features[i].properties["icon_exp"] == "711king.png"){
				exp_conveniencestorebedok.features[i].properties["icon_exp"] = "711.png"
				break;
			}else if(exp_conveniencestorebedok.features[i].properties["icon_exp"] == "cheersking.png"){
				exp_conveniencestorebedok.features[i].properties["icon_exp"] = "cheers.png"
				break;
			}
		}
		map.removeLayer(exp_conveniencestorebedokJSON);
	}
	if(exp_eldercarebedokJSON !== undefined){
		for(var i = 0; i<exp_eldercarebedok.features.length; i++){
			if(exp_eldercarebedok.features[i].properties["icon_exp"] == "elderking.svg"){
				exp_eldercarebedok.features[i].properties["icon_exp"] = "elder.svg";
				break;
			}
		}
		map.removeLayer(exp_eldercarebedokJSON);
	}
	if(exp_hawkerbedokJSON !== undefined){
		for(var i = 0; i<exp_hawkerbedok.features.length; i++){
			if(exp_hawkerbedok.features[i].properties["icon_exp"] == "foodking.svg"){
				exp_hawkerbedok.features[i].properties["icon_exp"] = "food.svg";
				break;
			}
		}
		map.removeLayer(exp_hawkerbedokJSON);
	}
	if(exp_hospitalsbedokJSON !== undefined){
		for(var i = 0; i<exp_hospitalsbedok.features.length; i++){
			if(exp_hospitalsbedok.features[i].properties["icon_exp"] == "hospitalking.svg"){
				exp_hospitalsbedok.features[i].properties["icon_exp"] = "hospital.svg";
				break;
			}
		}
		map.removeLayer(exp_hospitalsbedokJSON);
	}
	if(exp_JCbedokJSON !== undefined){
		for(var i = 0; i<exp_JCbedok.features.length; i++){
			if(exp_JCbedok.features[i].properties["icon_exp"] == "jcking.svg"){		
				exp_JCbedok.features[i].properties["icon_exp"] = "jc.svg";
				break;
			}
		}
		map.removeLayer(exp_JCbedokJSON);
	}
	if(exp_librariesbedokJSON !== undefined){
		for(var i = 0; i<exp_librariesbedok.features.length; i++){
			if(exp_librariesbedok.features[i].properties["icon_exp"] == "librariesking.svg"){
				exp_librariesbedok.features[i].properties["icon_exp"] = "libraries.svg";
				break;
			}
		}
		map.removeLayer(exp_librariesbedokJSON);
	}
	if(exp_clinicsbedokJSON !== undefined){
		for(var i = 0; i<exp_clinicsbedok.features.length; i++){
			if(exp_clinicsbedok.features[i].properties["icon_exp"] == "clinicking.svg"){
				exp_clinicsbedok.features[i].properties["icon_exp"] = "clinic.svg";
				break;
			}
		}
		map.removeLayer(exp_clinicsbedokJSON);
	}
	if(exp_mrtbedokJSON !== undefined){
		for(var i = 0; i<exp_mrtbedok.features.length; i++){
			if(exp_mrtbedok.features[i].properties["icon_exp"] == "mrtking.svg"){
				exp_mrtbedok.features[i].properties["icon_exp"] = "mrt.svg";
				break;
			}
		}
		map.removeLayer(exp_mrtbedokJSON);
	}
	if(exp_parksbedokJSON !== undefined){
		for(var i = 0; i<exp_parksbedok.features.length; i++){
			if(exp_parksbedok.features[i].properties["icon_exp"] == "parksking.svg"){
				exp_parksbedok.features[i].properties["icon_exp"] = "parks.svg";
				break;
			}
		}
		map.removeLayer(exp_parksbedokJSON);
	}
	if(exp_petrolstationsbedokJSON !== undefined){
		for(var i = 0; i<exp_petrolstationsbedok.features.length; i++){
			if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "caltexking.png"){
				exp_petrolstationsbedok.features[i].properties["icon_exp"] = "caltex.png";
				break;
			}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "essoking.png"){
				exp_petrolstationsbedok.features[i].properties["icon_exp"] = "esso.png";
				break;
			}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "shellking.png"){
				exp_petrolstationsbedok.features[i].properties["icon_exp"] = "shell.png";
				break;
			}else if(exp_petrolstationsbedok.features[i].properties["icon_exp"] == "spcking.png"){
				exp_petrolstationsbedok.features[i].properties["icon_exp"] = "spc.png";
				break;
			}
		}
		map.removeLayer(exp_petrolstationsbedokJSON);
	}
	if(exp_placeofworshipbedokJSON !== undefined){
		for(var i = 0; i<exp_placeofworshipbedok.features.length; i++){
			if(exp_placeofworshipbedok.features[i].properties["icon_exp"] == "mosqueking.svg"){
				exp_placeofworshipbedok.features[i].properties["icon_exp"] = "mosque.svg";
				break;
			}else if(exp_placeofworshipbedok.features[i].properties["icon_exp"] = "churchking.svg"){
				exp_placeofworshipbedok.features[i].properties["icon_exp"] = "church.svg";
				break;
			}else if(exp_placeofworshipbedok.features[i].properties["icon_exp"] = "templeking.svg"){
				exp_placeofworshipbedok.features[i].properties["icon_exp"] = "temple.svg";
				break;
			}
		}
		map.removeLayer(exp_placeofworshipbedokJSON);
	}
	if(exp_policebedokJSON !== undefined){
		for(var i = 0; i<exp_policebedok.features.length; i++){
			if(exp_policebedok.features[i].properties["icon_exp"] == "policeking.svg"){
				exp_policebedok.features[i].properties["icon_exp"] = "police.svg";
				break;
			}
		}
		map.removeLayer(exp_policebedokJSON);
	}
	if(exp_polyclinicabedokJSON !== undefined){
		for(var i = 0; i<exp_polyclinicabedok.features.length; i++){
			if(exp_polyclinicabedok.features[i].properties["icon_exp"] == "polyclinicking.svg"){
				exp_polyclinicabedok.features[i].properties["icon_exp"] = "polyclinic.svg";
				break;
			}
		}
		map.removeLayer(exp_polyclinicabedokJSON);
	}
	if(exp_prischoolbedokJSON !== undefined){
		for(var i = 0; i<exp_prischoolbedok.features.length; i++){
			if(exp_prischoolbedok.features[i].properties["icon_exp"] == "primaryking.svg"){
				exp_prischoolbedok.features[i].properties["icon_exp"] = "primary.svg";
				break;
			}
		}
		map.removeLayer(exp_prischoolbedokJSON);
	}
	if(exp_secschoolbedokJSON !== undefined){
		for(var i = 0; i<exp_secschoolbedok.features.length; i++){
			if(exp_secschoolbedok.features[i].properties["icon_exp"] == "secondaryking.svg"){
				exp_secschoolbedok.features[i].properties["icon_exp"] = "secondary.svg";
				break;
			}
		}
		map.removeLayer(exp_secschoolbedokJSON);
	}
	if(exp_shoppingbedokJSON !== undefined){
		for(var i = 0; i<exp_shoppingbedok.features.length; i++){
			if(exp_shoppingbedok.features[i].properties["icon_exp"] == "shopking.svg"){
				exp_shoppingbedok.features[i].properties["icon_exp"] = "shop.svg";
				break;
			}
		}
		map.removeLayer(exp_shoppingbedokJSON);
	}
	if(exp_sportsbedokJSON !== undefined){
		for(var i = 0; i<exp_sportsbedok.features.length; i++){
			if(exp_sportsbedok.features[i].properties["icon_exp"] == "sportsking.svg"){
				exp_sportsbedok.features[i].properties["icon_exp"] = "sports.svg";
				break;
			}
		}
		map.removeLayer(exp_sportsbedokJSON);
	}
	if(exp_supermarketbedokJSON !== undefined){
		for(var i = 0; i<exp_supermarketbedok.features.length; i++){
			if(exp_supermarketbedok.features[i].properties["icon_exp"] == "ntucking.png"){
				exp_supermarketbedok.features[i].properties["icon_exp"] = "ntuc.png";
				break;
			}else if(exp_supermarketbedok.features[i].properties["icon_exp"] == "shengsiongking.png"){
				exp_supermarketbedok.features[i].properties["icon_exp"] = "shengsiong.png";
				break;
			}else if(exp_supermarketbedok.features[i].properties["icon_exp"] == "giantking.png"){
				exp_supermarketbedok.features[i].properties["icon_exp"] = "giant.png";
				break;
			}
		}
		map.removeLayer(exp_supermarketbedokJSON);
	}
}	

function showLegend(){
	document.getElementById("plusId").style.display = "none";
	document.getElementById("minusId").style.display = "block";
	if(document.getElementById("nearestOn").value == "on"){
		document.getElementById("nearestLegend").style.display = "block";
	}else{
		document.getElementById("serviceLegend").style.display = "block";
	}

}

function hideLegend(){
	document.getElementById("plusId").style.display = "block";
	document.getElementById("minusId").style.display = "none";
	if(document.getElementById("nearestOn").value == "on"){
		document.getElementById("nearestLegend").style.display = "none";
	}else{
		document.getElementById("serviceLegend").style.display = "none";
	}
}