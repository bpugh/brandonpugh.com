---
date: 2025-06-06
title: Install SQL Server from the command line
tags: ['sql-server']
---

I recently had to setup a new windows dev machine with a local instance of SQL Server and it turns out you can run it completely from the command line although it's not very obvious how.

Once you [download the installer](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) it will extract everything to a folder which contains the `SETUP.exe` executable which you can run from the terminal and pass all the options you want instead of clicking through the UI.

If you're like me and just needed a fairly standard installation for local development, then this should do it:

```powershell
.\SETUP.EXE /IACCEPTSQLSERVERLICENSETERMS /ACTION="install" /FEATURES=SQLEngine,FullText /INSTANCENAME="MSSQLSERVER" /SQLSYSADMINACCOUNTS="$env:USERDOMAIN\$env:USERNAME" /SQLSVCACCOUNT="NT Service\MSSQLSERVER" /AGTSVCACCOUNT="NT Service\SQLSERVERAGENT" /SQLSVCINSTANTFILEINIT=True /INDICATEPROGRESS /Q
```

Management studio is no longer included with the main installer but you can use winget: `winget install -e --id Microsoft.SQLServerManagementStudio`

If you need additional features then you need to [look up](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-from-the-command-prompt?view=sql-server-ver17#Feature) the options to set on the `/FEATURES` param, like `RS` for reporting services.

## Details

This is what the above command does:

- `/IACCEPTSQLSERVERLICENSETERMS` - Required to accept the SQL Server license terms.

- `/Q` - Runs setup in **quiet mode**. This is needed otherwise it will just open the regular install UI.

- `/ACTION="install"` - Specify that we want to install vs uninstall or upgrade.

- `/FEATURES=SQLEngine,FullText` - Specify which SQL Server components to install:
  - **SQLEngine**: The core database engine
  - **FullText**: Full-text search

- `/INSTANCENAME="MSSQLSERVER"` - `"MSSQLSERVER"` is the **default instance name**.

- `/SQLSYSADMINACCOUNTS="$env:USERDOMAIN\$env:USERNAME"` - Use powershell environment variables to set the current user as the sql server admin

- `/SQLSVCACCOUNT="NT Service\MSSQLSERVER"` - Set the service account for the SQL Server Database Engine service. `"NT Service\MSSQLSERVER"` is the common default when using the UI.

- `/AGTSVCACCOUNT="NT Service\SQLSERVERAGENT"` - Sets the account for the **SQL Server Agent service** (handles scheduled jobs and alerts)

- `/SQLSVCINSTANTFILEINIT=True` - Enables [**Instant File Initialization**](https://learn.microsoft.com/en-us/sql/relational-databases/databases/database-instant-file-initialization), which seems like a worthwhile performance optimization according to the docs.

- `/INDICATEPROGRESS` - Shows installation progress in the console window, useful for monitoring the installation status

Also, you can apparently install from a [configuration file](https://learn.microsoft.com/en-us/sql/database-engine/install-windows/install-sql-server-using-a-configuration-file?view=sql-server-ver17&source=recommendations) that the installer can generate for you.
