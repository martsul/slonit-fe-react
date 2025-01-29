# GIT

## Базовые команды и флаги

- `git init` - создает пустой git репозиторий;
- `git status` - выводит информацию о директории со стороны git;
- `git show` - показывает информацию о commit;

### add

`git add <path>` - добавляет файл в index;

- `git add .` - добавляет в index все изменения из каталога;
- `git add -f <path>` - добавляет файл в index _игнорируя .gitignore_;
- `git add -p <path>` - позволяет пройтись по каждому измененному фрагменту в файле;

### commit

`git commit` - добавляет файлы из index в repository;

- `git commit -m <message>` - позволяет указать сообщение без вызова редактора;
- `git commit -a/git commit <path>` - автоматически добавляет файлы в index(если ранее они уже были добавлены в index) и repository;

## Удаление и переименование файлов

- `git rm <path>` - удаляет файл из WD и добавляет в index;
    - `git rm -r <path>` - для директорий;
    - `git rm --cached <path>` - удаляет но не добавляет в index;
    - `git rm -f <path>` - игнорирует предупреждения;
- `git mv <old name> <new name>` - переименовывает файл и добавляет его в index