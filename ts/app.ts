



function map(arr?: any[], callback?: (element?: any, i?: number, array?: any[]) => void) {
  if (!arr || !callback) return
  if (arr && !callback) return arr

  const output: any[] = []

  for (let i: number = 0; i < arr.length; i++) {
    const element: any = arr[i];
    const mappedElement: any = callback(element, i, arr);
    if (mappedElement === undefined) {
      output.push(element)
      continue
    }
    output.push(mappedElement)
  }

  return output
}

function inc(item?: any) {
  return item + 1
}
// console.log(map([1, 2, 3,], inc));

interface testObject {
  name?: string,

}

const testType: testObject = {
  name: '1'
}

console.log(testType);
