---
title: NVMesh configuration
---

## Storage management module

### Basic configuration

Management module can be configured by modifying the configuration file located at :

    /etc/opt/NVMesh/management.js.conf

:warning: The following lines (top and bottom ones in the files) should not be modified :

    var config = {};
    ...
    module.exports = config;

### Advanced configuration

| Value                      | Description                                                                                                                                   | Format                                                                                   | Default                                |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|----------------------------------------|
| config.useSSL              | Determines whether or not HTTP communication to the management server is encrypted via SSL.                                                   | true or false                                                                            | false                                  |
| config.cert                | Path to the file containing the SSL certificate to be used for HTTP encryption.                                                               | A valid path to the stored certificate                                                   | ‘cert/server.cert’                     |
| config.key                 | Path to the file containing the key file for the certificate to be used for HTTP encryption.                                                  | A valid path to the stored key                                                           | ‘cert/server.key’                      |
| config.port                | The TCP port the management server should listen on. Remember to reconfigure your firewall if modified.                                       | A valid TCP port number                                                                  | 4000                                   |
| config.webSocketServerPort | The TCP port number to be used by management for dynamic updates from clients and targets. Remember to reconfigure your firewall if modified. | A valid TCP port number that is not the same as config.port                              | 4001                                   |
| config.SMTP.host           | The hostname or IP address of the mail server.                                                                                                | A valid hostname or IP address                                                           | ‘localhost’                            |
| config.SMTP.port           | The TCP port to be used on the specified mail server.                                                                                         | A valid TCP port number                                                                  | 25                                     |
| config.SMTP.secure         | Determines where or not SMTP communication is encrypted.                                                                                      | true or false                                                                            | false                                  |
| config.SMTP.authRequired   | Determines whether or not authentication is required for SMTP communication.                                                                  | true or false                                                                            | false                                  |
| config.SMTP.username       | If authRequired is true, utilize this username to authenticate to the SMTP server.                                                            | User account name to be used for SMTP server account authentication                      | ‘’                                     |
| config.SMTP.password       | If authRequired is true, password to be used for SMTP server account authentication.                                                          | Plaintext password to be used for SMTP server account authentication                     | ‘’                                     |
| config.SMTP.useDefault     | Determines whether or not to assume gmail SMTP server behavior                                                                                | true or false                                                                            | true                                   |
| config.mongoConnection     | The URI used to connect to the MongoDB database server(s) containing the management server database.                                          | A list of valid MongoDB servers utilizing hostnames, port numbers and the database name. | “mongodb://localhost:27017/management” |
| config.exceleroEmail       | The email address to send “phone home” statistics to, at Excelero.                                                                            | A valid email address, preferably the default value                                      | ‘support+CustomerName@excelero.com’    |
| config.sendStatsInterval   | The interval of time passing after which the “phone home” statistics should be sent to config.exceleroEmail.                                  | A number value in milliseconds.                                                          | 604800000                              |
| config.RESERVED_BLOCKS     | The number of reserved 4K blocks at the start of a managed NVMe device                                                                        | This value should not be changed unless explicitly authorized by Excelero                | 32                                     |
| config.compatibilityMode   | Determines whether to run with ldlinux and shared libraries (for older Linux distribution compatibility)                                      | true or false                                                                            | false                                  |

## Storage client module

Client module can be configured by modifying the configuration file located at :

    /etc/opt/NVMesh/nvmesh.conf

### Basic configuration

In order to run this module, it is necessary to register the management server by adding the following line in the 
configuration file :

    MANAGEMENT_SERVER=”https://<hostname|ipaddress>:<portnumber>”

The module can then be run using :

    service nvmeshclient start

or

    systemctl start nvmeshclient

depending on the Linux distribution.

### Advanced configuration

| Value              | Description                                                                                                                                                                              | Format                                                                       | Default                          |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------|
| MANAGEMENT_SERVER  | Address/Hostname and port of the management server                                                                                                                                       | https://[server name or IP]:[Port]                                           | "https://nvmesh-management:4000" |
| CONFIGURED_NICS    | Limit the NICs to be used for NVMesh. By default, NVMesh clients and targets will attempt to make use of any RDMA capable NIC. If populated, only the NICs in the list will be utilized. | A semi-colon separated list of NIC identifiers, for example: "ib0;eno1;eth0" | ""                               |
| MAX_SM_QUERY_BURST | For InfiniBand only, the maximum numbers of queries per second to send to the subnet manager.                                                                                            | Integer value                                                                | 32                               |

## Storage target module

Target module can be configured by modifying the configuration file located at :

    /etc/opt/NVMesh/nvmesh.conf

### Basic configuration

In order to run this module, it is necessary to register the management server by adding the following line in the
configuration file :

    MANAGEMENT_SERVER=”https://<hostname|ipaddress>:<portnumber>”

The module can then be run using :

    service nvmeshtarget start

or

    systemctl start nvmeshtarget

depending on the Linux distribution.

### Advanced configuration

| Value              | Description                                                                                                                                                                                             | Format                                                                       | Default                          |
|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------|----------------------------------|
| MANAGEMENT_SERVER  | Address/Hostname and port of the management server                                                                                                                                                      | https://[server name or IP]:[Port]                                           | "https://nvmesh-management:4000" |
| CONFIGURED_NICS    | Limit the NICs to be used for NVMesh. By default, NVMesh clients and targets will attempt to make use of any RDMA capable NIC. If populated, only the NICs in the list will be utilized.                | A semi-colon separated list of NIC identifiers, for example: "ib0;eno1;eth0" | ""                               |
| MAX_SM_QUERY_BURST | For InfiniBand only, the maximum numbers of queries per second to send to the subnet manager.                                                                                                           | Integer value                                                                | 32                               |
| CX4_RDDA_ENABLED   | For Mellanox ConnectX-4 based NICs only, determines whether RDDA will be used on the target to offload CPU. ConnectX-4 NICs require a firmware update to enable RDDA without a performance degradation. | “Yes” or “No”                                                                | "No"                             |