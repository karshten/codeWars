// async function promAll (arrOfProms){
//     const res = Array(arrOfProms.length);
//     let count = 0;

//     return await new Promise(resolve => {
//       for (let i = 0; i < arrOfProms.length; i ++) {
//         arrOfProms[i].then(r => {
//           res[i] = r + 1;
//           count ++; 

//           if (count === arrOfProms.length) resolve(res);
//         }).catch(err => r[i] = err)
//       }
//     })
//   }

// async function t (promises) {
//   return Promise.all(promises);
// }

// function run () {
//   setTimeout(() => console.log(2)) 

//   queueMicrotask(() => {
//     console.log(7);
//   })

//   Promise.resolve(3).then(console.log);

//   setTimeout(() => {
//     new Promise((resolve) => {
//       resolve(5); 
//       console.log(4);
//     }).then(console.log)
//   }) 

//   setTimeout(() => console.log(6)) 

//   const promise1 = new Promise((res) => {
//     console.log(10)
//     // setTimeout(() => {
//       res(1) 
//     // })
//   });

//   const promise2 = new Promise((res) => {
//     // setTimeout(() => {
//       res(2); 
//     // })
//   });

//   const promises = [promise1, promise2];

//   // try to underestand how async for promAll and t works

//   t(promises).then(console.log); 
//   promAll(promises).then(console.log); 
// }

// run();

