function load100(){
	$('#loading').show();
	removeAllResidential();
	if (bank.checked == 1){
		//Remove all prev buffer
		if(exp_BankBuffer200JSON !== undefined){
			map.removeLayer(exp_BankBuffer200JSON);
		}
		if(exp_BankBuffer300JSON !== undefined){
			map.removeLayer(exp_BankBuffer300JSON);
		}
		if(exp_BankBuffer400JSON !== undefined){
			map.removeLayer(exp_BankBuffer400JSON);
		}
		bankBuffer = "BankDissolve100_Bank";
		loadBankBuffer100();
	}else if(exp_BankBuffer100JSON === undefined){
	//do nothing
	}
	if (busStop.checked == 1){
		//Remove all prev buffer
		if(exp_BusBuffer200JSON !== undefined){
			map.removeLayer(exp_BusBuffer200JSON);
		}
		if(exp_BusBuffer300JSON !== undefined){
			map.removeLayer(exp_BusBuffer300JSON);
		}
		if(exp_BusBuffer400JSON !== undefined){
			map.removeLayer(exp_BusBuffer400JSON);
		}
		busBuffer = "BusDissolve100_Bus";
		loadBusBuffer100();
	}else if(exp_BusBuffer100JSON === undefined){
	//do nothing
	}
	if (childcare.checked == 1){
		//Remove all prev buffer
		if(exp_ChildBuffer200JSON !== undefined){
			map.removeLayer(exp_ChildBuffer200JSON);
		}
		if(exp_ChildBuffer300JSON !== undefined){
			map.removeLayer(exp_ChildBuffer300JSON);
		}
		if(exp_ChildBuffer400JSON !== undefined){
			map.removeLayer(exp_ChildBuffer400JSON);
		}
		childBuffer = "ChildDissolve100_Child";
		loadChildBuffer100();
	}else if(exp_ChildBuffer100JSON === undefined){
	//do nothing
	}
	if (communityCentre.checked == 1){
		//Remove all prev buffer
		if(exp_CCBuffer200JSON !== undefined){
			map.removeLayer(exp_CCBuffer200JSON);
		}
		if(exp_CCBuffer300JSON !== undefined){
			map.removeLayer(exp_CCBuffer300JSON);
		}
		if(exp_CCBuffer400JSON !== undefined){
			map.removeLayer(exp_CCBuffer400JSON);
		}
		ccBuffer = "CCDissolve100_CC";
		loadCCBuffer100();
	}else if(exp_CCBuffer100JSON === undefined){
	//do nothing
	}
	if (convenienceStore.checked == 1){
		//Remove all prev buffer
		if(exp_ConStoreBuffer200JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer200JSON);
		}
		if(exp_ConStoreBuffer300JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer300JSON);
		}
		if(exp_ConStoreBuffer400JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer400JSON);
		}
		conStoreBuffer = "ConStoreDissolve100_ConStore";
		loadConStoreBuffer100();
	}else if(exp_ConStoreBuffer100JSON === undefined){
	//do nothing
	}
	if (eldercare.checked == 1){
		//Remove all prev buffer
		if(exp_ElderlyBuffer200JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer200JSON);
		}
		if(exp_ElderlyBuffer300JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer300JSON);
		}
		if(exp_ElderlyBuffer400JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer400JSON);
		}
		elderBuffer = "ElderlyDissolve100_Elder";
		loadElderBuffer100();
	}else if(exp_ElderlyBuffer100JSON === undefined){
	//do nothing
	}
	if (hawker.checked == 1){
		//Remove all prev buffer
		if(exp_HawkerBuffer200JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer200JSON);
		}
		if(exp_HawkerBuffer300JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer300JSON);
		}
		if(exp_HawkerBuffer400JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer400JSON);
		}
		hawkerBuffer = "HawkerDissolve100_HAwker";
		loadHawkerBuffer100();
	}else if(exp_HawkerBuffer100JSON === undefined){
	//do nothing
	}
	if (hospital.checked == 1){
		//Remove all prev buffer
		if(exp_HospitalBuffer200JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer200JSON);
		}
		if(exp_HospitalBuffer300JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer300JSON);
		}
		if(exp_HospitalBuffer400JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer400JSON);
		}
		hospitalBuffer = "HospitalDissolve100_Hospital";
		loadHospitalBuffer100();
	}else if(exp_HospitalBuffer100JSON === undefined){
	//do nothing
	}
	if (jcSch.checked == 1){
		//Remove all prev buffer
		if(exp_JCBuffer200JSON !== undefined){
			map.removeLayer(exp_JCBuffer200JSON);
		}
		if(exp_JCBuffer300JSON !== undefined){
			map.removeLayer(exp_JCBuffer300JSON);
		}
		if(exp_JCBuffer400JSON !== undefined){
			map.removeLayer(exp_JCBuffer400JSON);
		}
		jcBuffer = "JCDissolve100_JC";
		loadJCBuffer100();
	}else if(exp_JCBuffer100JSON === undefined){
	//do nothing
	}
	if (library.checked == 1){
		//Remove all prev buffer
		if(exp_LibBuffer200JSON !== undefined){
			map.removeLayer(exp_LibBuffer200JSON);
		}
		if(exp_LibBuffer300JSON !== undefined){
			map.removeLayer(exp_LibBuffer300JSON);
		}
		if(exp_LibBuffer400JSON !== undefined){
			map.removeLayer(exp_LibBuffer400JSON);
		}
		libBuffer = "LibDissolve100_Lib";
		loadLibBuffer100();
	}else if(exp_LibBuffer100JSON === undefined){
	//do nothing
	}
	if (mohClinics.checked == 1){
		//Remove all prev buffer
		if(exp_MohBuffer200JSON !== undefined){
			map.removeLayer(exp_MohBuffer200JSON);
		}
		if(exp_MohBuffer300JSON !== undefined){
			map.removeLayer(exp_MohBuffer300JSON);
		}
		if(exp_MohBuffer400JSON !== undefined){
			map.removeLayer(exp_MohBuffer400JSON);
		}
		mohBuffer = "MohDissolve100_Moh";
		loadMohBuffer100();
	}else if(exp_MohBuffer100JSON === undefined){
	//do nothing
	}
	if (mrt.checked == 1){
		//Remove all prev buffer
		if(exp_MrtBuffer200JSON !== undefined){
			map.removeLayer(exp_MrtBuffer200JSON);
		}
		if(exp_MrtBuffer300JSON !== undefined){
			map.removeLayer(exp_MrtBuffer300JSON);
		}
		if(exp_MrtBuffer400JSON !== undefined){
			map.removeLayer(exp_MrtBuffer400JSON);
		}
		mrtBuffer = "MrtDissolve100_Mrt";
		loadMrtBuffer100();
	}else if(exp_MrtBuffer100JSON === undefined){
	//do nothing
	}
	if (nationalParks.checked == 1){
		//Remove all prev buffer
		if(exp_ParkBuffer200JSON !== undefined){
			map.removeLayer(exp_ParkBuffer200JSON);
		}
		if(exp_ParkBuffer300JSON !== undefined){
			map.removeLayer(exp_ParkBuffer300JSON);
		}
		if(exp_ParkBuffer400JSON !== undefined){
			map.removeLayer(exp_ParkBuffer400JSON);
		}
		parkBuffer = "ParkDissolve100_Park";
		loadParkBuffer100();
	}else if(exp_ParkBuffer100JSON === undefined){
	//do nothing
	}
	if (petrolKiosks.checked == 1){
		//Remove all prev buffer
		if(exp_PetrolBuffer200JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer200JSON);
		}
		if(exp_PetrolBuffer300JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer300JSON);
		}
		if(exp_PetrolBuffer400JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer400JSON);
		}
		petrolBuffer = "PetrolDissolve100_Petrol";
		loadPetrolBuffer100();
	}else if(exp_PetrolBuffer100JSON === undefined){
	//do nothing
	}
	if (worship.checked == 1){
		//Remove all prev buffer
		if(exp_WorshipBuffer200JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer200JSON);
		}
		if(exp_WorshipBuffer300JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer300JSON);
		}
		if(exp_WorshipBuffer400JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer400JSON);
		}
		worshipBuffer = "WorshipDissolve100_Worship";
		loadWorshipBuffer100();
	}else if(exp_WorshipBuffer100JSON === undefined){
	//do nothing
	}
	if (police.checked == 1){
		//Remove all prev buffer
		if(exp_PoliceBuffer200JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer200JSON);
		}
		if(exp_PoliceBuffer300JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer300JSON);
		}
		if(exp_PoliceBuffer400JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer400JSON);
		}
		policeBuffer = "PoliceDissolve100_Police";
		loadPoliceBuffer100();
	}else if(exp_PoliceBuffer100JSON === undefined){
	//do nothing
	}
	if (polyClinics.checked == 1){
		//Remove all prev buffer
		if(exp_PolyclinicBuffer200JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer200JSON);
		}
		if(exp_PolyclinicBuffer300JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer300JSON);
		}
		if(exp_PolyclinicBuffer400JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer400JSON);
		}
		polyclinicBuffer = "PolyclinicDissolve100_Polyclinic";
		loadPolyclinicBuffer100();
	}else if(exp_PolyclinicBuffer100JSON === undefined){
	//do nothing
	}
	if (priSch.checked == 1){
		//Remove all prev buffer
		if(exp_PriBuffer200JSON !== undefined){
			map.removeLayer(exp_PriBuffer200JSON);
		}
		if(exp_PriBuffer300JSON !== undefined){
			map.removeLayer(exp_PriBuffer300JSON);
		}
		if(exp_PriBuffer400JSON !== undefined){
			map.removeLayer(exp_PriBuffer400JSON);
		}
		priBuffer = "PriDissolve100_Pri";
		loadPriBuffer100();
	}else if(exp_PriBuffer100JSON === undefined){
	//do nothing
	}
	if (secSch.checked == 1){
		//Remove all prev buffer
		if(exp_SecBuffer200JSON !== undefined){
			map.removeLayer(exp_SecBuffer200JSON);
		}
		if(exp_SecBuffer300JSON !== undefined){
			map.removeLayer(exp_SecBuffer300JSON);
		}
		if(exp_SecBuffer400JSON !== undefined){
			map.removeLayer(exp_SecBuffer400JSON);
		}
		secBuffer = "SecDissolve100_Sec";
		loadSecBuffer100();
	}else if(exp_SecBuffer100JSON === undefined){
	//do nothing
	}
	if (shopping.checked == 1){
		//Remove all prev buffer
		if(exp_ShoppingBuffer200JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer200JSON);
		}
		if(exp_ShoppingBuffer300JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer300JSON);
		}
		if(exp_ShoppingBuffer400JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer400JSON);
		}
		shoppingBuffer = "ShoppingDissolve100_Shopping";
		loadShoppingBuffer100();
	}else if(exp_ShoppingBuffer100JSON === undefined){
	//do nothing
	}
	if (sportsFacility.checked == 1){
		//Remove all prev buffer
		if(exp_SportsBuffer200JSON !== undefined){
			map.removeLayer(exp_SportsBuffer200JSON);
		}
		if(exp_SportsBuffer300JSON !== undefined){
			map.removeLayer(exp_SportsBuffer300JSON);
		}
		if(exp_SportsBuffer400JSON !== undefined){
			map.removeLayer(exp_SportsBuffer400JSON);
		}
		sportsBuffer = "SportsDissolve100_Sport";
		loadSportsBuffer100();
	}else if(exp_SportsBuffer100JSON === undefined){
	//do nothing
	}
	if (supermarket.checked == 1){
		//Remove all prev buffer
		if(exp_SupermktBuffer200JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer200JSON);
		}
		if(exp_SupermktBuffer300JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer400JSON);
		}
		if(exp_SupermktBuffer300JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer400JSON);
		}
		supermktBuffer = "SupermktDissolve100_Supermkt";
		loadSupermarketBuffer100();
	}else if(exp_SupermktBuffer100JSON === undefined){
	//do nothing
	}
	
	intersectingResidential();
}

