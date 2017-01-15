---
comments: true
date: 2011-11-30 17:50:00
layout: post
slug: getting-started-with-petapoco-and-postgres
title: Getting started with PetaPoco and Postgres
wordpress_id: 47
categories:
- Tutorial
tags:
- postgres petapoco .net database
---

I'm currently working on a project I've inherited that uses a Postgres sql backend and I was looking for an easy way to make writing our data access layer less time consuming and painful. My first thought was to use a micro-ORM like [Massive](https://github.com/robconery/massive) but while I've heard some really great things about Massive, I felt it might be a tough sell to my team members who aren't too comfortable with Expandos and its dynamic nature (I know, but change in baby steps I suppose). Then I came across [PetaPoco](http://www.toptensoftware.com/petapoco/) and it seemed to fit the bill. Its basically a mico-ORM like Massive with built in support for Postgres except that it also works with POCOs (Plain old CLR Objects) and was pretty easy to get up and running with.

First if you're not already working with Postgres you'll need to install a [provider like Npgsql](http://npgsql.projects.postgresql.org/). You can get the assemblies from their site or use Nuget with the command "Install-Package Npgsql". If you were already using Postgres like I was you'll have to add a bit more to the web.config/app.config in order to use PetaPoco.

``` xml
<system.data>
	<DbProviderFactories>
	  <add name="Npgsql Data Provider" invariant="Npgsql" support="FF" description=".Net Framework Data Provider for Postgresql Server"
		   type="Npgsql.NpgsqlFactory, Npgsql, Version=2.0.11.0, Culture=neutral, PublicKeyToken=5d8b90d52f46fda7" />
	</DbProviderFactories>
</system.data>
<connectionStrings>
	<add name="Postgres" connectionString="Server=localhost;Port=5432;User Id=testuser;Password=secret;Database=testdb;" providerName="Npgsql"/>
</connectionStrings>
```

Notice you have to add the DbProviderFactories to the system.data section (you can also do this in the machine.config though you may run into issues when you deploy) and be sure to specify that as the providerName in the connection string.

Next install PetaPoco which you can get from Nuget with "Install-Package PetaPoco" which installs it in your project with some handy T4 templates for generating pocos from your database schema but all you really need is the single PetaPoco.cs file somewhere in your project and you should be ready to go. [Check out their site](http://www.toptensoftware.com/petapoco/) for some great examples to get coding.

Its also worth noting though that if you're targeting .Net 3.5 you'll need to define **PETAPOCO_NO_DYNAMIC **as a conditional compile symbol in your project settings or it won't compile since PetaPoco now also supports dynamics.
