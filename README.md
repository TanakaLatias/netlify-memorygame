（２０２４．７．３０）
デプロイ成功
https://netlify-memorygame.netlify.app/

（２０２４．７．２８）
Netlify へのデプロイにともないいくつか変更を加えました。

（２０２４．２．２３）
以下の Youtube ハンズオン教材を真似して書いたメモリーゲームです。
以下のように一部内容を変更しています。  
・画像を２種類追加した。  
・npm run build コマンドを実行すると useEffect の依存関係のエラーが出たため第二引数を追加した。  
・他に build の際に useCallback でラップしなければならない関数があったのでそのようにした。  
・そうするとゲームが上手く動作しなくなったため（同じカードを２回クリックするとマッチする他の場所のカードがオープンしてしまう）、handleChoice に if 文を追加しオープン済みのカードはクリックされても何も起こらないようにした。  

［Build a Memory Game with React］https://www.youtube.com/watch?v=ZCKohZwGZMw&list=PL4cUxeGkcC9iQ7g2eoNXHCJBBBz40S_Lm
