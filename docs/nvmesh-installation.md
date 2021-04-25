---
title: NVMesh installation
---

NVMesh components can be installed with RPM packages. The related repository can be accessed by sending a request email
to support@excelero.com.

## Storage management module

### Prerequisites

 - **Firewall**

    The management module requires by default ports **4000** and **4001** to communicate with other components and to expose the
   web interface.
   
 - **Softwares**

    The management module uses **MongoDB 3.X** and **NodeJS 4.X**. Make sure that MongoDB service is running before 
   trying to start this module.
   
### Installation

This module can then be installed with a package manager that can handle RPM packages from the repository provided by
the support.

## Storage client module

### Prerequisites

This module requires OFED. Supported versions can be found in the "NVMesh Compatibility Matrix" (supposedly provided by
the support)

### Installation 

This module can then be installed with a package manager that can handle RPM packages from the repository provided by
the support. This module won't run until basic configuration is done, check 
[next section](http://localhost:3000/docs/nvmesh-configuration#basic-configuration-1) for further informations.

## Storage target module

### Prerequisites

This module requires OFED. Supported versions can be found in the "NVMesh Compatibility Matrix" (supposedly provided by
the support)

### Installation

This module can then be installed with a package manager that can handle RPM packages from the repository provided by
the support. This module won't run until basic configuration is done, check
[next section](http://localhost:3000/docs/nvmesh-configuration#basic-configuration-2) for further informations.