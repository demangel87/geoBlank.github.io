function pop_residentialbedok(feature, layer) {
	var countPop = '<tr><th scope="row"><br></th><td></td></tr>';
	
	if( $('#ex13').data('slider').getValue() == "100"){
		countPop += '<tr><th scope="row">Services within 100m radius</th><td></td></tr>'
	}else if( $('#ex13').data('slider').getValue() == "200"){
		countPop += '<tr><th scope="row">Services within 200m radius</th><td></td></tr>'
	}
	else if( $('#ex13').data('slider').getValue() == "300"){
		countPop += '<tr><th scope="row">Services within 300m radius</th><td></td></tr>'
	}
	else if( $('#ex13').data('slider').getValue() == "400"){
		countPop += '<tr><th scope="row">Services within 400m radius</th><td></td></tr>'
	} 
	
	if (bank.checked == 1){	
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Banks</th><td>' + Autolinker.link(String(feature.properties['Residential100_BankCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Banks</th><td>' + Autolinker.link(String(feature.properties['Residential200_BankCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Banks</th><td>' + Autolinker.link(String(feature.properties['Residential300_BankCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Banks</th><td>' + Autolinker.link(String(feature.properties['Residential400_BankCnt400'])) + '</td></tr>'
		}
	}
	if (busStop.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Buses</th><td>' + Autolinker.link(String(feature.properties['Residential100_BusCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Buses</th><td>' + Autolinker.link(String(feature.properties['Residential200_BusCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Buses</th><td>' + Autolinker.link(String(feature.properties['Residential300_BusCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Buses</th><td>' + Autolinker.link(String(feature.properties['Residential400_BusCnt400'])) + '</td></tr>'
		}
	}
	if (childcare.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Childcare</th><td>' + Autolinker.link(String(feature.properties['Residential100_ChldCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Childcare</th><td>' + Autolinker.link(String(feature.properties['Residential200_ChldCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Childcare</th><td>' + Autolinker.link(String(feature.properties['Residential300_ChldCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Childcare</th><td>' + Autolinker.link(String(feature.properties['Residential400_ChldCnt400'])) + '</td></tr>'
		}
	}
	if (communityCentre.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Community Centres</th><td>' + Autolinker.link(String(feature.properties['Residential100_CCCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Community Centres</th><td>' + Autolinker.link(String(feature.properties['Residential200_CCCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Community Centres</th><td>' + Autolinker.link(String(feature.properties['Residential300_CCCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Community Centres</th><td>' + Autolinker.link(String(feature.properties['Residential400_CCCnt400'])) + '</td></tr>'
		}
	}
	if (convenienceStore.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Convenience Store</th><td>' + Autolinker.link(String(feature.properties['Residential100_CSCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Convenience Store</th><td>' + Autolinker.link(String(feature.properties['Residential200_CSCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Convenience Store</th><td>' + Autolinker.link(String(feature.properties['Residential300_CSCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Convenience Store</th><td>' + Autolinker.link(String(feature.properties['Residential400_CSCnt400'])) + '</td></tr>'
		}
	}
	if (eldercare.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Eldercare</th><td>' + Autolinker.link(String(feature.properties['Residential100_EldCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Eldercare</th><td>' + Autolinker.link(String(feature.properties['Residential200_EldCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Eldercare</th><td>' + Autolinker.link(String(feature.properties['Residential300_EldCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Eldercare</th><td>' + Autolinker.link(String(feature.properties['Residential400_EldCnt400'])) + '</td></tr>'
		}
	}
	if (hawker.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Hawker</th><td>' + Autolinker.link(String(feature.properties['Residential100_HawkCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Hawker</th><td>' + Autolinker.link(String(feature.properties['Residential200_HawkCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Hawker</th><td>' + Autolinker.link(String(feature.properties['Residential300_HawkCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Hawker</th><td>' + Autolinker.link(String(feature.properties['Residential400_HawkCnt400'])) + '</td></tr>'
		}
	}
	if (hospital.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Hospital</th><td>' + Autolinker.link(String(feature.properties['Residential100_HosCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Hospital</th><td>' + Autolinker.link(String(feature.properties['Residential200_HosCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Hospital</th><td>' + Autolinker.link(String(feature.properties['Residential300_HosCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Hospital</th><td>' + Autolinker.link(String(feature.properties['Residential400_HosCnt400'])) + '</td></tr>'
		}
	}
	if (jcSch.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of JC</th><td>' + Autolinker.link(String(feature.properties['Residential100_JCCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of JC</th><td>' + Autolinker.link(String(feature.properties['Residential200_JCCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of JC</th><td>' + Autolinker.link(String(feature.properties['Residential300_JCCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of JC</th><td>' + Autolinker.link(String(feature.properties['Residential400_JCCnt400'])) + '</td></tr>'
		}
	}
	if (library.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Libraries</th><td>' + Autolinker.link(String(feature.properties['Residential100_LibCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Libraries</th><td>' + Autolinker.link(String(feature.properties['Residential200_LibCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Libraries</th><td>' + Autolinker.link(String(feature.properties['Residential300_LibCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Libraries</th><td>' + Autolinker.link(String(feature.properties['Residential400_LibCnt400'])) + '</td></tr>'
		}
	}
	if (mohClinics.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of MOH</th><td>' + Autolinker.link(String(feature.properties['Residential100_MohCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of MOH</th><td>' + Autolinker.link(String(feature.properties['Residential200_MohCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of MOH</th><td>' + Autolinker.link(String(feature.properties['Residential300_MohCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of MOH</th><td>' + Autolinker.link(String(feature.properties['Residential400_MohCnt400'])) + '</td></tr>'
		}
	}
	if (mrt.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of MRT</th><td>' + Autolinker.link(String(feature.properties['Residential100_MrtCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of MRT</th><td>' + Autolinker.link(String(feature.properties['Residential200_MrtCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of MRT</th><td>' + Autolinker.link(String(feature.properties['Residential300_MrtCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of MRT</th><td>' + Autolinker.link(String(feature.properties['Residential400_MrtCnt400'])) + '</td></tr>'
		}
	}
	if (nationalParks.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of National Parks</th><td>' + Autolinker.link(String(feature.properties['Residential100_ParkCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of National Parks</th><td>' + Autolinker.link(String(feature.properties['Residential200_ParkCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of National Parks</th><td>' + Autolinker.link(String(feature.properties['Residential300_ParkCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of National Parks</th><td>' + Autolinker.link(String(feature.properties['Residential400_ParkCnt400'])) + '</td></tr>'
		}
	}
	if (petrolKiosks.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Petrol Kiosks</th><td>' + Autolinker.link(String(feature.properties['Residential100_PSCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Petrol Kiosks</th><td>' + Autolinker.link(String(feature.properties['Residential200_PSCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Petrol Kiosks</th><td>' + Autolinker.link(String(feature.properties['Residential300_PSCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Petrol Kiosks</th><td>' + Autolinker.link(String(feature.properties['Residential400_PSCnt400'])) + '</td></tr>'
		}
	}
	if (worship.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Places of Worship</th><td>' + Autolinker.link(String(feature.properties['Residential100_WorCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Places of Worship</th><td>' + Autolinker.link(String(feature.properties['Residential200_WorCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Places of Worship</th><td>' + Autolinker.link(String(feature.properties['Residential300_WorCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Places of Worship</th><td>' + Autolinker.link(String(feature.properties['Residential400_WorCnt400'])) + '</td></tr>'
		}
	}
	if (police.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Police Stations</th><td>' + Autolinker.link(String(feature.properties['Residential100_PoliCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Police Stations</th><td>' + Autolinker.link(String(feature.properties['Residential200_PoliCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Police Stations</th><td>' + Autolinker.link(String(feature.properties['Residential300_PoliCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Police Stations</th><td>' + Autolinker.link(String(feature.properties['Residential400_PoliCnt400'])) + '</td></tr>'
		}
	}
	if (polyClinics.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Polyclinics</th><td>' + Autolinker.link(String(feature.properties['Residential100_PoiCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Polyclinics</th><td>' + Autolinker.link(String(feature.properties['Residential200_PoiCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Polyclinics</th><td>' + Autolinker.link(String(feature.properties['Residential300_PoiCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Polyclinics</th><td>' + Autolinker.link(String(feature.properties['Residential400_PoiCnt400'])) + '</td></tr>'
		}
	}
	if (priSch.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Primary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential100_PriCnt100'])) + '</td></tr>'
		
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Primary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential200_PriCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Primary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential300_PriCnt300'])) + '</td></tr>'
		
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Primary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential400_PriCnt400'])) + '</td></tr>'
		}
	}
	if (secSch.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Secondary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential100_SecCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Secondary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential200_SecCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Secondary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential300_SecCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Secondary Schools</th><td>' + Autolinker.link(String(feature.properties['Residential400_SecCnt400'])) + '</td></tr>'
		}
	}
	if (shopping.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Shopping Centres</th><td>' + Autolinker.link(String(feature.properties['Residential100_ShopCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Shopping Centres</th><td>' + Autolinker.link(String(feature.properties['Residential200_ShopCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Shopping Centres</th><td>' + Autolinker.link(String(feature.properties['Residential300_ShopCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Shopping Centres</th><td>' + Autolinker.link(String(feature.properties['Residential400_ShopCnt400'])) + '</td></tr>'
		}
	}
	if (sportsFacility.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Sports Facilities</th><td>' + Autolinker.link(String(feature.properties['Residential100_SptCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Sports Facilities</th><td>' + Autolinker.link(String(feature.properties['Residential200_SptCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Sports Facilities</th><td>' + Autolinker.link(String(feature.properties['Residential300_SptCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Sports Facilities</th><td>' + Autolinker.link(String(feature.properties['Residential400_SptCnt400'])) + '</td></tr>'
		}
	}
	if (supermarket.checked == 1){
		if( $('#ex13').data('slider').getValue() == "100"){
			countPop += '<tr><th scope="row">No of Supermarkets</th><td>' + Autolinker.link(String(feature.properties['Residential100_SmktCnt100'])) + '</td></tr>'
		}else if( $('#ex13').data('slider').getValue() == "200"){
			countPop += '<tr><th scope="row">No of Supermarkets</th><td>' + Autolinker.link(String(feature.properties['Residential200_SmktCnt200'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "300"){
			countPop += '<tr><th scope="row">No of Supermarkets</th><td>' + Autolinker.link(String(feature.properties['Residential300_SmktCnt300'])) + '</td></tr>'
		}
		else if( $('#ex13').data('slider').getValue() == "400"){
			countPop += '<tr><th scope="row">No of Supermarkets</th><td>' + Autolinker.link(String(feature.properties['Residential400_SmktCnt400'])) + '</td></tr>'
		}
	}
	
	if(document.getElementById("residentialBufferOn").value == "on"){
		//countPop += '<tr><th scope="row"></th><td><input type="button" value="Return" onclick="computeServices()"></td></tr>'
	}else{
		countPop += '<tr><th scope="row"><input type="button" value="Buffer This" class="btn btn-primary btn-xs" onclick="bufferResidential('+Autolinker.link(String(feature.properties['osm_id']))+')">&nbsp<input type="button" value="Nearest Amenties" class="btn btn-primary btn-xs" onclick="shortestRoute('+Autolinker.link(String(feature.properties['osm_id']))+')"></th><td></td></tr>'
		countPop += '<tr><th scope="row"><br></th><td></td></tr>';
	}
	
	
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr>'+countPop+'</table>';
	layer.bindPopup(popupContent);
}

function pop_ResidentialBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);
}