function load200(){
	$('#loading').show();
	removeAllResidential();
	if (bank.checked == 1){
		//Remove all prev buffer
		if(exp_BankBuffer100JSON !== undefined){
			map.removeLayer(exp_BankBuffer100JSON);
		}
		if(exp_BankBuffer300JSON !== undefined){
			map.removeLayer(exp_BankBuffer300JSON);
		}
		if(exp_BankBuffer400JSON !== undefined){
			map.removeLayer(exp_BankBuffer400JSON);
		}
		bankBuffer = "BankDissolve200_Bank";
		loadBankBuffer200();
	}else if(exp_BankBuffer200JSON === undefined){
	//do nothing
	}
	if (busStop.checked == 1){
		//Remove all prev buffer
		if(exp_BusBuffer100JSON !== undefined){
			map.removeLayer(exp_BusBuffer100JSON);
		}
		if(exp_BusBuffer300JSON !== undefined){
			map.removeLayer(exp_BusBuffer300JSON);
		}
		if(exp_BusBuffer400JSON !== undefined){
			map.removeLayer(exp_BusBuffer400JSON);
		}
		busBuffer = "BusDissolve200_Bus";
		loadBusBuffer200();
	}else if(exp_BusBuffer200JSON === undefined){
	//do nothing
	}
	if (childcare.checked == 1){
		//Remove all prev buffer
		if(exp_ChildBuffer100JSON !== undefined){
			map.removeLayer(exp_ChildBuffer100JSON);
		}
		if(exp_ChildBuffer300JSON !== undefined){
			map.removeLayer(exp_ChildBuffer300JSON);
		}
		if(exp_ChildBuffer400JSON !== undefined){
			map.removeLayer(exp_ChildBuffer400JSON);
		}
		childBuffer = "ChildDissolve200_Child";
		loadChildBuffer200();
	}else if(exp_ChildBuffer200JSON === undefined){
	//do nothing
	}
	if (communityCentre.checked == 1){
		//Remove all prev buffer
		if(exp_CCBuffer100JSON !== undefined){
			map.removeLayer(exp_CCBuffer100JSON);
		}
		if(exp_CCBuffer300JSON !== undefined){
			map.removeLayer(exp_CCBuffer300JSON);
		}
		if(exp_CCBuffer400JSON !== undefined){
			map.removeLayer(exp_CCBuffer400JSON);
		}
		ccBuffer = "CCDissolve200_CC";
		loadCCBuffer200();
	}else if(exp_CCBuffer200JSON === undefined){
	//do nothing
	}
	if (convenienceStore.checked == 1){
		//Remove all prev buffer
		if(exp_ConStoreBuffer100JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer100JSON);
		}
		if(exp_ConStoreBuffer300JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer300JSON);
		}
		if(exp_ConStoreBuffer400JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer400JSON);
		}
		conStoreBuffer = "ConStoreDissolve200_ConStore";
		loadConStoreBuffer200();
	}else if(exp_ConStoreBuffer200JSON === undefined){
	//do nothing
	}
	if (eldercare.checked == 1){
		//Remove all prev buffer
		if(exp_ElderlyBuffer100JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer100JSON);
		}
		if(exp_ElderlyBuffer300JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer300JSON);
		}
		if(exp_ElderlyBuffer400JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer400JSON);
		}
		elderBuffer = "ElderlyDissolve200_Elder";
		loadElderBuffer200();
	}else if(exp_ElderlyBuffer200JSON === undefined){
	//do nothing
	}
	if (hawker.checked == 1){
		//Remove all prev buffer
		if(exp_HawkerBuffer100JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer100JSON);
		}
		if(exp_HawkerBuffer300JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer300JSON);
		}
		if(exp_HawkerBuffer400JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer400JSON);
		}
		hawkerBuffer = "HawkerDissolve200_Hawker";
		loadHawkerBuffer200();
	}else if(exp_HawkerBuffer200JSON === undefined){
	//do nothing
	}
	if (hospital.checked == 1){
		//Remove all prev buffer
		if(exp_HospitalBuffer100JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer100JSON);
		}
		if(exp_HospitalBuffer300JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer300JSON);
		}
		if(exp_HospitalBuffer400JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer400JSON);
		}
		hospitalBuffer = "HospitalDissolve200_Hospital";
		loadHospitalBuffer200();
	}else if(exp_HospitalBuffer200JSON === undefined){
	//do nothing
	}
	if (jcSch.checked == 1){
		//Remove all prev buffer
		if(exp_JCBuffer100JSON !== undefined){
			map.removeLayer(exp_JCBuffer100JSON);
		}
		if(exp_JCBuffer300JSON !== undefined){
			map.removeLayer(exp_JCBuffer300JSON);
		}
		if(exp_JCBuffer400JSON !== undefined){
			map.removeLayer(exp_JCBuffer400JSON);
		}
		jcBuffer = "JCDissolve200_JC";
		loadJCBuffer200();
	}else if(exp_JCBuffer200JSON === undefined){
	//do nothing
	}
	if (library.checked == 1){
		//Remove all prev buffer
		if(exp_LibBuffer100JSON !== undefined){
			map.removeLayer(exp_LibBuffer100JSON);
		}
		if(exp_LibBuffer300JSON !== undefined){
			map.removeLayer(exp_LibBuffer300JSON);
		}
		if(exp_LibBuffer400JSON !== undefined){
			map.removeLayer(exp_LibBuffer400JSON);
		}
		libBuffer = "LibDissolve200_Lib";
		loadLibBuffer200();
	}else if(exp_LibBuffer200JSON === undefined){
	//do nothing
	}
	if (mohClinics.checked == 1){
		//Remove all prev buffer
		if(exp_MohBuffer100JSON !== undefined){
			map.removeLayer(exp_MohBuffer100JSON);
		}
		if(exp_MohBuffer300JSON !== undefined){
			map.removeLayer(exp_MohBuffer300JSON);
		}
		if(exp_MohBuffer400JSON !== undefined){
			map.removeLayer(exp_MohBuffer400JSON);
		}
		mohBuffer = "MohDissolve200_Moh";
		loadMohBuffer200();
	}else if(exp_MohBuffer200JSON === undefined){
	//do nothing
	}
	if (mrt.checked == 1){
		//Remove all prev buffer
		if(exp_MrtBuffer100JSON !== undefined){
			map.removeLayer(exp_MrtBuffer100JSON);
		}
		if(exp_MrtBuffer300JSON !== undefined){
			map.removeLayer(exp_MrtBuffer300JSON);
		}
		if(exp_MrtBuffer400JSON !== undefined){
			map.removeLayer(exp_MrtBuffer400JSON);
		}
		mrtBuffer = "MrtDissolve200_Mrt";
		loadMrtBuffer200();
	}else if(exp_MrtBuffer200JSON === undefined){
	//do nothing
	}
	if (nationalParks.checked == 1){
		//Remove all prev buffer
		if(exp_ParkBuffer100JSON !== undefined){
			map.removeLayer(exp_ParkBuffer100JSON);
		}
		if(exp_ParkBuffer300JSON !== undefined){
			map.removeLayer(exp_ParkBuffer300JSON);
		}
		if(exp_ParkBuffer400JSON !== undefined){
			map.removeLayer(exp_ParkBuffer400JSON);
		}
		parkBuffer = "ParkDissolve200_Park";
		loadParkBuffer200();
	}else if(exp_ParkBuffer200JSON === undefined){
	//do nothing
	}
	if (petrolKiosks.checked == 1){
		//Remove all prev buffer
		if(exp_PetrolBuffer100JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer100JSON);
		}
		if(exp_PetrolBuffer300JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer300JSON);
		}
		if(exp_PetrolBuffer400JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer400JSON);
		}
		petrolBuffer = "PetrolDissolve200_Petrol";
		loadPetrolBuffer200();
	}else if(exp_PetrolBuffer200JSON === undefined){
	//do nothing
	}
	if (worship.checked == 1){
		//Remove all prev buffer
		if(exp_WorshipBuffer100JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer100JSON);
		}
		if(exp_WorshipBuffer300JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer300JSON);
		}
		if(exp_WorshipBuffer400JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer400JSON);
		}
		worshipBuffer = "WorshipDissolve200_Worship";
		loadWorshipBuffer200();
	}else if(exp_WorshipBuffer200JSON === undefined){
	//do nothing
	}
	if (police.checked == 1){
		//Remove all prev buffer
		if(exp_PoliceBuffer100JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer100JSON);
		}
		if(exp_PoliceBuffer300JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer300JSON);
		}
		if(exp_PoliceBuffer400JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer400JSON);
		}
		policeBuffer = "PoliceDissolve200_Police";
		loadPoliceBuffer200();
	}else if(exp_PoliceBuffer200JSON === undefined){
	//do nothing
	}
	if (polyClinics.checked == 1){
		//Remove all prev buffer
		if(exp_PolyclinicBuffer100JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer100JSON);
		}
		if(exp_PolyclinicBuffer300JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer300JSON);
		}
		if(exp_PolyclinicBuffer400JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer400JSON);
		}
		polyclinicBuffer = "PolyclinicDissolve200_Polyclinic";
		loadPolyclinicBuffer200();
	}else if(exp_PolyclinicBuffer200JSON === undefined){
	//do nothing
	}
	if (priSch.checked == 1){
		//Remove all prev buffer
		if(exp_PriBuffer100JSON !== undefined){
			map.removeLayer(exp_PriBuffer100JSON);
		}
		if(exp_PriBuffer300JSON !== undefined){
			map.removeLayer(exp_PriBuffer300JSON);
		}
		if(exp_PriBuffer400JSON !== undefined){
			map.removeLayer(exp_PriBuffer400JSON);
		}
		priBuffer = "PriDissolve200_Pri";
		loadPriBuffer200();
	}else if(exp_PriBuffer200JSON === undefined){
	//do nothing
	}
	if (secSch.checked == 1){
		//Remove all prev buffer
		if(exp_SecBuffer100JSON !== undefined){
			map.removeLayer(exp_SecBuffer100JSON);
		}
		if(exp_SecBuffer300JSON !== undefined){
			map.removeLayer(exp_SecBuffer300JSON);
		}
		if(exp_SecBuffer400JSON !== undefined){
			map.removeLayer(exp_SecBuffer400JSON);
		}
		secBuffer = "SecDissolve200_Sec";
		loadSecBuffer200();
	}else if(exp_SecBuffer200JSON === undefined){
	//do nothing
	}
	if (shopping.checked == 1){
		//Remove all prev buffer
		if(exp_ShoppingBuffer100JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer100JSON);
		}
		if(exp_ShoppingBuffer300JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer300JSON);
		}
		if(exp_ShoppingBuffer400JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer400JSON);
		}
		shoppingBuffer = "ShoppingDissolve200_Shopping";
		loadShoppingBuffer200();
	}else if(exp_ShoppingBuffer200JSON === undefined){
	//do nothing
	}
	if (sportsFacility.checked == 1){
		//Remove all prev buffer
		if(exp_SportsBuffer100JSON !== undefined){
			map.removeLayer(exp_SportsBuffer100JSON);
		}
		if(exp_SportsBuffer300JSON !== undefined){
			map.removeLayer(exp_SportsBuffer300JSON);
		}
		if(exp_SportsBuffer400JSON !== undefined){
			map.removeLayer(exp_SportsBuffer400JSON);
		}
		sportsBuffer = "SportsDissolve200_Sport";
		loadSportsBuffer200();
	}else if(exp_SportsBuffer200JSON === undefined){
	//do nothing
	}
	if (supermarket.checked == 1){
		//Remove all prev buffer
		if(exp_SupermktBuffer100JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer100JSON);
		}
		if(exp_SupermktBuffer300JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer400JSON);
		}
		if(exp_SupermktBuffer300JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer400JSON);
		}
		supermktBuffer = "SupermktDissolve200_Supermkt";
		loadSupermarketBuffer200();
	}else if(exp_SupermktBuffer200JSON === undefined){
	//do nothing
	}
	
	intersectingResidential();
}

