// function map(arr?: any[], callback?: (element?: any, i?: number, array?: any[]) => void) {
//   if (!arr || !callback) return
//   if (arr && !callback) return arr

//   const output: any[] = []

//   for (let i: number = 0; i < arr.length; i++) {
//     const element: any = arr[i];
//     const mappedElement: any = callback(element, i, arr);
//     if (mappedElement === undefined) {
//       output.push(element)
//       continue
//     }
//     output.push(mappedElement)
//   }

//   return output
// }

// function inc(item?: any) {
//   return item + 1
// }
// // console.log(map([1, 2, 3,], inc));

// interface testObject {
//   name?: string,

// }

// const testType: testObject = {
//   name: '1'
// }

// console.log(testType);


interface IComment {
  id: string;
  body: string;
  userId: string;
  productId: string;
}

interface IUser {
  id: string;
  name: string;
  age: number
}


interface IProduct {
  id: string;
  title: string;
}

interface ICommentToShow {
  id: string;
  body: string;
  user: IUser
}

interface ProductToShow {
  id: string;
  title: string;
  comments: ICommentToShow[];
}


function mergeArrays ({products, comments, users}: {
  products: IProduct[];
  comments: IComment[];
  users: IUser[];
}): ProductToShow[] {
    return [];
}

console.log(
  mergeArrays({
    comments: [
      {
        id: '1',
        body: 'body',
        userId: 'user',
        productId: 'product',

      }
    ],
    products: [
      {
        id: 'product',
        title: 'test'
      }
    ],
    users: [
      {
        id: 'user',
        age: 100,
        name: 'Jhon Doe'
      }
    ]
  })[0].comments
);