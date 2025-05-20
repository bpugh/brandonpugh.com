---
author: 'Brandon Pugh'
comments: true
date: 2024-08-31
image: ''
menu: ''
tags:
  - git
title: Tips para crear commits de merge
---
<!-- cSpell:disable -->

He revisado bastantes pull requests en los últimos años y he notado algunas prácticas menos que ideales cuando se trata de crear commits de merge, así que pensé en enumerar algunas cosas que puedes hacer para facilitarle la vida a alguien que revisa tu código.

## Haz que el mensaje del commit sea lo más útil posible

Se ha escrito mucho sobre [cómo escribir buenos mensajes de commit](https://cbea.ms/git-commit/), pero rara vez veo que se aplique este consejo a los commits de merge. Puede que no sean el tipo de commit más emocionante, pero aún así son muy importantes.

### Al fusionar PRs

Los commits de merge que fusionan un pull request son más sencillos porque, hoy en día, generalmente son creados por el servicio de hosting de git, por lo que sabes que solo contienen todos los cambios de esa rama.

Pero aún puedes asegurarte de que transmitan la información más útil. Me gusta el mensaje predeterminado de Azure DevOps:

```txt
Merged PR 123: <Título del PR>

<Descripción del PR>
```

Puedes obtener un predeterminado similar en GitHub configurando la configuración de commit de merge predeterminada en la configuración del repositorio.

### Para otros commits de merge

Ahora, ten en cuenta que la necesidad de otros commits de merge se puede mitigar manteniendo las ramas de características pequeñas y de corta duración, pero esa no es la realidad para muchos equipos.

En su mayor parte, recomiendo ceñirse al mensaje predeterminado que git genera cuando ejecutas `git commit` para completar un merge:

```md
Merge branch 'main' into feature-branch
# Por favor, ingresa un mensaje de commit para explicar por qué este merge es necesario,
# especialmente si fusiona una actualización upstream en una rama temática.
```

Si te das cuenta, incluye un comentario que recomiende explicar por qué el merge fue necesario. Esto podría ser algo como "Fusionando flujo de autenticación actualizado" o "Fusionando cambios en `sharedService` para evitar conflictos". Esto también implica que deberías tener una razón para el merge, con lo cual estoy de acuerdo, porque de lo contrario estarías añadiendo ruido innecesario al registro de git.

Al mínimo, haz claro que es un commit de merge.
No pongas algo como `actualizar migraciones de la base de datos` — si tuviste que hacer eso como resultado del merge, menciónalo en el cuerpo del mensaje (aunque, como explicaré en un momento, debería ir en un commit subsecuente).
Si no, dependiendo de cómo estés viendo el git log, puede que no sea obvio que es un commit de merge.

### Lista los conflictos en el mensaje del commit

Si hubo conflictos durante el merge, entonces git listará los archivos en el mensaje del commit, pero están comentados por defecto:

```md
Merge branch 'main' into feature-branch

# Conflictos:
#	package.json
#	package-lock.json
```

Puedes eliminar el `#` de las líneas para descomentarlas e incluirlas en el mensaje del commit.

Como revisor, aprecio esto porque es fácil cometer errores al resolver conflictos, así que si veo archivos listados, puedo examinarlos más de cerca.

Puedes hacerlo aún más conveniente usando un hook [`prepare-commit-msg`](https://git-scm.com/docs/githooks#_prepare_commit_msg) para descomentarlos automáticamente:

```bash
COMMIT_MSG_FILE=$1
COMMIT_SOURCE=$2

if [ "$COMMIT_SOURCE" = "merge" ]; then
    sed -i.bak '/^# Conflicts:/,/^#$/ s/..//' "$COMMIT_MSG_FILE"
fi
```

#### Bonus: usa `git show --remerge-diff` para ver cómo se resolvieron

[En Git 2.36](https://github.blog/2022-04-18-highlights-from-git-2-36/#review-merge-conflict-resolution-with-remerge-diff), se añadió la opción `--remerge-diff` a `git show`. Esto facilita ver cómo se resolvieron los conflictos en un commit de merge.

## Evita merges "malévolos"

Un merge "malévolo" o "evil merge", según lo definido por la [documentación de git](https://git-scm.com/docs/gitglossary.html#Documentation/gitglossary.txt-aiddefevilmergeaevilmerge) es:

> un merge que introduce cambios que no aparecen en ningún padre.

o como lo dice el propio Linus [aquí](https://www.mail-archive.com/git@vger.kernel.org/msg73938.html):

> un "merge malévolo" es algo que introduce cambios que no provienen de ningún lado y que no resolviendo un conflicto.

Un commit de merge probablemente está incorporando una gran cantidad de cambios no relacionados, por lo que puede ser difícil notar si añades tus propios cambios.
Prefiero hacer lo mínimo necesario para resolver cualquier conflicto textual.

Si hay problemas semánticos que necesitan ser resueltos (es decir, se renombró una vista de base de datos y mi código falla en tiempo de ejecución), entonces los resuelvo en un commit separado, lo que no solo facilita la revisión, sino que también hace que comandos como `git blame` sean más útiles.
