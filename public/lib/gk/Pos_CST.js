// Shorthand syntax to check if the namespace already exists, if not create an empty Object.
var comGkSoftwareGkrAppEnablementApi = comGkSoftwareGkrAppEnablementApi || {};

/**
 * @class
 * @classdesc App Enablement class for CVM functionalities to fetch/push/clear customer vehicle information
 * @author Vignesh Srinivasan
 * @public
 * @name com.gk_software.cst.discount_tire.client.appenablement.CvmAppApiExtension
 */
comGkSoftwareGkrAppEnablementApi.Pos_CST = function () {
    "use strict";
    this._prefix = "comGkSoftwareGkrAppEnablementApi.Pos_CST/";
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.pushCustomerVehicle = function (sResultFunction, sErrorFunction, oPushCustomerVehicleRequest) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "pushCustomerVehicle", sResultFunction, sErrorFunction, oPushCustomerVehicleRequest);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.fetchCustomerVehicle = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "fetchCustomerVehicle", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.clearCustomerVehicle = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "clearCustomerVehicle", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.fetchAppointmentData = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "fetchAppointmentData", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.fetchAppointmentListData = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "fetchAppointmentListData", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.fetchAppointmentAvailableData = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "fetchAppointmentAvailableData", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.pushAppointmentData = function (sResultFunction, sErrorFunction, oPushAppointmentRequest) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "pushAppointmentData", sResultFunction, sErrorFunction, oPushAppointmentRequest);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.pushProductBrowseCart = function (sResultFunction, sErrorFunction, oPushProductBrowseCartRequest) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "pushProductBrowseCart", sResultFunction, sErrorFunction, oPushProductBrowseCartRequest);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.fetchPOSData = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "fetchPOSData", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.closeBrowser = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "closeBrowser", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.getNonExistingItemsFromRequest = function (sResultFunction, sErrorFunction, oProductBrowseDataRequest) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getNonExistingItemsFromRequest", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.getPinPadSignature = function (sResultFunction, sErrorFunction) {
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "getPinPadSignature", sResultFunction, sErrorFunction);
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.createTokenRequest = function (sAccessToken, sIdToken) {
    console.log("In createTokenRequest");
    return JSON.stringify({
        "access_Token": sAccessToken,
        "id_Token": sIdToken
    });
};

comGkSoftwareGkrAppEnablementApi.Pos_CST.prototype.pushOktaToken = function (sResultFunction, sErrorFunction, oPushOktaTokenRequest) {
    console.log("In pushOktaToken");
    console.log(oPushOktaTokenRequest);
    oAppEnablementConnectorInstance.invokeMethod(this._prefix + "pushOktaToken", sResultFunction, sErrorFunction, oPushOktaTokenRequest);
};