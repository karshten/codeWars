// types for promise

type Initializer<T> = 
(
  resolve: (value: T) => void,
  reject: (reason?: any) => void
) => void;

type ThenCallback<T> = (value: T) => void;

type CatchCallback = (reason?: any) => void;

type AnyFunction = (...args: any[]) => void;

// My Promise class

class MyPromise<T> {
  thenCallback: AnyFunction | null = null;
  catchCallBack: AnyFunction | null = null;

  constructor (initializer: Initializer<T>) {
    initializer(this.resolve, this.reject);
  }

  then = (thenCallback: ThenCallback<T>) => {
    this.thenCallback = thenCallback;

    return this;
  }

  catch = (catchCallback: CatchCallback) => {
    this.catchCallBack = catchCallback;


    return this;
  }

  private resolve = (value: T) => {
    this.thenCallback?.(value);
  }

  private reject = (reason?: any) => {
    this.catchCallBack?.(reason)
  }
}

const promise = new MyPromise((resolve, _reject) => {
  setTimeout(() => {
    resolve(5);
  });
})
  .then((res) => {
    console.log('firstThen');
    return new Promise ((resolve) => {
      setTimeout(() => resolve(res), 1000);
    })
  })
  .then((res) => console.log(res, 'secondThen'));