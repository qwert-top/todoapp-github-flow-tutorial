/*ユーザーがテキストを入力し、
「addTodo」ボタンをクリックすると、
ToDoリストに新しいアイテムが追加され、
入力フィールドがクリアされる。
*/

$("#addTodo").click(function () {  //クリックされたときに実行することを定義
    const inputTodo = $("input").val();  //テキストボックスからテキストを取得し変数に格納
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");  //リストに追加
  
    $("input").val("");  //リストに追加したら、テキストボックスはクリア
  });
  