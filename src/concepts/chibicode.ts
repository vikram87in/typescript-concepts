// reference: https://ts.chibicode.com/todo/

type Place = 'home' | 'work' | {custom: string}

type Todo = {
  id: number
  text: string
  done: boolean
  place?: Place
}

type ReadonlyTodo = Readonly<Todo>


const foo = {
  id: 1,
  text: "Learn TypeScript",
  done: false,
  extraProperty: "this is allowed"
}

const bar: Todo = foo;

function toggleTodo(todo: ReadonlyTodo) : ReadonlyTodo{
  let toggledTodo = {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
  console.log('>> toggled todo:', toggledTodo);
  return toggledTodo;
}

// function toggleTodo(todo: ReadonlyTodo): ReadonlyTodo {
//   // Little Duckling’s refactoring
//   todo.done = !todo.done
//   return todo
// }

function getPlace(place: Place): string {
  if (place == 'home') {
    return 'HOME';
  } else if (place == 'work') {
    return 'WORK';
  } else {
    return place.custom;
  }
}

const obj: Todo = toggleTodo(bar);
console.log('>> obj: ', obj);

// type CompletedTodo = {
//   id: number
//   text: string
//   done: true;
// }

type A = {
  id: number;
  text: 'hi';
  done: boolean;
  option: Object;
}

type B = {
  id: 12;
  text: string;
  option: number

}

type C = B & A; // Intersection type, C will have id: 12 and text: 'hi'

let obj1: C = {
  id: 12,
  text: 'hi',
  done: true, 
  option: 12
}

type CompletedTodo = Todo & {
  done: true;
}

type ReadonlyCompletedTodo = Readonly<CompletedTodo>

function completeAllTodos(todos: readonly ReadonlyTodo[]): ReadonlyCompletedTodo[] {

  return todos.map(todo => {
    return {
      ...todo,
      done: true
    }
  });
}


console.log(
  completeAllTodos([
    { id: 1, text: '…', done: false },
    { id: 2, text: '…', done: true }
  ])
)
// One way to make this file a separate and independent module is to add an export or import statement.
// For example, you can add the following dummy export at the end of the file:
export { }

