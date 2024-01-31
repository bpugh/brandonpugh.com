---
author: 'Brandon Pugh'
comments: true
date: 2022-03-05
lastmod: 2024-01-20
image: ''
menu: ''
share: true
tags:
  - herramientas
  - git
title: Configuraciones de Git que Siempre Recomiendo
---

Si alguna vez has trabajado en un proyecto conmigo, probablemente te haya recomendado al menos una de estas configuraciones en git.

* `git config --global pull.rebase true` - le dice a git que siempre haga pull con rebase en lugar de merge (equivalente a `pull --rebase`).
* `git config --global fetch.prune true` - le dice a git que automáticamente ejecute `git remote prune` después de un `fetch`. Esto limpiará cualquier objeto local que ya no exista en el remoto, como ramas de seguimiento que han sido eliminadas del servidor remoto.
* `git config --global rebase.autoStash true` - le dice a git que automáticamente haga stash cuando realices un pull y luego intente deshacerlo una vez que el rebase esté completo. Esto es casi siempre mi flujo de trabajo, así que es bueno que git lo haga por mí.
* `git config --global rebase.autosquash true` - le dice a git que incluya automáticamente el parámetro `--autosquash` cuando hagas un `git rebase --interactive`. Aquí puedes [leer más sobre autosquash][autosquash] de commits si no estás familiarizado con él. Lo uso todo el tiempo para corregir o reescribir commits anteriores.

## Agregadas recientemente

Si no has actualizado git en un par de años, recomiendo hacerlo, ya que vale la pena solo por estas nuevas opciones de configuración.

* `git config --global push.useForceIfIncludes true` (2.30.0) - Esta configuración hace que `push --force-with-lease` sea aún más seguro. [Consulta la documentación][pushdocs] para más información.
* `git config --global push.autoSetupRemote true` (2.37.0) - Git configurará automáticamente un seguimiento upstream cuando ejecutes `git push` desde una nueva rama.
* `git config --global rebase.updateRefs true` (2.38.0) - la opción `--update-refs` [hace que trabajar con ramas apiladas sea más fácil][updateref]

## Preferencia personal

Puedes encontrar estas útiles dependiendo de tu flujo de trabajo personal.

* `git config --global commit.verbose true` - Git incluirá la diferencia de los cambios en la parte inferior de la plantilla del mensaje de commit. Me gusta esto porque tu editor de texto puede autocompletar nombres de variables o funciones que quieras incluir en el mensaje de commit.
* `git config --global rerere.enabled true` - Significa Reutilizar Resolución Registrada, y le dice a Git que recuerde cómo resolviste un conflicto y lo reaplique automáticamente si lo ve de nuevo.

[updateref]: https://andrewlock.net/working-with-stacked-branches-in-git-is-easier-with-update-refs/
[autosquash]: https://thoughtbot.com/blog/autosquashing-git-commits
[pushdocs]: (https://git-scm.com/docs/git-push#Documentation/git-push.txt---no-force-if-includes)