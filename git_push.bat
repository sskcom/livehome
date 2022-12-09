@git init

@git config --global user.name "sskcom"
@git config --global user.email "sskcomjp08131@gmail.com"

@git add .

@git status

@SET /P ANSWER="実行します。よろしいですか (Y/N)？"

@if /i {%ANSWER%}=={y} (goto :yes)
@if /i {%ANSWER%}=={yes} (goto :yes)

@EXIT


@:yes

@set /p star="コメントを入力してください"

@git commit -m %star%

@git branch -M main

@set /p star="リポジトリ名を入力してください"

@git remote add origin %star%


@git push -u origin main
@set /p star="本当にokですか"