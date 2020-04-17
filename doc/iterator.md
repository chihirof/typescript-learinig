# Iterator /ts/iterator.ts

## イテレーターとは

`next()` を持つことによってイテレータプロトコルを実装するオブジェクト。  
`next()` は次の２つのプロパティを持つオブジェクトを返す。  

- `value`
  - シーケンスの次の値
- `done`
  - 最後の値まで消費したら `true` となる

`next()` を繰り返し呼び出すことによって明示的に反復することができる。  
終了値が返された後、さらに next() を呼び出しても、単に `{done: true}` を返し続ける。  

## 疑問

- iteratorの最後のvalueは何を返すべきなのか？例をみると呼び出された回数？

## 反復可能(iterable)プロトコル

反復可能であるために、@@iterator メソッドを実装する必要がある。  
つまり、オブジェクトが `Symbol.iterator` 定数にて利用できる@@iterator キーのプロパティを持つ必要がある。  
プロパティ `Symbol.iterator` の値には、反復子プロトコルに準拠するオブジェクトを返す引数なしの関数が与えられる。

## 反復子プロトコル

next() メソッドを実装していれば(=イテレーター)、オブジェクトは反復子になる。

## ビルトイン反復可能オブジェクト

String、Array、TypedArray、Map、Set はすべてビルトイン反復可能オブジェクトである。  
これらのオブジェクトはすべて、そのプロトタイプオブジェクトに `Symbol.iterator` メソッドを備えている。

## 反復可能オブジェクトに関する構文

### for-of ループ

反復可能オブジェクトに対して、反復的な処理をするループを作成する。  

### スプレッド構文

反復可能オブジェクトを展開することができる。

### 分割代入



## 参考資料

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators
- https://qiita.com/kura07/items/cf168a7ea20e8c2554c6
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Statements/for...of

