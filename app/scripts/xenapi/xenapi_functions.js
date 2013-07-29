/*
 *
 */


App.FetchInitial = function(hostUrl, hostUser, hostPassword, callback) {

    var client  = new XenAPI(hostUser,hostPassword,hostUrl);
    var data    = {};

    client.init(function(error, result) {
        if(error) {
            return callback(true,error);
        } else {
            client.serverVersion(function(error,result) {
                if(error) {
                    return callback(true,error);
                } else {
                    data.version.minor              = result.minor;
                    data.version.mayor              = result.mayor;
                    data.version.buildNumber        = result.version.build_number;
                    data.version.date               = result.version.date;
                    data.version.networkBackend     = result.version.network_backend;
                    data.version.platformName       = result.version.platform_name;
                    data.version.platformVersion    = result.version.platform_version;
                    data.version.productBrand       = result.version.product_brand;
                    data.version.productVersion     = result.version.product_version;
                    data.version.productVersionText = result.version.product_version_text;
                    data.version.xapi               = result.version.xapi;
                    data.version.xen                = result.version.xen;

                    return callback(null, data);
                }
            });
        }
    });

}