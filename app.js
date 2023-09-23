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

  /*ToDoリストの各アイテムにチェックボックスを付けて、
  ユーザーがチェックボックスの状態を変更すると、
  テキストのスタイルを変更して表示を更新する。
  */
  $(document).on("change", "input[type=checkbox]", function () {  //チェックボックスの状態が変更されたときに実行されることを定義
    if ($(this).is(":checked")) {  //チェックボックスがチェックされている場合...
      $(this).parent().css("text-decoration", "line-through");  //テキストに打ち消し線を追加
      $(this).parent().css("color", "#ccc");  //テキストの色を灰色に変更
    } else {  //チェックボックスがチェックされていない場合...
      $(this).parent().css("text-decoration", "none");  //テキストを通常に戻す
      $(this).parent().css("color", "#000"); //テキストの色を黒に戻す
    }
  });
  