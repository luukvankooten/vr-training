import getState from '../getState';
import subscriber from '../subscriber';

describe('getStateTest', () => {
  test('get initial state', () => {
    const state = { count: 1 };

    const mock = jest.fn();

    const get = getState(state, mock);

    expect(get()).toEqual({ count: 1 });
  })


  test('mutate state', () => {
    const state = { count: 1 };

    const [subscribe, listeners] = subscriber();

    const get = getState(state, subscribe);

    expect(get()).toEqual({ count: 1 });

    listeners.forEach((l) => l({ count: 2 }));

    expect(get()).not.toEqual({ count: 1 })
    expect(get()).toEqual({ count: 2 })
  })
})