function pop_ResidentialBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);
}

function pop_ResidentialBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);
}

function pop_ResidentialBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">osm_id</th><td>' + Autolinker.link(String(feature.properties['osm_id'])) + '</td></tr><tr><th scope="row">name</th><td>' + Autolinker.link(String(feature.properties['name'])) + '</td></tr><tr><th scope="row">type</th><td>' + Autolinker.link(String(feature.properties['type'])) + '</td></tr></table>';
	layer.bindPopup(popupContent);
}

function pop_bankbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">NAME</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">DESC</th><td>' + Autolinker.link(String(feature.properties['DESC'])) + '</td></tr><tr><th scope="row">ADDRESS</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">POSTCODE</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BankBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BankBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BankBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BankBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_busbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Bus Stop Number</th><td>' + Autolinker.link(String(feature.properties['BUS_STOP_N'])) + '</td></tr><tr><th scope="row">Location</th><td>' + Autolinker.link(String(feature.properties['LOC_DESC'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BusBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Bus Stop Number</th><td>' + Autolinker.link(String(feature.properties['BUS_STOP_N'])) + '</td></tr><tr><th scope="row">Location</th><td>' + Autolinker.link(String(feature.properties['LOC_DESC'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BusBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Bus Stop Number</th><td>' + Autolinker.link(String(feature.properties['BUS_STOP_N'])) + '</td></tr><tr><th scope="row">Location</th><td>' + Autolinker.link(String(feature.properties['LOC_DESC'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BusBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Bus Stop Number</th><td>' + Autolinker.link(String(feature.properties['BUS_STOP_N'])) + '</td></tr><tr><th scope="row">Location</th><td>' + Autolinker.link(String(feature.properties['LOC_DESC'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_BusBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Bus Stop Number</th><td>' + Autolinker.link(String(feature.properties['BUS_STOP_N'])) + '</td></tr><tr><th scope="row">Location</th><td>' + Autolinker.link(String(feature.properties['LOC_DESC'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_childcarebedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ChildBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ChildBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ChildBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ChildBuffer400(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_communitycentresbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_CCBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_CCBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_CCBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_CCBuffer400(feature, layer) {
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_conveniencestorebedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Opening</th><td>' + Autolinker.link(String(feature.properties['Opening'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ConStoreBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Opening</th><td>' + Autolinker.link(String(feature.properties['Opening'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ConStoreBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Opening</th><td>' + Autolinker.link(String(feature.properties['Opening'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ConStoreBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Opening</th><td>' + Autolinker.link(String(feature.properties['Opening'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ConStoreBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Opening</th><td>' + Autolinker.link(String(feature.properties['Opening'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_eldercarebedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ElderlyBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ElderlyBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ElderlyBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ElderlyBuffer400(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_hawkerbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HawkerBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HawkerBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HawkerBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HawkerBuffer400(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_hospitalsbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">ID</th><td>' + Autolinker.link(String(feature.properties['ID'])) + '</td></tr><tr><th scope="row">OBJECTID</th><td>' + Autolinker.link(String(feature.properties['OBJECTID'])) + '</td></tr><tr><th scope="row">TYPE</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">BUILDING_N</th><td>' + Autolinker.link(String(feature.properties['BUILDING_N'])) + '</td></tr><tr><th scope="row">HOUSE_BLK_</th><td>' + Autolinker.link(String(feature.properties['HOUSE_BLK_'])) + '</td></tr><tr><th scope="row">ROAD_NAME</th><td>' + Autolinker.link(String(feature.properties['ROAD_NAME'])) + '</td></tr><tr><th scope="row">POSTAL</th><td>' + Autolinker.link(String(feature.properties['POSTAL'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">legend_exp</th><td>' + Autolinker.link(String(feature.properties['legend_exp'])) + '</td></tr><tr><th scope="row">OBJECTID_2</th><td>' + Autolinker.link(String(feature.properties['OBJECTID_2'])) + '</td></tr><tr><th scope="row">SUBZONE_NO</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_NO'])) + '</td></tr><tr><th scope="row">SUBZONE_N</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr><tr><th scope="row">SUBZONE_C</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_C'])) + '</td></tr><tr><th scope="row">CA_IND</th><td>' + Autolinker.link(String(feature.properties['CA_IND'])) + '</td></tr><tr><th scope="row">PLN_AREA_N</th><td>' + Autolinker.link(String(feature.properties['PLN_AREA_N'])) + '</td></tr><tr><th scope="row">PLN_AREA_C</th><td>' + Autolinker.link(String(feature.properties['PLN_AREA_C'])) + '</td></tr><tr><th scope="row">REGION_N</th><td>' + Autolinker.link(String(feature.properties['REGION_N'])) + '</td></tr><tr><th scope="row">REGION_C</th><td>' + Autolinker.link(String(feature.properties['REGION_C'])) + '</td></tr><tr><th scope="row">INC_CRC</th><td>' + Autolinker.link(String(feature.properties['INC_CRC'])) + '</td></tr><tr><th scope="row">FMEL_UPD_D</th><td>' + Autolinker.link(String(feature.properties['FMEL_UPD_D'])) + '</td></tr><tr><th scope="row">X_ADDR</th><td>' + Autolinker.link(String(feature.properties['X_ADDR'])) + '</td></tr><tr><th scope="row">Y_ADDR</th><td>' + Autolinker.link(String(feature.properties['Y_ADDR'])) + '</td></tr><tr><th scope="row">SHAPE_Leng</th><td>' + Autolinker.link(String(feature.properties['SHAPE_Leng'])) + '</td></tr><tr><th scope="row">SHAPE_Area</th><td>' + Autolinker.link(String(feature.properties['SHAPE_Area'])) + '</td></tr><tr><th scope="row">OBJECTI3</th><td>' + Autolinker.link(String(feature.properties['OBJECTI3'])) + '</td></tr><tr><th scope="row">SUBZONE__2</th><td>' + Autolinker.link(String(feature.properties['SUBZONE__2'])) + '</td></tr><tr><th scope="row">CA_IND_2</th><td>' + Autolinker.link(String(feature.properties['CA_IND_2'])) + '</td></tr><tr><th scope="row">PLN_AREA_2</th><td>' + Autolinker.link(String(feature.properties['PLN_AREA_2'])) + '</td></tr><tr><th scope="row">REGION_N_2</th><td>' + Autolinker.link(String(feature.properties['REGION_N_2'])) + '</td></tr><tr><th scope="row">REGION_C_2</th><td>' + Autolinker.link(String(feature.properties['REGION_C_2'])) + '</td></tr><tr><th scope="row">INC_CRC_2</th><td>' + Autolinker.link(String(feature.properties['INC_CRC_2'])) + '</td></tr><tr><th scope="row">FMEL_UPD_2</th><td>' + Autolinker.link(String(feature.properties['FMEL_UPD_2'])) + '</td></tr><tr><th scope="row">X_ADDR_2</th><td>' + Autolinker.link(String(feature.properties['X_ADDR_2'])) + '</td></tr><tr><th scope="row">Y_ADDR_2</th><td>' + Autolinker.link(String(feature.properties['Y_ADDR_2'])) + '</td></tr><tr><th scope="row">SHAPE_Le_2</th><td>' + Autolinker.link(String(feature.properties['SHAPE_Le_2'])) + '</td></tr><tr><th scope="row">SHAPE_Ar_2</th><td>' + Autolinker.link(String(feature.properties['SHAPE_Ar_2'])) + '</td></tr></table>';
	
	layer.bindPopup(popupContent);
}

function pop_HospitalBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['BUILDING_N'])) + '</td></tr><tr><th scope="row">House Blk</th><td>' + Autolinker.link(String(feature.properties['HOUSE_BLK_'])) + '</td></tr><tr><th scope="row">Road Name</th><td>' + Autolinker.link(String(feature.properties['ROAD_NAME'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HospitalBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['BUILDING_N'])) + '</td></tr><tr><th scope="row">House Blk</th><td>' + Autolinker.link(String(feature.properties['HOUSE_BLK_'])) + '</td></tr><tr><th scope="row">Road Name</th><td>' + Autolinker.link(String(feature.properties['ROAD_NAME'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HospitalBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['BUILDING_N'])) + '</td></tr><tr><th scope="row">House Blk</th><td>' + Autolinker.link(String(feature.properties['HOUSE_BLK_'])) + '</td></tr><tr><th scope="row">Road Name</th><td>' + Autolinker.link(String(feature.properties['ROAD_NAME'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_HospitalBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['BUILDING_N'])) + '</td></tr><tr><th scope="row">House Blk</th><td>' + Autolinker.link(String(feature.properties['HOUSE_BLK_'])) + '</td></tr><tr><th scope="row">Road Name</th><td>' + Autolinker.link(String(feature.properties['ROAD_NAME'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_JCbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['SCH_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">School Code</th><td>' + Autolinker.link(String(feature.properties['SCH_CODE'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_JCBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['SCH_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">School Code</th><td>' + Autolinker.link(String(feature.properties['SCH_CODE'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_JCBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['SCH_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">School Code</th><td>' + Autolinker.link(String(feature.properties['SCH_CODE'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_JCBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['SCH_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">School Code</th><td>' + Autolinker.link(String(feature.properties['SCH_CODE'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_JCBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['SCH_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">School Code</th><td>' + Autolinker.link(String(feature.properties['SCH_CODE'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_librariesbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_LibBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_LibBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_LibBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_LibBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['ADDRESSPOS'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_clinicsbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['HCI_NAME'])) + '</td></tr><tr><th scope="row">HCI Code</th><td>' + Autolinker.link(String(feature.properties['HCI_CODE'])) + '</td></tr><tr><th scope="row">License Type</th><td>' + Autolinker.link(String(feature.properties['LICENCE_TY'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['HCI_TEL'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_CD'])) + '</td></tr><tr><th scope="row">Block House No</th><td>' + Autolinker.link(String(feature.properties['BLK_HSE_NO'])) + '</td></tr><tr><th scope="row">Floor No</th><td>' + Autolinker.link(String(feature.properties['FLOOR_NO'])) + '</td></tr><tr><th scope="row">Unit No</th><td>' + Autolinker.link(String(feature.properties['UNIT_NO']))+ '</td></tr><tr><th scope="row">Clinic Pro</th><td>' + Autolinker.link(String(feature.properties['CLINIC_PRO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MohBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['HCI_NAME'])) + '</td></tr><tr><th scope="row">HCI Code</th><td>' + Autolinker.link(String(feature.properties['HCI_CODE'])) + '</td></tr><tr><th scope="row">License Type</th><td>' + Autolinker.link(String(feature.properties['LICENCE_TY'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['HCI_TEL'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_CD'])) + '</td></tr><tr><th scope="row">Block House No</th><td>' + Autolinker.link(String(feature.properties['BLK_HSE_NO'])) + '</td></tr><tr><th scope="row">Floor No</th><td>' + Autolinker.link(String(feature.properties['FLOOR_NO'])) + '</td></tr><tr><th scope="row">Unit No</th><td>' + Autolinker.link(String(feature.properties['UNIT_NO']))+ '</td></tr><tr><th scope="row">Clinic Pro</th><td>' + Autolinker.link(String(feature.properties['CLINIC_PRO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MohBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['HCI_NAME'])) + '</td></tr><tr><th scope="row">HCI Code</th><td>' + Autolinker.link(String(feature.properties['HCI_CODE'])) + '</td></tr><tr><th scope="row">License Type</th><td>' + Autolinker.link(String(feature.properties['LICENCE_TY'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['HCI_TEL'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_CD'])) + '</td></tr><tr><th scope="row">Block House No</th><td>' + Autolinker.link(String(feature.properties['BLK_HSE_NO'])) + '</td></tr><tr><th scope="row">Floor No</th><td>' + Autolinker.link(String(feature.properties['FLOOR_NO'])) + '</td></tr><tr><th scope="row">Unit No</th><td>' + Autolinker.link(String(feature.properties['UNIT_NO']))+ '</td></tr><tr><th scope="row">Clinic Pro</th><td>' + Autolinker.link(String(feature.properties['CLINIC_PRO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MohBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['HCI_NAME'])) + '</td></tr><tr><th scope="row">HCI Code</th><td>' + Autolinker.link(String(feature.properties['HCI_CODE'])) + '</td></tr><tr><th scope="row">License Type</th><td>' + Autolinker.link(String(feature.properties['LICENCE_TY'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['HCI_TEL'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_CD'])) + '</td></tr><tr><th scope="row">Block House No</th><td>' + Autolinker.link(String(feature.properties['BLK_HSE_NO'])) + '</td></tr><tr><th scope="row">Floor No</th><td>' + Autolinker.link(String(feature.properties['FLOOR_NO'])) + '</td></tr><tr><th scope="row">Unit No</th><td>' + Autolinker.link(String(feature.properties['UNIT_NO']))+ '</td></tr><tr><th scope="row">Clinic Pro</th><td>' + Autolinker.link(String(feature.properties['CLINIC_PRO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MohBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['HCI_NAME'])) + '</td></tr><tr><th scope="row">HCI Code</th><td>' + Autolinker.link(String(feature.properties['HCI_CODE'])) + '</td></tr><tr><th scope="row">License Type</th><td>' + Autolinker.link(String(feature.properties['LICENCE_TY'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['HCI_TEL'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_CD'])) + '</td></tr><tr><th scope="row">Block House No</th><td>' + Autolinker.link(String(feature.properties['BLK_HSE_NO'])) + '</td></tr><tr><th scope="row">Floor No</th><td>' + Autolinker.link(String(feature.properties['FLOOR_NO'])) + '</td></tr><tr><th scope="row">Unit No</th><td>' + Autolinker.link(String(feature.properties['UNIT_NO']))+ '</td></tr><tr><th scope="row">Clinic Pro</th><td>' + Autolinker.link(String(feature.properties['CLINIC_PRO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_mrtbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Subzone</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MrtBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Subzone</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MrtBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Subzone</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MrtBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Subzone</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_MrtBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Subzone</th><td>' + Autolinker.link(String(feature.properties['SUBZONE_N'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_parksbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ParkBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ParkBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ParkBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ParkBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESSSTR'])) + '</td></tr><tr><th scope="row">Description</th><td>' + Autolinker.link(String(feature.properties['DESCRIPTIO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_petrolstationsbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Petrol Station</th><td>' + Autolinker.link(String(feature.properties['Petrol_Sta'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Services</th><td>' + Autolinker.link(String(feature.properties['Services'])) + '</td></tr><tr><th scope="row">Other_Serv</th><td>' + Autolinker.link(String(feature.properties['Other_Serv'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PetrolBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Petrol Station</th><td>' + Autolinker.link(String(feature.properties['Petrol_Sta'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Services</th><td>' + Autolinker.link(String(feature.properties['Services'])) + '</td></tr><tr><th scope="row">Other_Serv</th><td>' + Autolinker.link(String(feature.properties['Other_Serv'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PetrolBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Petrol Station</th><td>' + Autolinker.link(String(feature.properties['Petrol_Sta'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Services</th><td>' + Autolinker.link(String(feature.properties['Services'])) + '</td></tr><tr><th scope="row">Other_Serv</th><td>' + Autolinker.link(String(feature.properties['Other_Serv'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PetrolBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Petrol Station</th><td>' + Autolinker.link(String(feature.properties['Petrol_Sta'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Services</th><td>' + Autolinker.link(String(feature.properties['Services'])) + '</td></tr><tr><th scope="row">Other_Serv</th><td>' + Autolinker.link(String(feature.properties['Other_Serv'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PetrolBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Petrol Station</th><td>' + Autolinker.link(String(feature.properties['Petrol_Sta'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr><tr><th scope="row">Services</th><td>' + Autolinker.link(String(feature.properties['Services'])) + '</td></tr><tr><th scope="row">Other_Serv</th><td>' + Autolinker.link(String(feature.properties['Other_Serv'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_placeofworshipbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Place of Worship</th><td>' + Autolinker.link(String(feature.properties['Place_of_W'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_WorshipBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Place of Worship</th><td>' + Autolinker.link(String(feature.properties['Place_of_W'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_WorshipBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Place of Worship</th><td>' + Autolinker.link(String(feature.properties['Place_of_W'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_WorshipBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Place of Worship</th><td>' + Autolinker.link(String(feature.properties['Place_of_W'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_WorshipBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Place of Worship</th><td>' + Autolinker.link(String(feature.properties['Place_of_W'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_policebedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Department</th><td>' + Autolinker.link(String(feature.properties['DEPARTMENT'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">House Blk No</th><td>' + Autolinker.link(String(feature.properties['HSE_BLK_NO'])) + '</td></tr><tr><th scope="row">Street name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['TELEPHONE'])) + '</td></tr><tr><th scope="row">Fax</th><td>' + Autolinker.link(String(feature.properties['FAX'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PoliceBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Department</th><td>' + Autolinker.link(String(feature.properties['DEPARTMENT'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">House Blk No</th><td>' + Autolinker.link(String(feature.properties['HSE_BLK_NO'])) + '</td></tr><tr><th scope="row">Street name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['TELEPHONE'])) + '</td></tr><tr><th scope="row">Fax</th><td>' + Autolinker.link(String(feature.properties['FAX'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PoliceBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Department</th><td>' + Autolinker.link(String(feature.properties['DEPARTMENT'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">House Blk No</th><td>' + Autolinker.link(String(feature.properties['HSE_BLK_NO'])) + '</td></tr><tr><th scope="row">Street name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['TELEPHONE'])) + '</td></tr><tr><th scope="row">Fax</th><td>' + Autolinker.link(String(feature.properties['FAX'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PoliceBuffer300(feature, layer) {								
	var popupContent = '<table><tr><th scope="row">Department</th><td>' + Autolinker.link(String(feature.properties['DEPARTMENT'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">House Blk No</th><td>' + Autolinker.link(String(feature.properties['HSE_BLK_NO'])) + '</td></tr><tr><th scope="row">Street name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['TELEPHONE'])) + '</td></tr><tr><th scope="row">Fax</th><td>' + Autolinker.link(String(feature.properties['FAX'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PoliceBuffer400(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Department</th><td>' + Autolinker.link(String(feature.properties['DEPARTMENT'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['TYPE'])) + '</td></tr><tr><th scope="row">House Blk No</th><td>' + Autolinker.link(String(feature.properties['HSE_BLK_NO'])) + '</td></tr><tr><th scope="row">Street name</th><td>' + Autolinker.link(String(feature.properties['STREET_NAM'])) + '</td></tr><tr><th scope="row">Tel</th><td>' + Autolinker.link(String(feature.properties['TELEPHONE'])) + '</td></tr><tr><th scope="row">Fax</th><td>' + Autolinker.link(String(feature.properties['FAX'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_polyclinicabedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">POI Code</th><td>' + Autolinker.link(String(feature.properties['POI_CODE'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['POI_TYPE'])) + '</td></tr><tr><th scope="row">POI Group</th><td>' + Autolinker.link(String(feature.properties['POI_GROUP'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADDRES'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PolyclinicBuffer100(feature, layer) {								
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">POI Code</th><td>' + Autolinker.link(String(feature.properties['POI_CODE'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['POI_TYPE'])) + '</td></tr><tr><th scope="row">POI Group</th><td>' + Autolinker.link(String(feature.properties['POI_GROUP'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADDRES'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PolyclinicBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">POI Code</th><td>' + Autolinker.link(String(feature.properties['POI_CODE'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['POI_TYPE'])) + '</td></tr><tr><th scope="row">POI Group</th><td>' + Autolinker.link(String(feature.properties['POI_GROUP'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADDRES'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PolyclinicBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">POI Code</th><td>' + Autolinker.link(String(feature.properties['POI_CODE'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['POI_TYPE'])) + '</td></tr><tr><th scope="row">POI Group</th><td>' + Autolinker.link(String(feature.properties['POI_GROUP'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADDRES'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PolyclinicBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">POI Code</th><td>' + Autolinker.link(String(feature.properties['POI_CODE'])) + '</td></tr><tr><th scope="row">Type</th><td>' + Autolinker.link(String(feature.properties['POI_TYPE'])) + '</td></tr><tr><th scope="row">POI Group</th><td>' + Autolinker.link(String(feature.properties['POI_GROUP'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADDRES'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_prischoolbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PriBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PriBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PriBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_PriBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_secschoolbedok(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SecBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SecBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SecBuffer300(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SecBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['POI_ADD'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTCODE'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_shoppingbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['ST_NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ShoppingBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['ST_NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ShoppingBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['ST_NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ShoppingBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['ST_NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_ShoppingBuffer400(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['POI_NAME'])) + '</td></tr><tr><th scope="row">Street Name</th><td>' + Autolinker.link(String(feature.properties['ST_NAME'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_sportsbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Tags</th><td>' + Autolinker.link(String(feature.properties['TAGS'])) + '</td></tr><tr><th scope="row">Facilities</th><td>' + Autolinker.link(String(feature.properties['FACILITIES'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_COD'])) + '</td></tr><tr><th scope="row">Swimming Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SWIMMING_C'])) + '</td></tr><tr><th scope="row">Sports Hall Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SPORTS_HAL'])) + '</td></tr><tr><th scope="row">Stadium Opening Hours</th><td>' + Autolinker.link(String(feature.properties['STADIUM_OP'])) + '</td></tr><tr><th scope="row">Gym Opening Hours</th><td>' + Autolinker.link(String(feature.properties['GYM_OPEN_H'])) + '</td></tr><tr><th scope="row">CONTACT_NO</th><td>' + Autolinker.link(String(feature.properties['CONTACT_NO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SportsBuffer100(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Tags</th><td>' + Autolinker.link(String(feature.properties['TAGS'])) + '</td></tr><tr><th scope="row">Facilities</th><td>' + Autolinker.link(String(feature.properties['FACILITIES'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_COD'])) + '</td></tr><tr><th scope="row">Swimming Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SWIMMING_C'])) + '</td></tr><tr><th scope="row">Sports Hall Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SPORTS_HAL'])) + '</td></tr><tr><th scope="row">Stadium Opening Hours</th><td>' + Autolinker.link(String(feature.properties['STADIUM_OP'])) + '</td></tr><tr><th scope="row">Gym Opening Hours</th><td>' + Autolinker.link(String(feature.properties['GYM_OPEN_H'])) + '</td></tr><tr><th scope="row">CONTACT_NO</th><td>' + Autolinker.link(String(feature.properties['CONTACT_NO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SportsBuffer200(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Tags</th><td>' + Autolinker.link(String(feature.properties['TAGS'])) + '</td></tr><tr><th scope="row">Facilities</th><td>' + Autolinker.link(String(feature.properties['FACILITIES'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_COD'])) + '</td></tr><tr><th scope="row">Swimming Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SWIMMING_C'])) + '</td></tr><tr><th scope="row">Sports Hall Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SPORTS_HAL'])) + '</td></tr><tr><th scope="row">Stadium Opening Hours</th><td>' + Autolinker.link(String(feature.properties['STADIUM_OP'])) + '</td></tr><tr><th scope="row">Gym Opening Hours</th><td>' + Autolinker.link(String(feature.properties['GYM_OPEN_H'])) + '</td></tr><tr><th scope="row">CONTACT_NO</th><td>' + Autolinker.link(String(feature.properties['CONTACT_NO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SportsBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Tags</th><td>' + Autolinker.link(String(feature.properties['TAGS'])) + '</td></tr><tr><th scope="row">Facilities</th><td>' + Autolinker.link(String(feature.properties['FACILITIES'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_COD'])) + '</td></tr><tr><th scope="row">Swimming Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SWIMMING_C'])) + '</td></tr><tr><th scope="row">Sports Hall Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SPORTS_HAL'])) + '</td></tr><tr><th scope="row">Stadium Opening Hours</th><td>' + Autolinker.link(String(feature.properties['STADIUM_OP'])) + '</td></tr><tr><th scope="row">Gym Opening Hours</th><td>' + Autolinker.link(String(feature.properties['GYM_OPEN_H'])) + '</td></tr><tr><th scope="row">CONTACT_NO</th><td>' + Autolinker.link(String(feature.properties['CONTACT_NO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SportsBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['NAME'])) + '</td></tr><tr><th scope="row">Tags</th><td>' + Autolinker.link(String(feature.properties['TAGS'])) + '</td></tr><tr><th scope="row">Facilities</th><td>' + Autolinker.link(String(feature.properties['FACILITIES'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['ADDRESS'])) + '</td></tr><tr><th scope="row">Postal Code</th><td>' + Autolinker.link(String(feature.properties['POSTAL_COD'])) + '</td></tr><tr><th scope="row">Swimming Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SWIMMING_C'])) + '</td></tr><tr><th scope="row">Sports Hall Opening Hours</th><td>' + Autolinker.link(String(feature.properties['SPORTS_HAL'])) + '</td></tr><tr><th scope="row">Stadium Opening Hours</th><td>' + Autolinker.link(String(feature.properties['STADIUM_OP'])) + '</td></tr><tr><th scope="row">Gym Opening Hours</th><td>' + Autolinker.link(String(feature.properties['GYM_OPEN_H'])) + '</td></tr><tr><th scope="row">CONTACT_NO</th><td>' + Autolinker.link(String(feature.properties['CONTACT_NO'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_supermarketbedok(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Operating</th><td>' + Autolinker.link(String(feature.properties['Operating'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SupermktBuffer100(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Operating</th><td>' + Autolinker.link(String(feature.properties['Operating'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SupermktBuffer200(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Operating</th><td>' + Autolinker.link(String(feature.properties['Operating'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SupermktBuffer300(feature, layer) {										
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Operating</th><td>' + Autolinker.link(String(feature.properties['Operating'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}

function pop_SupermktBuffer400(feature, layer) {									
	var popupContent = '<table><tr><th scope="row">Store</th><td>' + Autolinker.link(String(feature.properties['Store'])) + '</td></tr><tr><th scope="row">Name</th><td>' + Autolinker.link(String(feature.properties['Name'])) + '</td></tr><tr><th scope="row">Address</th><td>' + Autolinker.link(String(feature.properties['Address'])) + '</td></tr><tr><th scope="row">PostalCode</th><td>' + Autolinker.link(String(feature.properties['PostalCode'])) + '</td></tr><tr><th scope="row">Operating</th><td>' + Autolinker.link(String(feature.properties['Operating'])) + '</td></tr><tr><th scope="row">Telephone</th><td>' + Autolinker.link(String(feature.properties['Telephone'])) + '</td></tr></table>'
	layer.bindPopup(popupContent);
}
					
