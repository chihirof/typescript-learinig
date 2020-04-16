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

## 反復処理(iterable)プロトコル




## 参考資料

- https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Iterators_and_Generators
- https://qiita.com/kura07/items/cf168a7ea20e8c2554c6
- https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol
