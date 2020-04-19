# Generator /ts/generator.ts

## generatorとは

ジェネレーターは処理を抜け出すことも後から復帰することもできる関数。  
ジェネレーターのコンテキスト (変数の値)は復帰しても保存される。  

- `function*` 構文を使用する
- 最初に呼び出されると、ジェネレーター関数はコードを実行せず、ジェネレーターと呼ばれるある種のイテレーターを返す  
- `next` メソッドを呼び出すことによって値が消費される
- `next` が呼び出されるとジェネレーター関数は `yield` キーワードを検出するまで実行




## 参考

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/function* 
- https://qiita.com/kura07/items/d1a57ea64ef5c3de8528#21-%E3%82%B8%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E9%96%A2%E6%95%B0-%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9%E4%BD%BF%E3%81%84%E6%96%B9
