sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("CT.cdstestapp.controller.App", {
			onInit: function () {
				let oModel = this.getView().getModel();

				let filter1= new sap.ui.model.Filter({
					path: "emp_name",
					operator: sap.ui.model.FilterOperator.EQ,
					value1: "JASMITHA"
				});

				oModel.read("/zab_cds_filter",{
					// urlParameters: {
                    //     $expand: "EmpDetails"
                    // },
					filters : [filter1],
					success:function(oData, oResponse){
						console.log(oData);
						console.log(oResponse);
					},
					error:function(oError){
						console.log(oError);
					}
				});
			},

			onPress: function(oEvent){

				let oModel = this.getView().getModel();
				let oUrlParameters = {
					pcarr_id : '1'
				};
				// oModel.callFunction("/zab_tab_funSet", {
				// 	method: "GET",
				// 	urlParameters: oUrlParameters,
					
				// 	success: jQuery.proxy(function (oReceivedData, oResponse) {
				// 		console.log(oReceivedData);
				// 		sap.m.MessageToast.show("SUCCESS");
				// 	}),
				// 	error: jQuery.proxy(function (oDataResponse) {
				// 		sap.m.MessageBox.error(
				// 			oDataResponse, {}
				// 		);
				// 	}, this)
				// });

				oModel.read("/zab_tab_funSet",{
					
					urlParameters: oUrlParameters,
					
					success:function(oData, oResponse){
						console.log(oData);
						console.log(oResponse);
					},
					error:function(oError){
						console.log(oError);
					}
				});
			}
		});
	});