function load300(){
	$('#loading').show();
	removeAllResidential();
	if (bank.checked == 1){
		//Remove all prev buffer
		if(exp_BankBuffer200JSON !== undefined){
			map.removeLayer(exp_BankBuffer200JSON);
		}
		if(exp_BankBuffer100JSON !== undefined){
			map.removeLayer(exp_BankBuffer100JSON);
		}
		if(exp_BankBuffer400JSON !== undefined){
			map.removeLayer(exp_BankBuffer400JSON);
		}
		bankBuffer = "BankDissolve300_Bank";
		loadBankBuffer300();
	}else if(exp_BankBuffer300JSON === undefined){
	//do nothing
	}
	if (busStop.checked == 1){
		//Remove all prev buffer
		if(exp_BusBuffer200JSON !== undefined){
			map.removeLayer(exp_BusBuffer200JSON);
		}
		if(exp_BusBuffer100JSON !== undefined){
			map.removeLayer(exp_BusBuffer100JSON);
		}
		if(exp_BusBuffer400JSON !== undefined){
			map.removeLayer(exp_BusBuffer400JSON);
		}
		busBuffer = "BusDissolve300_Bus";
		loadBusBuffer300();
	}else if(exp_BusBuffer300JSON === undefined){
	//do nothing
	}
	if (childcare.checked == 1){
		//Remove all prev buffer
		if(exp_ChildBuffer200JSON !== undefined){
			map.removeLayer(exp_ChildBuffer200JSON);
		}
		if(exp_ChildBuffer100JSON !== undefined){
			map.removeLayer(exp_ChildBuffer100JSON);
		}
		if(exp_ChildBuffer400JSON !== undefined){
			map.removeLayer(exp_ChildBuffer400JSON);
		}
		childBuffer = "ChildDissolve300_Child";
		loadChildBuffer300();
	}else if(exp_ChildBuffer300JSON === undefined){
	//do nothing
	}
	if (communityCentre.checked == 1){
		//Remove all prev buffer
		if(exp_CCBuffer200JSON !== undefined){
			map.removeLayer(exp_CCBuffer200JSON);
		}
		if(exp_CCBuffer100JSON !== undefined){
			map.removeLayer(exp_CCBuffer100JSON);
		}
		if(exp_CCBuffer400JSON !== undefined){
			map.removeLayer(exp_CCBuffer400JSON);
		}
		ccBuffer = "CCDissolve300_CC";
		loadCCBuffer300();
	}else if(exp_CCBuffer300JSON === undefined){
	//do nothing
	}
	if (convenienceStore.checked == 1){
		//Remove all prev buffer
		if(exp_ConStoreBuffer200JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer200JSON);
		}
		if(exp_ConStoreBuffer100JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer100JSON);
		}
		if(exp_ConStoreBuffer400JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer400JSON);
		}
		conStoreBuffer = "ConStoreDissolve300_ConStore";
		loadConStoreBuffer300();
	}else if(exp_ConStoreBuffer300JSON === undefined){
	//do nothing
	}
	if (eldercare.checked == 1){
		//Remove all prev buffer
		if(exp_ElderlyBuffer200JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer200JSON);
		}
		if(exp_ElderlyBuffer100JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer100JSON);
		}
		if(exp_ElderlyBuffer400JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer400JSON);
		}
		elderBuffer = "ElderlyDissolve300_Elder";
		loadElderBuffer300();
	}else if(exp_ElderlyBuffer300JSON === undefined){
	//do nothing
	}
	if (hawker.checked == 1){
		//Remove all prev buffer
		if(exp_HawkerBuffer200JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer200JSON);
		}
		if(exp_HawkerBuffer100JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer100JSON);
		}
		if(exp_HawkerBuffer400JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer400JSON);
		}
		hawkerBuffer = "HawkerDissolve300_Hawker";
		loadHawkerBuffer300();
	}else if(exp_HawkerBuffer300JSON === undefined){
	//do nothing
	}
	if (hospital.checked == 1){
		//Remove all prev buffer
		if(exp_HospitalBuffer200JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer200JSON);
		}
		if(exp_HospitalBuffer100JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer100JSON);
		}
		if(exp_HospitalBuffer400JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer400JSON);
		}
		hospitalBuffer = "HospitalDissolve300_Hospital";
		loadHospitalBuffer300();
	}else if(exp_HospitalBuffer300JSON === undefined){
	//do nothing
	}
	if (jcSch.checked == 1){
		//Remove all prev buffer
		if(exp_JCBuffer200JSON !== undefined){
			map.removeLayer(exp_JCBuffer200JSON);
		}
		if(exp_JCBuffer100JSON !== undefined){
			map.removeLayer(exp_JCBuffer100JSON);
		}
		if(exp_JCBuffer400JSON !== undefined){
			map.removeLayer(exp_JCBuffer400JSON);
		}
		jcBuffer = "JCDissolve300_JC";
		loadJCBuffer300();
	}else if(exp_JCBuffer300JSON === undefined){
	//do nothing
	}
	if (library.checked == 1){
		//Remove all prev buffer
		if(exp_LibBuffer200JSON !== undefined){
			map.removeLayer(exp_LibBuffer200JSON);
		}
		if(exp_LibBuffer100JSON !== undefined){
			map.removeLayer(exp_LibBuffer100JSON);
		}
		if(exp_LibBuffer400JSON !== undefined){
			map.removeLayer(exp_LibBuffer400JSON);
		}
		libBuffer = "LibDissolve300_Lib";
		loadLibBuffer300();
	}else if(exp_LibBuffer300JSON === undefined){
	//do nothing
	}
	if (mohClinics.checked == 1){
		//Remove all prev buffer
		if(exp_MohBuffer200JSON !== undefined){
			map.removeLayer(exp_MohBuffer200JSON);
		}
		if(exp_MohBuffer100JSON !== undefined){
			map.removeLayer(exp_MohBuffer100JSON);
		}
		if(exp_MohBuffer400JSON !== undefined){
			map.removeLayer(exp_MohBuffer400JSON);
		}
		mohBuffer = "MohDissolve300_Moh";
		loadMohBuffer300();
	}else if(exp_MohBuffer300JSON === undefined){
	//do nothing
	}
	if (mrt.checked == 1){
		//Remove all prev buffer
		if(exp_MrtBuffer200JSON !== undefined){
			map.removeLayer(exp_MrtBuffer200JSON);
		}
		if(exp_MrtBuffer100JSON !== undefined){
			map.removeLayer(exp_MrtBuffer100JSON);
		}
		if(exp_MrtBuffer400JSON !== undefined){
			map.removeLayer(exp_MrtBuffer400JSON);
		}
		mrtBuffer = "MrtDissolve300_Mrt";
		loadMrtBuffer300();
	}else if(exp_MrtBuffer300JSON === undefined){
	//do nothing
	}
	if (nationalParks.checked == 1){
		//Remove all prev buffer
		if(exp_ParkBuffer200JSON !== undefined){
			map.removeLayer(exp_ParkBuffer200JSON);
		}
		if(exp_ParkBuffer100JSON !== undefined){
			map.removeLayer(exp_ParkBuffer100JSON);
		}
		if(exp_ParkBuffer400JSON !== undefined){
			map.removeLayer(exp_ParkBuffer400JSON);
		}
		parkBuffer = "ParkDissolve300_Park";
		loadParkBuffer300();
	}else if(exp_ParkBuffer300JSON === undefined){
	//do nothing
	}
	if (petrolKiosks.checked == 1){
		//Remove all prev buffer
		if(exp_PetrolBuffer200JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer200JSON);
		}
		if(exp_PetrolBuffer100JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer100JSON);
		}
		if(exp_PetrolBuffer400JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer400JSON);
		}
		petrolBuffer = "PetrolDissolve300_Petrol";
		loadPetrolBuffer300();
	}else if(exp_PetrolBuffer300JSON === undefined){
	//do nothing
	}
	if (worship.checked == 1){
		//Remove all prev buffer
		if(exp_WorshipBuffer200JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer200JSON);
		}
		if(exp_WorshipBuffer100JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer100JSON);
		}
		if(exp_WorshipBuffer400JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer400JSON);
		}
		worshipBuffer = "WorshipDissolve300_Worship";
		loadWorshipBuffer300();
	}else if(exp_WorshipBuffer300JSON === undefined){
	//do nothing
	}
	if (police.checked == 1){
		//Remove all prev buffer
		if(exp_PoliceBuffer200JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer200JSON);
		}
		if(exp_PoliceBuffer100JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer100JSON);
		}
		if(exp_PoliceBuffer400JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer400JSON);
		}
		policeBuffer = "PoliceDissolve300_Police";
		loadPoliceBuffer300();
	}else if(exp_PoliceBuffer300JSON === undefined){
	//do nothing
	}
	if (polyClinics.checked == 1){
		//Remove all prev buffer
		if(exp_PolyclinicBuffer200JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer200JSON);
		}
		if(exp_PolyclinicBuffer100JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer100JSON);
		}
		if(exp_PolyclinicBuffer400JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer400JSON);
		}
		polyclinicBuffer = "PolyclinicDissolve300_Polyclinic";
		loadPolyclinicBuffer300();
	}else if(exp_PolyclinicBuffer300JSON === undefined){
	//do nothing
	}
	if (priSch.checked == 1){
		//Remove all prev buffer
		if(exp_PriBuffer200JSON !== undefined){
			map.removeLayer(exp_PriBuffer200JSON);
		}
		if(exp_PriBuffer100JSON !== undefined){
			map.removeLayer(exp_PriBuffer100JSON);
		}
		if(exp_PriBuffer400JSON !== undefined){
			map.removeLayer(exp_PriBuffer400JSON);
		}
		priBuffer = "PriDissolve300_Pri";
		loadPriBuffer300();
	}else if(exp_PriBuffer300JSON === undefined){
	//do nothing
	}
	if (secSch.checked == 1){
		//Remove all prev buffer
		if(exp_SecBuffer200JSON !== undefined){
			map.removeLayer(exp_SecBuffer200JSON);
		}
		if(exp_SecBuffer100JSON !== undefined){
			map.removeLayer(exp_SecBuffer100JSON);
		}
		if(exp_SecBuffer400JSON !== undefined){
			map.removeLayer(exp_SecBuffer400JSON);
		}
		secBuffer = "SecDissolve300_Sec";
		loadSecBuffer300();
	}else if(exp_SecBuffer300JSON === undefined){
	//do nothing
	}
	if (shopping.checked == 1){
		//Remove all prev buffer
		if(exp_ShoppingBuffer200JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer200JSON);
		}
		if(exp_ShoppingBuffer100JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer100JSON);
		}
		if(exp_ShoppingBuffer400JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer400JSON);
		}
		shoppingBuffer = "ShoppingDissolve300_Shopping";
		loadShoppingBuffer300();
	}else if(exp_ShoppingBuffer300JSON === undefined){
	//do nothing
	}
	if (sportsFacility.checked == 1){
		//Remove all prev buffer
		if(exp_SportsBuffer200JSON !== undefined){
			map.removeLayer(exp_SportsBuffer200JSON);
		}
		if(exp_SportsBuffer100JSON !== undefined){
			map.removeLayer(exp_SportsBuffer100JSON);
		}
		if(exp_SportsBuffer400JSON !== undefined){
			map.removeLayer(exp_SportsBuffer400JSON);
		}
		sportsBuffer = "SportsDissolve300_Sport";
		loadSportsBuffer300();
	}else if(exp_SportsBuffer300JSON === undefined){
	//do nothing
	}
	if (supermarket.checked == 1){
		//Remove all prev buffer
		if(exp_SupermktBuffer200JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer200JSON);
		}
		if(exp_SupermktBuffer100JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer100JSON);
		}
		if(exp_SupermktBuffer400JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer400JSON);
		}
		supermktBuffer = "SupermktDissolve300_Supermkt";
		loadSupermarketBuffer300();
	}else if(exp_SupermktBuffer300JSON === undefined){
	//do nothing
	}
	
	intersectingResidential();
}

