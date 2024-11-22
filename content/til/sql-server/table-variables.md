---
date: 2023-07-04
title: "Use a table variable to hold a list of values"
tags: ["sql-server"]
---


You can store a "list" of values in sql with a `table` variable.

```sql
DECLARE @listOfIDs TABLE(id INT);
INSERT INTO @listOfIDs
SELECT id
FROM Transactions
WHERE USER='bob';
```
