var exp_residentialbedokJSON;
function loadBedokResidential(){
		exp_residentialbedokJSON = new L.geoJson(exp_residentialbedok,{
		onEachFeature: pop_residentialbedok,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_residentialbedokJSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_residentialbedokJSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	
	exp_residentialbedokJSON.addTo(map);
}

var exp_ResidentialBuffer100JSON;
function loadBedokResidential100(){
		exp_ResidentialBuffer100JSON = new L.geoJson(exp_ResidentialBuffer100,{
			onEachFeature: pop_ResidentialBuffer100,
			style: function (feature) {
				return {color: feature.properties.border_color_qgis2leaf,
						fillColor: feature.properties.color_qgis2leaf,
						weight: feature.properties.radius_qgis2leaf,
						opacity: feature.properties.transp_qgis2leaf,
						fillOpacity: feature.properties.transp_qgis2leaf};
				}
			});
		feature_group.addLayer(exp_ResidentialBuffer100JSON);
		var layerOrder=new Array();
		layerOrder[layerOrder.length] = exp_ResidentialBuffer100JSON;
		for (index = 0; index < layerOrder.length; index++) {
			map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
		}
		exp_ResidentialBuffer100JSON.addTo(map);
}

var exp_ResidentialBuffer200JSON;
function loadBedokResidential200(){
		exp_ResidentialBuffer200JSON = new L.geoJson(exp_ResidentialBuffer200,{
			onEachFeature: pop_ResidentialBuffer200,
			style: function (feature) {
				return {color: feature.properties.border_color_qgis2leaf,
						fillColor: feature.properties.color_qgis2leaf,
						weight: feature.properties.radius_qgis2leaf,
						opacity: feature.properties.transp_qgis2leaf,
						fillOpacity: feature.properties.transp_qgis2leaf};
				}
			});
		feature_group.addLayer(exp_ResidentialBuffer200JSON);
		var layerOrder=new Array();
		layerOrder[layerOrder.length] = exp_ResidentialBuffer200JSON;
		for (index = 0; index < layerOrder.length; index++) {
			map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
		}
		exp_ResidentialBuffer200JSON.addTo(map);
}

var exp_ResidentialBuffer300JSON;
function loadBedokResidential300(){
		exp_ResidentialBuffer300JSON = new L.geoJson(exp_ResidentialBuffer300,{
			onEachFeature: pop_ResidentialBuffer300,
			style: function (feature) {
				return {color: feature.properties.border_color_qgis2leaf,
						fillColor: feature.properties.color_qgis2leaf,
						weight: feature.properties.radius_qgis2leaf,
						opacity: feature.properties.transp_qgis2leaf,
						fillOpacity: feature.properties.transp_qgis2leaf};
				}
			});
		feature_group.addLayer(exp_ResidentialBuffer300JSON);
		var layerOrder=new Array();
		layerOrder[layerOrder.length] = exp_ResidentialBuffer300JSON;
		for (index = 0; index < layerOrder.length; index++) {
			map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
		}
		exp_ResidentialBuffer300JSON.addTo(map);
}

var exp_ResidentialBuffer400JSON;
function loadBedokResidential400(){
		exp_ResidentialBuffer400JSON = new L.geoJson(exp_ResidentialBuffer400,{
			onEachFeature: pop_ResidentialBuffer400,
			style: function (feature) {
				return {color: feature.properties.border_color_qgis2leaf,
						fillColor: feature.properties.color_qgis2leaf,
						weight: feature.properties.radius_qgis2leaf,
						opacity: feature.properties.transp_qgis2leaf,
						fillOpacity: feature.properties.transp_qgis2leaf};
				}
			});
		feature_group.addLayer(exp_ResidentialBuffer400JSON);
		var layerOrder=new Array();
		layerOrder[layerOrder.length] = exp_ResidentialBuffer400JSON;
		for (index = 0; index < layerOrder.length; index++) {
			map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
		}
		exp_ResidentialBuffer400JSON.addTo(map);
}

var exp_bankbedokJSON;
function loadBankPoint(){
	exp_bankbedokJSON = new L.geoJson(exp_bankbedok,{
		onEachFeature: pop_bankbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	feature_group.addLayer(exp_bankbedokJSON);
	
	exp_bankbedokJSON.addTo(map);
}

var exp_BankBuffer100JSON;
function loadBankBuffer100(){
	exp_BankBuffer100JSON = new L.geoJson(exp_BankBuffer100,{
		onEachFeature: pop_BankBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BankBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BankBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_BankBuffer100JSON.addTo(map);
}


var exp_BankBuffer200JSON;
function loadBankBuffer200(){
	exp_BankBuffer200JSON = new L.geoJson(exp_BankBuffer200,{
		onEachFeature: pop_BankBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BankBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BankBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	
	exp_BankBuffer200JSON.addTo(map);
}

var exp_BankBuffer300JSON;
function loadBankBuffer300(){
	exp_BankBuffer300JSON = new L.geoJson(exp_BankBuffer300,{
		onEachFeature: pop_BankBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BankBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BankBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_BankBuffer300JSON.addTo(map);
}

var exp_BankBuffer400JSON;
function loadBankBuffer400(){
	exp_BankBuffer400JSON = new L.geoJson(exp_BankBuffer400,{
		onEachFeature: pop_BankBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BankBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BankBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_BankBuffer400JSON.addTo(map);
}

var exp_busbedokJSON;
function loadBusPoint(){
	exp_busbedokJSON = new L.geoJson(exp_busbedok,{
		onEachFeature: pop_busbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_busbedokJSON);
	
	exp_busbedokJSON.addTo(map);
}

var exp_BusBuffer100JSON;
function loadBusBuffer100(){
	exp_BusBuffer100JSON = new L.geoJson(exp_BusBuffer100,{
		onEachFeature: pop_BusBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BusBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BusBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_BusBuffer100JSON.addTo(map);
}

var exp_BusBuffer200JSON;
function loadBusBuffer200(){
	exp_BusBuffer200JSON = new L.geoJson(exp_BusBuffer200,{
		onEachFeature: pop_BusBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BusBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BusBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	
	exp_BusBuffer200JSON.addTo(map);
}

var exp_BusBuffer300JSON;
function loadBusBuffer300(){
	exp_BusBuffer300JSON = new L.geoJson(exp_BusBuffer300,{
		onEachFeature: pop_BusBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BusBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BusBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_BusBuffer300JSON.addTo(map);
}

var exp_BusBuffer400JSON;
function loadBusBuffer400(){
	exp_BusBuffer400JSON = new L.geoJson(exp_BusBuffer400,{
		onEachFeature: pop_BusBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_BusBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_BusBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_BusBuffer400JSON.addTo(map);
}

var exp_childcarebedokJSON;
function loadChildPoint(){
	exp_childcarebedokJSON = new L.geoJson(exp_childcarebedok,{
		onEachFeature: pop_childcarebedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_childcarebedokJSON);

	exp_childcarebedokJSON.addTo(map);
}

var exp_ChildBuffer100JSON;
function loadChildBuffer100(){
	exp_ChildBuffer100JSON = new L.geoJson(exp_ChildBuffer100,{
		onEachFeature: pop_ChildBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ChildBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ChildBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ChildBuffer100JSON.addTo(map);
}

var exp_ChildBuffer200JSON;
function loadChildBuffer200(){
	exp_ChildBuffer200JSON = new L.geoJson(exp_ChildBuffer200,{
		onEachFeature: pop_ChildBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ChildBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ChildBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	
	exp_ChildBuffer200JSON.addTo(map);
}

var exp_ChildBuffer300JSON;
function loadChildBuffer300(){
	exp_ChildBuffer300JSON = new L.geoJson(exp_ChildBuffer300,{
		onEachFeature: pop_ChildBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ChildBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ChildBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ChildBuffer300JSON.addTo(map);
}

var exp_ChildBuffer400JSON;
function loadChildBuffer400(){
	exp_ChildBuffer400JSON = new L.geoJson(exp_ChildBuffer400,{
		onEachFeature: pop_ChildBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ChildBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ChildBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ChildBuffer400JSON.addTo(map);
}

var exp_communitycentresbedokJSON;
function loadCCPoint(){
	exp_communitycentresbedokJSON = new L.geoJson(exp_communitycentresbedok,{
		onEachFeature: pop_communitycentresbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_communitycentresbedokJSON);
	exp_communitycentresbedokJSON.addTo(map);
}

var exp_CCBuffer100JSON;
function loadCCBuffer100(){
	exp_CCBuffer100JSON = new L.geoJson(exp_CCBuffer100,{
		onEachFeature: pop_CCBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_CCBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_CCBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_CCBuffer100JSON.addTo(map);
}

var exp_CCBuffer200JSON;
function loadCCBuffer200(){
	exp_CCBuffer200JSON = new L.geoJson(exp_CCBuffer200,{
		onEachFeature: pop_CCBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_CCBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_CCBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_CCBuffer200JSON.addTo(map);
}

var exp_CCBuffer300JSON;
function loadCCBuffer300(){
	exp_CCBuffer300JSON = new L.geoJson(exp_CCBuffer300,{
		onEachFeature: pop_CCBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_CCBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_CCBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_CCBuffer300JSON.addTo(map);
}

var exp_CCBuffer400JSON;
function loadCCBuffer400(){
	exp_CCBuffer400JSON = new L.geoJson(exp_CCBuffer400,{
		onEachFeature: pop_CCBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_CCBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_CCBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_CCBuffer400JSON.addTo(map);
}

var exp_conveniencestorebedokJSON;
function loadConStorePoint(){
	exp_conveniencestorebedokJSON = new L.geoJson(exp_conveniencestorebedok,{
		onEachFeature: pop_conveniencestorebedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_conveniencestorebedokJSON);
	exp_conveniencestorebedokJSON.addTo(map);
}

var exp_ConStoreBuffer100JSON;
function loadConStoreBuffer100(){
	exp_ConStoreBuffer100JSON = new L.geoJson(exp_ConStoreBuffer100,{
		onEachFeature: pop_ConStoreBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ConStoreBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ConStoreBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ConStoreBuffer100JSON.addTo(map);
}

var exp_ConStoreBuffer200JSON;
function loadConStoreBuffer200(){
	exp_ConStoreBuffer200JSON = new L.geoJson(exp_ConStoreBuffer200,{
		onEachFeature: pop_ConStoreBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ConStoreBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ConStoreBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ConStoreBuffer200JSON.addTo(map);
}

var exp_ConStoreBuffer300JSON;
function loadConStoreBuffer300(){
	exp_ConStoreBuffer300JSON = new L.geoJson(exp_ConStoreBuffer300,{
		onEachFeature: pop_ConStoreBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ConStoreBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ConStoreBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ConStoreBuffer300JSON.addTo(map);
}

var exp_ConStoreBuffer400JSON;
function loadConStoreBuffer400(){
	exp_ConStoreBuffer400JSON = new L.geoJson(exp_ConStoreBuffer400,{
		onEachFeature: pop_ConStoreBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ConStoreBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ConStoreBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ConStoreBuffer400JSON.addTo(map);
}

var exp_eldercarebedokJSON;
function loadElderPoint(){
	exp_eldercarebedokJSON = new L.geoJson(exp_eldercarebedok,{
		onEachFeature: pop_eldercarebedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_eldercarebedokJSON);
	exp_eldercarebedokJSON.addTo(map);
}

var exp_ElderlyBuffer100JSON;
function loadElderBuffer100(){
	exp_ElderlyBuffer100JSON = new L.geoJson(exp_ElderlyBuffer100,{
		onEachFeature: pop_ElderlyBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ElderlyBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ElderlyBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ElderlyBuffer100JSON.addTo(map);
}

var exp_ElderlyBuffer200JSON;
function loadElderBuffer200(){
	exp_ElderlyBuffer200JSON = new L.geoJson(exp_ElderlyBuffer200,{
		onEachFeature: pop_ElderlyBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ElderlyBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ElderlyBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ElderlyBuffer200JSON.addTo(map);
}

var exp_ElderlyBuffer300JSON;
function loadElderBuffer300(){
	exp_ElderlyBuffer300JSON = new L.geoJson(exp_ElderlyBuffer300,{
		onEachFeature: pop_ElderlyBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ElderlyBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ElderlyBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ElderlyBuffer300JSON.addTo(map);
}

var exp_ElderlyBuffer400JSON;
function loadElderBuffer400(){
	exp_ElderlyBuffer400JSON = new L.geoJson(exp_ElderlyBuffer400,{
		onEachFeature: pop_ElderlyBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ElderlyBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ElderlyBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ElderlyBuffer400JSON.addTo(map);
}

var exp_hawkerbedokJSON;
function loadHawkerPoint(){
	exp_hawkerbedokJSON = new L.geoJson(exp_hawkerbedok,{
		onEachFeature: pop_hawkerbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);

	feature_group.addLayer(exp_hawkerbedokJSON);
	exp_hawkerbedokJSON.addTo(map);
}

var exp_HawkerBuffer100JSON;
function loadHawkerBuffer100(){
	exp_HawkerBuffer100JSON = new L.geoJson(exp_HawkerBuffer100,{
		onEachFeature: pop_HawkerBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HawkerBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HawkerBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_HawkerBuffer100JSON.addTo(map);
}

var exp_HawkerBuffer200JSON;
function loadHawkerBuffer200(){
	exp_HawkerBuffer200JSON = new L.geoJson(exp_HawkerBuffer200,{
		onEachFeature: pop_HawkerBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HawkerBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HawkerBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_HawkerBuffer200JSON.addTo(map);
}

var exp_HawkerBuffer300JSON;
function loadHawkerBuffer300(){
	exp_HawkerBuffer300JSON = new L.geoJson(exp_HawkerBuffer300,{
		onEachFeature: pop_HawkerBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HawkerBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HawkerBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_HawkerBuffer300JSON.addTo(map);
}

var exp_HawkerBuffer400JSON;
function loadHawkerBuffer400(){
	exp_HawkerBuffer400JSON = new L.geoJson(exp_HawkerBuffer400,{
		onEachFeature: pop_HawkerBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HawkerBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HawkerBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_HawkerBuffer400JSON.addTo(map);
}

var exp_hospitalsbedokJSON;
function loadHospitalPoint(){
	exp_hospitalsbedokJSON = new L.geoJson(exp_hospitalsbedok,{
		onEachFeature: pop_hospitalsbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_hospitalsbedokJSON);
	exp_hospitalsbedokJSON.addTo(map);
}

var exp_HospitalBuffer100JSON;
function loadHospitalBuffer100(){
	exp_HospitalBuffer100JSON = new L.geoJson(exp_HospitalBuffer100,{
		onEachFeature: pop_HospitalBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HospitalBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HospitalBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_HospitalBuffer100JSON.addTo(map);
}

var exp_HospitalBuffer200JSON;
function loadHospitalBuffer200(){
	exp_HospitalBuffer200JSON = new L.geoJson(exp_HospitalBuffer200,{
		onEachFeature: pop_HospitalBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HospitalBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HospitalBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_HospitalBuffer200JSON.addTo(map);
}

var exp_HospitalBuffer300JSON;
function loadHospitalBuffer300(){
	exp_HospitalBuffer300JSON = new L.geoJson(exp_HospitalBuffer300,{
		onEachFeature: pop_HospitalBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HospitalBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HospitalBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_HospitalBuffer300JSON.addTo(map);
}

var exp_HospitalBuffer400JSON;
function loadHospitalBuffer400(){
	exp_HospitalBuffer400JSON = new L.geoJson(exp_HospitalBuffer400,{
		onEachFeature: pop_HospitalBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_HospitalBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_HospitalBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_HospitalBuffer400JSON.addTo(map);
}

var exp_JCbedokJSON;
function loadJCPoint(){
	exp_JCbedokJSON = new L.geoJson(exp_JCbedok,{
		onEachFeature: pop_JCbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_JCbedokJSON);
	exp_JCbedokJSON.addTo(map);
}

var exp_JCBuffer100JSON;
function loadJCBuffer100(){
	exp_JCBuffer100JSON = new L.geoJson(exp_JCBuffer100,{
		onEachFeature: pop_JCBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_JCBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_JCBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_JCBuffer100JSON.addTo(map);
}

var exp_JCBuffer200JSON;
function loadJCBuffer200(){
	exp_JCBuffer200JSON = new L.geoJson(exp_JCBuffer200,{
		onEachFeature: pop_JCBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_JCBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_JCBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_JCBuffer200JSON.addTo(map);
}

var exp_JCBuffer300JSON;
function loadJCBuffer300(){
	exp_JCBuffer300JSON = new L.geoJson(exp_JCBuffer300,{
		onEachFeature: pop_JCBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_JCBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_JCBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_JCBuffer300JSON.addTo(map);
}

var exp_JCBuffer400JSON;
function loadJCBuffer400(){
	exp_JCBuffer400JSON = new L.geoJson(exp_JCBuffer400,{
		onEachFeature: pop_JCBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_JCBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_JCBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_JCBuffer400JSON.addTo(map);
}

var exp_librariesbedokJSON;
function loadLibPoint(){
	exp_librariesbedokJSON = new L.geoJson(exp_librariesbedok,{
		onEachFeature: pop_librariesbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_librariesbedokJSON);
	exp_librariesbedokJSON.addTo(map);
}

var exp_LibBuffer100JSON;
function loadLibBuffer100(){
	exp_LibBuffer100JSON = new L.geoJson(exp_LibBuffer100,{
		onEachFeature: pop_LibBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_LibBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_LibBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_LibBuffer100JSON.addTo(map);
}

var exp_LibBuffer200JSON;
function loadLibBuffer200(){
	exp_LibBuffer200JSON = new L.geoJson(exp_LibBuffer200,{
		onEachFeature: pop_LibBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_LibBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_LibBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_LibBuffer200JSON.addTo(map);
}

var exp_LibBuffer300JSON;
function loadLibBuffer300(){
	exp_LibBuffer300JSON = new L.geoJson(exp_LibBuffer300,{
		onEachFeature: pop_LibBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_LibBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_LibBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_LibBuffer300JSON.addTo(map);
}

var exp_LibBuffer400JSON;
function loadLibBuffer400(){
	exp_LibBuffer400JSON = new L.geoJson(exp_LibBuffer400,{
		onEachFeature: pop_LibBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_LibBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_LibBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_LibBuffer400JSON.addTo(map);
}

var exp_clinicsbedokJSON;
function loadMohPoint(){
	exp_clinicsbedokJSON = new L.geoJson(exp_clinicsbedok,{
		onEachFeature: pop_clinicsbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_clinicsbedokJSON);
	exp_clinicsbedokJSON.addTo(map);
}

var exp_MohBuffer100JSON;
function loadMohBuffer100(){
	exp_MohBuffer100JSON = new L.geoJson(exp_MohBuffer100,{
		onEachFeature: pop_MohBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MohBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MohBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_MohBuffer100JSON.addTo(map);
}

var exp_MohBuffer200JSON;
function loadMohBuffer200(){
	exp_MohBuffer200JSON = new L.geoJson(exp_MohBuffer200,{
		onEachFeature: pop_MohBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MohBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MohBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_MohBuffer200JSON.addTo(map);
}

var exp_MohBuffer300JSON;
function loadMohBuffer300(){
	exp_MohBuffer300JSON = new L.geoJson(exp_MohBuffer300,{
		onEachFeature: pop_MohBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MohBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MohBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_MohBuffer300JSON.addTo(map);
}

var exp_MohBuffer400JSON;
function loadMohBuffer400(){
	exp_MohBuffer400JSON = new L.geoJson(exp_MohBuffer400,{
		onEachFeature: pop_MohBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MohBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MohBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_MohBuffer400JSON.addTo(map);
}

var exp_mrtbedokJSON;
function loadMrtPoint(){
	exp_mrtbedokJSON = new L.geoJson(exp_mrtbedok,{
		onEachFeature: pop_mrtbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_mrtbedokJSON);
	exp_mrtbedokJSON.addTo(map);
}

var exp_MrtBuffer100JSON;
function loadMrtBuffer100(){
	exp_MrtBuffer100JSON = new L.geoJson(exp_MrtBuffer100,{
		onEachFeature: pop_MrtBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MrtBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MrtBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_MrtBuffer100JSON.addTo(map);
}

var exp_MrtBuffer200JSON;
function loadMrtBuffer200(){
	exp_MrtBuffer200JSON = new L.geoJson(exp_MrtBuffer200,{
		onEachFeature: pop_MrtBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MrtBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MrtBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_MrtBuffer200JSON.addTo(map);
}

var exp_MrtBuffer300JSON;
function loadMrtBuffer300(){
	exp_MrtBuffer300JSON = new L.geoJson(exp_MrtBuffer300,{
		onEachFeature: pop_MrtBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MrtBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MrtBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_MrtBuffer300JSON.addTo(map);
}

var exp_MrtBuffer400JSON;
function loadMrtBuffer400(){
	exp_MrtBuffer400JSON = new L.geoJson(exp_MrtBuffer400,{
		onEachFeature: pop_MrtBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_MrtBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_MrtBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_MrtBuffer400JSON.addTo(map);
}

var exp_parksbedokJSON;
function loadParkPoint(){
	exp_parksbedokJSON = new L.geoJson(exp_parksbedok,{
		onEachFeature: pop_parksbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_parksbedokJSON);
	exp_parksbedokJSON.addTo(map);
}

var exp_ParkBuffer100JSON;
function loadParkBuffer100(){
	exp_ParkBuffer100JSON = new L.geoJson(exp_ParkBuffer100,{
		onEachFeature: pop_ParkBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ParkBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ParkBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ParkBuffer100JSON.addTo(map);
}

var exp_ParkBuffer200JSON;
function loadParkBuffer200(){
	exp_ParkBuffer200JSON = new L.geoJson(exp_ParkBuffer200,{
		onEachFeature: pop_ParkBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ParkBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ParkBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ParkBuffer200JSON.addTo(map);
}

var exp_ParkBuffer300JSON;
function loadParkBuffer300(){
	exp_ParkBuffer300JSON = new L.geoJson(exp_ParkBuffer300,{
		onEachFeature: pop_ParkBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ParkBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ParkBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ParkBuffer300JSON.addTo(map);
}

var exp_ParkBuffer400JSON;
function loadParkBuffer400(){
	exp_ParkBuffer400JSON = new L.geoJson(exp_ParkBuffer400,{
		onEachFeature: pop_ParkBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ParkBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ParkBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ParkBuffer400JSON.addTo(map);
}

var exp_petrolstationsbedokJSON;
function loadPetrolPoint(){
	exp_petrolstationsbedokJSON = new L.geoJson(exp_petrolstationsbedok,{
		onEachFeature: pop_petrolstationsbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);

	feature_group.addLayer(exp_petrolstationsbedokJSON);
	exp_petrolstationsbedokJSON.addTo(map);
}

var exp_PetrolBuffer100JSON;
function loadPetrolBuffer100(){
	exp_PetrolBuffer100JSON = new L.geoJson(exp_PetrolBuffer100,{
		onEachFeature: pop_PetrolBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PetrolBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PetrolBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PetrolBuffer100JSON.addTo(map);
}

var exp_PetrolBuffer200JSON;
function loadPetrolBuffer200(){
	exp_PetrolBuffer200JSON = new L.geoJson(exp_PetrolBuffer200,{
		onEachFeature: pop_PetrolBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PetrolBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PetrolBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PetrolBuffer200JSON.addTo(map);
}

var exp_PetrolBuffer300JSON;
function loadPetrolBuffer300(){
	exp_PetrolBuffer300JSON = new L.geoJson(exp_PetrolBuffer300,{
		onEachFeature: pop_PetrolBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PetrolBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PetrolBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PetrolBuffer300JSON.addTo(map);
}

var exp_PetrolBuffer400JSON;
function loadPetrolBuffer400(){
	exp_PetrolBuffer400JSON = new L.geoJson(exp_PetrolBuffer400,{
		onEachFeature: pop_PetrolBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PetrolBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PetrolBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PetrolBuffer400JSON.addTo(map);
}

var exp_placeofworshipbedokJSON;
function loadWorshipPoint(){
	exp_placeofworshipbedokJSON = new L.geoJson(exp_placeofworshipbedok,{
		onEachFeature: pop_placeofworshipbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_placeofworshipbedokJSON);
	exp_placeofworshipbedokJSON.addTo(map);
}

var exp_WorshipBuffer100JSON;
function loadWorshipBuffer100(){
	exp_WorshipBuffer100JSON = new L.geoJson(exp_WorshipBuffer100,{
		onEachFeature: pop_WorshipBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_WorshipBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_WorshipBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_WorshipBuffer100JSON.addTo(map);
}

var exp_WorshipBuffer200JSON;
function loadWorshipBuffer200(){
	exp_WorshipBuffer200JSON = new L.geoJson(exp_WorshipBuffer200,{
		onEachFeature: pop_WorshipBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_WorshipBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_WorshipBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_WorshipBuffer200JSON.addTo(map);
}

var exp_WorshipBuffer300JSON;
function loadWorshipBuffer300(){
	exp_WorshipBuffer300JSON = new L.geoJson(exp_WorshipBuffer300,{
		onEachFeature: pop_WorshipBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_WorshipBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_WorshipBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_WorshipBuffer300JSON.addTo(map);
}

var exp_WorshipBuffer400JSON;
function loadWorshipBuffer400(){
	exp_WorshipBuffer400JSON = new L.geoJson(exp_WorshipBuffer400,{
		onEachFeature: pop_WorshipBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_WorshipBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_WorshipBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_WorshipBuffer400JSON.addTo(map);
}

var exp_policebedokJSON;
function loadPolicePoint(){
	exp_policebedokJSON = new L.geoJson(exp_policebedok,{
		onEachFeature: pop_policebedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_policebedokJSON);
	exp_policebedokJSON.addTo(map);
}

var exp_PoliceBuffer100JSON;
function loadPoliceBuffer100(){
	exp_PoliceBuffer100JSON = new L.geoJson(exp_PoliceBuffer100,{
		onEachFeature: pop_PoliceBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PoliceBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PoliceBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PoliceBuffer100JSON.addTo(map);
}

var exp_PoliceBuffer200JSON;
function loadPoliceBuffer200(){
	exp_PoliceBuffer200JSON = new L.geoJson(exp_PoliceBuffer200,{
		onEachFeature: pop_PoliceBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PoliceBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PoliceBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PoliceBuffer200JSON.addTo(map);
}

var exp_PoliceBuffer300JSON;
function loadPoliceBuffer300(){
	exp_PoliceBuffer300JSON = new L.geoJson(exp_PoliceBuffer300,{
		onEachFeature: pop_PoliceBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PoliceBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PoliceBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PoliceBuffer300JSON.addTo(map);
}

var exp_PoliceBuffer400JSON;
function loadPoliceBuffer400(){
	exp_PoliceBuffer400JSON = new L.geoJson(exp_PoliceBuffer400,{
		onEachFeature: pop_PoliceBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PoliceBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PoliceBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PoliceBuffer400JSON.addTo(map);
}

var exp_polyclinicabedokJSON;
function loadPolyclinicPoint(){
	exp_polyclinicabedokJSON = new L.geoJson(exp_polyclinicabedok,{
		onEachFeature: pop_polyclinicabedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_polyclinicabedokJSON);
	exp_polyclinicabedokJSON.addTo(map);
}

var exp_PolyclinicBuffer100JSON;
function loadPolyclinicBuffer100(){
	exp_PolyclinicBuffer100JSON = new L.geoJson(exp_PolyclinicBuffer100,{
		onEachFeature: pop_PolyclinicBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PolyclinicBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PolyclinicBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PolyclinicBuffer100JSON.addTo(map);
}

var exp_PolyclinicBuffer200JSON;
function loadPolyclinicBuffer200(){
	exp_PolyclinicBuffer200JSON = new L.geoJson(exp_PolyclinicBuffer200,{
		onEachFeature: pop_PolyclinicBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PolyclinicBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PolyclinicBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PolyclinicBuffer200JSON.addTo(map);
}

var exp_PolyclinicBuffer300JSON;
function loadPolyclinicBuffer300(){
	exp_PolyclinicBuffer300JSON = new L.geoJson(exp_PolyclinicBuffer300,{
		onEachFeature: pop_PolyclinicBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PolyclinicBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PolyclinicBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PolyclinicBuffer300JSON.addTo(map);
}

var exp_PolyclinicBuffer400JSON;
function loadPolyclinicBuffer400(){
	exp_PolyclinicBuffer400JSON = new L.geoJson(exp_PolyclinicBuffer400,{
		onEachFeature: pop_PolyclinicBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PolyclinicBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PolyclinicBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PolyclinicBuffer400JSON.addTo(map);
}

var exp_prischoolbedokJSON;
function loadPriPoint(){
	exp_prischoolbedokJSON = new L.geoJson(exp_prischoolbedok,{
		onEachFeature: pop_prischoolbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_prischoolbedokJSON);
	exp_prischoolbedokJSON.addTo(map);
}

var exp_PriBuffer100JSON;
function loadPriBuffer100(){
	exp_PriBuffer100JSON = new L.geoJson(exp_PriBuffer100,{
		onEachFeature: pop_PriBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PriBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PriBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PriBuffer100JSON.addTo(map);
}

var exp_PriBuffer200JSON;
function loadPriBuffer200(){
	exp_PriBuffer200JSON = new L.geoJson(exp_PriBuffer200,{
		onEachFeature: pop_PriBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PriBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PriBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_PriBuffer200JSON.addTo(map);
}

var exp_PriBuffer300JSON;
function loadPriBuffer300(){
	exp_PriBuffer300JSON = new L.geoJson(exp_PriBuffer300,{
		onEachFeature: pop_PriBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PriBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PriBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PriBuffer300JSON.addTo(map);
}

var exp_PriBuffer400JSON;
function loadPriBuffer400(){
	exp_PriBuffer400JSON = new L.geoJson(exp_PriBuffer400,{
		onEachFeature: pop_PriBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_PriBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_PriBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_PriBuffer400JSON.addTo(map);
}

var exp_secschoolbedokJSON;
function loadSecPoint(){
	exp_secschoolbedokJSON = new L.geoJson(exp_secschoolbedok,{
		onEachFeature: pop_secschoolbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_secschoolbedokJSON);
	exp_secschoolbedokJSON.addTo(map);
}

var exp_SecBuffer100JSON;
function loadSecBuffer100(){
	exp_SecBuffer100JSON = new L.geoJson(exp_SecBuffer100,{
		onEachFeature: pop_SecBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SecBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SecBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SecBuffer100JSON.addTo(map);
}

var exp_SecBuffer200JSON;
function loadSecBuffer200(){
	exp_SecBuffer200JSON = new L.geoJson(exp_SecBuffer200,{
		onEachFeature: pop_SecBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SecBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SecBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SecBuffer200JSON.addTo(map);
}

var exp_SecBuffer300JSON;
function loadSecBuffer300(){
	exp_SecBuffer300JSON = new L.geoJson(exp_SecBuffer300,{
		onEachFeature: pop_SecBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SecBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SecBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SecBuffer300JSON.addTo(map);
}

var exp_SecBuffer400JSON;
function loadSecBuffer400(){
	exp_SecBuffer400JSON = new L.geoJson(exp_SecBuffer400,{
		onEachFeature: pop_SecBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SecBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SecBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SecBuffer400JSON.addTo(map);
}

var exp_shoppingbedokJSON;
function loadShoppingPoint(){
	exp_shoppingbedokJSON = new L.geoJson(exp_shoppingbedok,{
		onEachFeature: pop_shoppingbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_shoppingbedokJSON);
	exp_shoppingbedokJSON.addTo(map);
}

var exp_ShoppingBuffer100JSON;
function loadShoppingBuffer100(){
	exp_ShoppingBuffer100JSON = new L.geoJson(exp_ShoppingBuffer100,{
		onEachFeature: pop_ShoppingBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ShoppingBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ShoppingBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ShoppingBuffer100JSON.addTo(map);
}

var exp_ShoppingBuffer200JSON;
function loadShoppingBuffer200(){
	exp_ShoppingBuffer200JSON = new L.geoJson(exp_ShoppingBuffer200,{
		onEachFeature: pop_ShoppingBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ShoppingBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ShoppingBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_ShoppingBuffer200JSON.addTo(map);
}

var exp_ShoppingBuffer300JSON;
function loadShoppingBuffer300(){
	exp_ShoppingBuffer300JSON = new L.geoJson(exp_ShoppingBuffer300,{
		onEachFeature: pop_ShoppingBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ShoppingBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ShoppingBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ShoppingBuffer300JSON.addTo(map);
}

var exp_ShoppingBuffer400JSON;
function loadShoppingBuffer400(){
	exp_ShoppingBuffer400JSON = new L.geoJson(exp_ShoppingBuffer400,{
		onEachFeature: pop_ShoppingBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_ShoppingBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_ShoppingBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_ShoppingBuffer400JSON.addTo(map);
}

var exp_sportsbedokJSON;
function loadSportsPoint(){
	 exp_sportsbedokJSON = new L.geoJson(exp_sportsbedok,{
		onEachFeature: pop_sportsbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_sportsbedokJSON);
	exp_sportsbedokJSON.addTo(map);
}

var exp_SportsBuffer100JSON;
function loadSportsBuffer100(){
	exp_SportsBuffer100JSON = new L.geoJson(exp_SportsBuffer100,{
		onEachFeature: pop_SportsBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SportsBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SportsBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SportsBuffer100JSON.addTo(map);
}

var exp_SportsBuffer200JSON;
function loadSportsBuffer200(){
	exp_SportsBuffer200JSON = new L.geoJson(exp_SportsBuffer200,{
		onEachFeature: pop_SportsBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SportsBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SportsBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SportsBuffer200JSON.addTo(map);
}

var exp_SportsBuffer300JSON;
function loadSportsBuffer300(){
	exp_SportsBuffer300JSON = new L.geoJson(exp_SportsBuffer300,{
		onEachFeature: pop_SportsBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SportsBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SportsBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SportsBuffer300JSON.addTo(map);
}

var exp_SportsBuffer400JSON;
function loadSportsBuffer400(){
	exp_SportsBuffer400JSON = new L.geoJson(exp_SportsBuffer400,{
		onEachFeature: pop_SportsBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SportsBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SportsBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SportsBuffer400JSON.addTo(map);
}

var exp_supermarketbedokJSON;
function loadSupermarketPoint(){
	 exp_supermarketbedokJSON = new L.geoJson(exp_supermarketbedok,{
		onEachFeature: pop_supermarketbedok,
		pointToLayer: function (feature, latlng) {
			return L.marker(latlng, {icon: L.icon({
				iconUrl: feature.properties.icon_exp,
				iconSize:     [24, 24], // size of the icon change this to scale your icon (first coordinate is x, second y from the upper left corner of the icon)
				iconAnchor:   [12, 12], // point of the icon which will correspond to marker's location (first coordinate is x, second y from the upper left corner of the icon)
				popupAnchor:  [0, -14] // point from which the popup should open relative to the iconAnchor (first coordinate is x, second y from the upper left corner of the icon)
				})
			})
		}}
	);
	
	feature_group.addLayer(exp_supermarketbedokJSON);
	exp_supermarketbedokJSON.addTo(map);
}

var exp_SupermktBuffer100JSON;
function loadSupermarketBuffer100(){
	exp_SupermktBuffer100JSON = new L.geoJson(exp_SupermktBuffer100,{
		onEachFeature: pop_SupermktBuffer100,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SupermktBuffer100JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SupermktBuffer100JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SupermktBuffer100JSON.addTo(map);
}

var exp_SupermktBuffer200JSON;
function loadSupermarketBuffer200(){
	exp_SupermktBuffer200JSON = new L.geoJson(exp_SupermktBuffer200,{
		onEachFeature: pop_SupermktBuffer200,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SupermktBuffer200JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SupermktBuffer200JSON;
	for (index = 0; index < layerOrder.length; index++) {
		map.removeLayer(layerOrder[index]);map.addLayer(layerOrder[index]);
	}
	exp_SupermktBuffer200JSON.addTo(map);
}

var exp_SupermktBuffer300JSON;
function loadSupermarketBuffer300(){
	exp_SupermktBuffer300JSON = new L.geoJson(exp_SupermktBuffer300,{
		onEachFeature: pop_SupermktBuffer300,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SupermktBuffer300JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SupermktBuffer300JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SupermktBuffer300JSON.addTo(map);
}

var exp_SupermktBuffer400JSON;
function loadSupermarketBuffer400(){
	exp_SupermktBuffer400JSON = new L.geoJson(exp_SupermktBuffer400,{
		onEachFeature: pop_SupermktBuffer400,
		style: function (feature) {
			return {color: feature.properties.border_color_qgis2leaf,
					fillColor: feature.properties.color_qgis2leaf,
					weight: feature.properties.radius_qgis2leaf,
					dashArray: feature.properties.border_style_qgis2leaf,
					opacity: feature.properties.transp_qgis2leaf,
					fillOpacity: feature.properties.transp_fill_qgis2leaf};
			}
		});
	feature_group.addLayer(exp_SupermktBuffer400JSON);
	var layerOrder=new Array();
	layerOrder[layerOrder.length] = exp_SupermktBuffer400JSON;
	for (index = 0; index < layerOrder.length; index++) {
		feature_group.removeLayer(layerOrder[index]);feature_group.addLayer(layerOrder[index]);
	}
	exp_SupermktBuffer400JSON.addTo(map);
}

