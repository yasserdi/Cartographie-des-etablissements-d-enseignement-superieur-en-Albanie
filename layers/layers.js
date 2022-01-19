var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ALB_adm1_1 = new ol.format.GeoJSON();
var features_ALB_adm1_1 = format_ALB_adm1_1.readFeatures(json_ALB_adm1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALB_adm1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALB_adm1_1.addFeatures(features_ALB_adm1_1);
var lyr_ALB_adm1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ALB_adm1_1, 
                style: style_ALB_adm1_1,
                interactive: false,
                title: '<img src="styles/legend/ALB_adm1_1.png" /> ALB_adm1'
            });
var format_Secteur_2 = new ol.format.GeoJSON();
var features_Secteur_2 = format_Secteur_2.readFeatures(json_Secteur_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteur_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteur_2.addFeatures(features_Secteur_2);
var lyr_Secteur_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Secteur_2, 
                style: style_Secteur_2,
                interactive: true,
    title: 'Secteur<br />\
    <img src="styles/legend/Secteur_2_0.png" /> Privé<br />\
    <img src="styles/legend/Secteur_2_1.png" /> Public<br />'
        });
var format_Effectif_Etablissement_3 = new ol.format.GeoJSON();
var features_Effectif_Etablissement_3 = format_Effectif_Etablissement_3.readFeatures(json_Effectif_Etablissement_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Effectif_Etablissement_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Effectif_Etablissement_3.addFeatures(features_Effectif_Etablissement_3);
var lyr_Effectif_Etablissement_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Effectif_Etablissement_3, 
                style: style_Effectif_Etablissement_3,
                interactive: true,
    title: 'Effectif_Etablissement<br />\
    <img src="styles/legend/Effectif_Etablissement_3_0.png" /> 14 - 1800<br />\
    <img src="styles/legend/Effectif_Etablissement_3_1.png" /> 1800 - 4425<br />\
    <img src="styles/legend/Effectif_Etablissement_3_2.png" /> 4425 - 8490<br />\
    <img src="styles/legend/Effectif_Etablissement_3_3.png" /> 8490 - 19495<br />\
    <img src="styles/legend/Effectif_Etablissement_3_4.png" /> 19495 - 26309<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ALB_adm1_1.setVisible(true);lyr_Secteur_2.setVisible(true);lyr_Effectif_Etablissement_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ALB_adm1_1,lyr_Secteur_2,lyr_Effectif_Etablissement_3];
lyr_ALB_adm1_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'HASC_1': 'HASC_1', 'CCN_1': 'CCN_1', 'CCA_1': 'CCA_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Secteur_2.set('fieldAliases', {'Nom d\'origine de l\'Etablissement': 'Nom d\'origine de l\'Etablissement', 'Nom de l\'Etablissement en fr': 'Nom de l\'Etablissement en fr', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', 'Secteur': 'Secteur', 'Nombre_Etudiant_2020': 'Nombre_Etudiant_2020', 'Nombre_Etudiant_2021': 'Nombre_Etudiant_2021', });
lyr_Effectif_Etablissement_3.set('fieldAliases', {'Nom d\'origine de l\'Etablissement': 'Nom d\'origine de l\'Etablissement', 'Nom de l\'Etablissement en fr': 'Nom de l\'Etablissement en fr', 'Y': 'Y', 'X': 'X', 'Adresse': 'Adresse', 'Secteur': 'Secteur', 'Nombre_Etudiant_2020': 'Nombre_Etudiant_2020', 'Nombre_Etudiant_2021': 'Nombre_Etudiant_2021', });
lyr_ALB_adm1_1.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'Hidden', 'HASC_1': 'Hidden', 'CCN_1': 'Hidden', 'CCA_1': 'Hidden', 'TYPE_1': 'Hidden', 'ENGTYPE_1': 'Hidden', 'NL_NAME_1': 'Hidden', 'VARNAME_1': 'Hidden', });
lyr_Secteur_2.set('fieldImages', {'Nom d\'origine de l\'Etablissement': 'Hidden', 'Nom de l\'Etablissement en fr': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Adresse': 'TextEdit', 'Secteur': 'TextEdit', 'Nombre_Etudiant_2020': 'TextEdit', 'Nombre_Etudiant_2021': 'TextEdit', });
lyr_Effectif_Etablissement_3.set('fieldImages', {'Nom d\'origine de l\'Etablissement': 'Hidden', 'Nom de l\'Etablissement en fr': 'TextEdit', 'Y': 'Hidden', 'X': 'Hidden', 'Adresse': 'TextEdit', 'Secteur': 'TextEdit', 'Nombre_Etudiant_2020': 'TextEdit', 'Nombre_Etudiant_2021': 'TextEdit', });
lyr_ALB_adm1_1.set('fieldLabels', {});
lyr_Secteur_2.set('fieldLabels', {'Nom de l\'Etablissement en fr': 'inline label', 'Adresse': 'inline label', 'Secteur': 'inline label', 'Nombre_Etudiant_2020': 'inline label', 'Nombre_Etudiant_2021': 'inline label', });
lyr_Effectif_Etablissement_3.set('fieldLabels', {'Nom de l\'Etablissement en fr': 'inline label', 'Adresse': 'inline label', 'Secteur': 'inline label', 'Nombre_Etudiant_2020': 'inline label', 'Nombre_Etudiant_2021': 'inline label', });
lyr_Effectif_Etablissement_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});