function load400(){
	$('#loading').show();
	removeAllResidential();
	if (bank.checked == 1){
		//Remove all prev buffer
		if(exp_BankBuffer200JSON !== undefined){
			map.removeLayer(exp_BankBuffer200JSON);
		}
		if(exp_BankBuffer100JSON !== undefined){
			map.removeLayer(exp_BankBuffer100JSON);
		}
		if(exp_BankBuffer300JSON !== undefined){
			map.removeLayer(exp_BankBuffer300JSON);
		}
		bankBuffer = "BankDissolve400_Bank";
		loadBankBuffer400();
	}else if(exp_BankBuffer400JSON === undefined){
	//do nothing
	}
	if (busStop.checked == 1){
		//Remove all prev buffer
		if(exp_BusBuffer200JSON !== undefined){
			map.removeLayer(exp_BusBuffer200JSON);
		}
		if(exp_BusBuffer100JSON !== undefined){
			map.removeLayer(exp_BusBuffer100JSON);
		}
		if(exp_BusBuffer300JSON !== undefined){
			map.removeLayer(exp_BusBuffer300JSON);
		}
		busBuffer = "BusDissolve400_Bus";
		loadBusBuffer400();
	}else if(exp_BusBuffer400JSON === undefined){
	//do nothing
	}
	if (childcare.checked == 1){
		//Remove all prev buffer
		if(exp_ChildBuffer200JSON !== undefined){
			map.removeLayer(exp_ChildBuffer200JSON);
		}
		if(exp_ChildBuffer100JSON !== undefined){
			map.removeLayer(exp_ChildBuffer100JSON);
		}
		if(exp_ChildBuffer300JSON !== undefined){
			map.removeLayer(exp_ChildBuffer300JSON);
		}
		childBuffer = "ChildDissolve400_Child";
		loadChildBuffer400();
	}else if(exp_ChildBuffer400JSON === undefined){
	//do nothing
	}
	if (communityCentre.checked == 1){
		//Remove all prev buffer
		if(exp_CCBuffer200JSON !== undefined){
			map.removeLayer(exp_CCBuffer200JSON);
		}
		if(exp_CCBuffer100JSON !== undefined){
			map.removeLayer(exp_CCBuffer100JSON);
		}
		if(exp_CCBuffer300JSON !== undefined){
			map.removeLayer(exp_CCBuffer300JSON);
		}
		ccBuffer = "CCDissolve400_CC";
		loadCCBuffer400();
	}else if(exp_CCBuffer400JSON === undefined){
	//do nothing
	}
	if (convenienceStore.checked == 1){
		//Remove all prev buffer
		if(exp_ConStoreBuffer200JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer200JSON);
		}
		if(exp_ConStoreBuffer100JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer100JSON);
		}
		if(exp_ConStoreBuffer300JSON !== undefined){
			map.removeLayer(exp_ConStoreBuffer300JSON);
		}
		conStoreBuffer = "ConStoreDissolve400_ConStore";
		loadConStoreBuffer400();
	}else if(exp_ConStoreBuffer400JSON === undefined){
	//do nothing
	}
	if (eldercare.checked == 1){
		//Remove all prev buffer
		if(exp_ElderlyBuffer200JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer200JSON);
		}
		if(exp_ElderlyBuffer100JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer100JSON);
		}
		if(exp_ElderlyBuffer300JSON !== undefined){
			map.removeLayer(exp_ElderlyBuffer300JSON);
		}
		elderBuffer = "ElderlyDissolve400_Elder";
		loadElderBuffer400();
	}else if(exp_ElderlyBuffer400JSON === undefined){
	//do nothing
	}
	if (hawker.checked == 1){
		//Remove all prev buffer
		if(exp_HawkerBuffer200JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer200JSON);
		}
		if(exp_HawkerBuffer100JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer100JSON);
		}
		if(exp_HawkerBuffer300JSON !== undefined){
			map.removeLayer(exp_HawkerBuffer300JSON);
		}
		hawkerBuffer = "HawkerDissolve400_Hawker";
		loadHawkerBuffer400();
	}else if(exp_HawkerBuffer400JSON === undefined){
	//do nothing
	}
	if (hospital.checked == 1){
		//Remove all prev buffer
		if(exp_HospitalBuffer200JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer200JSON);
		}
		if(exp_HospitalBuffer100JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer100JSON);
		}
		if(exp_HospitalBuffer300JSON !== undefined){
			map.removeLayer(exp_HospitalBuffer300JSON);
		}
		hospitalBuffer = "HospitalDissolve400_Hospital";
		loadHospitalBuffer400();
	}else if(exp_HospitalBuffer400JSON === undefined){
	//do nothing
	}
	if (jcSch.checked == 1){
		//Remove all prev buffer
		if(exp_JCBuffer200JSON !== undefined){
			map.removeLayer(exp_JCBuffer200JSON);
		}
		if(exp_JCBuffer100JSON !== undefined){
			map.removeLayer(exp_JCBuffer100JSON);
		}
		if(exp_JCBuffer300JSON !== undefined){
			map.removeLayer(exp_JCBuffer300JSON);
		}
		jcBuffer = "JCDissolve400_JC";
		loadJCBuffer400();
	}else if(exp_JCBuffer400JSON === undefined){
	//do nothing
	}
	if (library.checked == 1){
		//Remove all prev buffer
		if(exp_LibBuffer200JSON !== undefined){
			map.removeLayer(exp_LibBuffer200JSON);
		}
		if(exp_LibBuffer100JSON !== undefined){
			map.removeLayer(exp_LibBuffer100JSON);
		}
		if(exp_LibBuffer300JSON !== undefined){
			map.removeLayer(exp_LibBuffer300JSON);
		}
		libBuffer = "LibDissolve400_Lib";
		loadLibBuffer400();
	}else if(exp_LibBuffer400JSON === undefined){
	//do nothing
	}
	if (mohClinics.checked == 1){
		//Remove all prev buffer
		if(exp_MohBuffer200JSON !== undefined){
			map.removeLayer(exp_MohBuffer200JSON);
		}
		if(exp_MohBuffer100JSON !== undefined){
			map.removeLayer(exp_MohBuffer100JSON);
		}
		if(exp_MohBuffer300JSON !== undefined){
			map.removeLayer(exp_MohBuffer300JSON);
		}
		mohBuffer = "MohDissolve400_Moh";
		loadMohBuffer400();
	}else if(exp_MohBuffer400JSON === undefined){
	//do nothing
	}
	if (mrt.checked == 1){
		//Remove all prev buffer
		if(exp_MrtBuffer200JSON !== undefined){
			map.removeLayer(exp_MrtBuffer200JSON);
		}
		if(exp_MrtBuffer100JSON !== undefined){
			map.removeLayer(exp_MrtBuffer100JSON);
		}
		if(exp_MrtBuffer300JSON !== undefined){
			map.removeLayer(exp_MrtBuffer300JSON);
		}
		mrtBuffer = "MrtDissolve400_Mrt";
		loadMrtBuffer400();
	}else if(exp_MrtBuffer400JSON === undefined){
	//do nothing
	}
	if (nationalParks.checked == 1){
		//Remove all prev buffer
		if(exp_ParkBuffer200JSON !== undefined){
			map.removeLayer(exp_ParkBuffer200JSON);
		}
		if(exp_ParkBuffer100JSON !== undefined){
			map.removeLayer(exp_ParkBuffer100JSON);
		}
		if(exp_ParkBuffer300JSON !== undefined){
			map.removeLayer(exp_ParkBuffer300JSON);
		}
		parkBuffer = "ParkDissolve400_Park";
		loadParkBuffer400();
	}else if(exp_ParkBuffer400JSON === undefined){
	//do nothing
	}
	if (petrolKiosks.checked == 1){
		//Remove all prev buffer
		if(exp_PetrolBuffer200JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer200JSON);
		}
		if(exp_PetrolBuffer100JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer100JSON);
		}
		if(exp_PetrolBuffer300JSON !== undefined){
			map.removeLayer(exp_PetrolBuffer300JSON);
		}
		petrolBuffer = "PetrolDissolve400_Petrol";
		loadPetrolBuffer400();
	}else if(exp_PetrolBuffer400JSON === undefined){
	//do nothing
	}
	if (worship.checked == 1){
		//Remove all prev buffer
		if(exp_WorshipBuffer200JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer200JSON);
		}
		if(exp_WorshipBuffer100JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer100JSON);
		}
		if(exp_WorshipBuffer300JSON !== undefined){
			map.removeLayer(exp_WorshipBuffer300JSON);
		}
		worshipBuffer = "WorshipDissolve400_Worship";
		loadWorshipBuffer400();
	}else if(exp_WorshipBuffer400JSON === undefined){
	//do nothing
	}
	if (police.checked == 1){
		//Remove all prev buffer
		if(exp_PoliceBuffer200JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer200JSON);
		}
		if(exp_PoliceBuffer100JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer100JSON);
		}
		if(exp_PoliceBuffer300JSON !== undefined){
			map.removeLayer(exp_PoliceBuffer300JSON);
		}
		policeBuffer = "PoliceDissolve400_Police";
		loadPoliceBuffer400();
	}else if(exp_PoliceBuffer400JSON === undefined){
	//do nothing
	}
	if (polyClinics.checked == 1){
		//Remove all prev buffer
		if(exp_PolyclinicBuffer200JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer200JSON);
		}
		if(exp_PolyclinicBuffer100JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer100JSON);
		}
		if(exp_PolyclinicBuffer300JSON !== undefined){
			map.removeLayer(exp_PolyclinicBuffer300JSON);
		}
		polyclinicBuffer = "PolyclinicDissolve400_Polyclinic";
		loadPolyclinicBuffer400();
	}else if(exp_PolyclinicBuffer400JSON === undefined){
	//do nothing
	}
	if (priSch.checked == 1){
		//Remove all prev buffer
		if(exp_PriBuffer200JSON !== undefined){
			map.removeLayer(exp_PriBuffer200JSON);
		}
		if(exp_PriBuffer100JSON !== undefined){
			map.removeLayer(exp_PriBuffer100JSON);
		}
		if(exp_PriBuffer300JSON !== undefined){
			map.removeLayer(exp_PriBuffer300JSON);
		}
		priBuffer = "PriDissolve400_Pri";
		loadPriBuffer400();
	}else if(exp_PriBuffer400JSON === undefined){
	//do nothing
	}
	if (secSch.checked == 1){
		//Remove all prev buffer
		if(exp_SecBuffer200JSON !== undefined){
			map.removeLayer(exp_SecBuffer200JSON);
		}
		if(exp_SecBuffer100JSON !== undefined){
			map.removeLayer(exp_SecBuffer100JSON);
		}
		if(exp_SecBuffer300JSON !== undefined){
			map.removeLayer(exp_SecBuffer300JSON);
		}
		secBuffer = "SecDissolve400_Sec";
		loadSecBuffer400();
	}else if(exp_SecBuffer400JSON === undefined){
	//do nothing
	}
	if (shopping.checked == 1){
		//Remove all prev buffer
		if(exp_ShoppingBuffer200JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer200JSON);
		}
		if(exp_ShoppingBuffer100JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer100JSON);
		}
		if(exp_ShoppingBuffer300JSON !== undefined){
			map.removeLayer(exp_ShoppingBuffer300JSON);
		}
		shoppingBuffer = "ShoppingDissolve400_Shopping";
		loadShoppingBuffer400();
	}else if(exp_ShoppingBuffer400JSON === undefined){
	//do nothing
	}
	if (sportsFacility.checked == 1){
		//Remove all prev buffer
		if(exp_SportsBuffer200JSON !== undefined){
			map.removeLayer(exp_SportsBuffer200JSON);
		}
		if(exp_SportsBuffer100JSON !== undefined){
			map.removeLayer(exp_SportsBuffer100JSON);
		}
		if(exp_SportsBuffer300JSON !== undefined){
			map.removeLayer(exp_SportsBuffer300JSON);
		}
		sportsBuffer = "SportsDissolve400_Sport";
		loadSportsBuffer400();
	}else if(exp_SportsBuffer400JSON === undefined){
	//do nothing
	}
	if (supermarket.checked == 1){
		//Remove all prev buffer
		if(exp_SupermktBuffer200JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer200JSON);
		}
		if(exp_SupermktBuffer100JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer100JSON);
		}
		if(exp_SupermktBuffer300JSON !== undefined){
			map.removeLayer(exp_SupermktBuffer300JSON);
		}
		supermktBuffer = "SupermktDissolve400_Supermkt";
		loadSupermarketBuffer400();
	}else if(exp_SupermktBuffer400JSON === undefined){
	//do nothing
	}
	
	intersectingResidential();
}