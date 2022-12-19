export type Listener<T> = (state: Readonly<T>) => void;

export type SubscribeFunc<T> = (listener: Listener<T>) => void; 

export default function subsriber<T>(): [SubscribeFunc<T>, Listener<T>[]] {
  const listeners: Listener<T>[] = [];

  return [
    (listener: Listener<T>) => {
      if (listeners.includes(listener)) {
        listeners.splice(listeners.indexOf(listener), 1);
        return;
      }

      listeners.push(listener)
    }, 
    listeners
  ]
}