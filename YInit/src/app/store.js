/**
 * Created by nick on 2017/12/4.
 */
import { applyMiddleware, createStore,compose } from "redux";
import { fromJS } from "immutable";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import createReducer from "./reducer";
import { middleware } from "src/route/AppNavigator";
const sagaMiddleware = createSagaMiddleware();

/**
 * Logs all actions and states after they are dispatched.
 */
const logger = store => next => action => {
    if (console.group) {
        console.group(action.type);

    }
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    if (console.groupEnd) {
        console.groupEnd(action.type);
    }

    return result;
};

/**
 * Sends crash reports as state is updated and listeners are notified.
 */
// const crashReporter = store => next => action => {
//     try {
//         return next(action)
//     } catch (err) {
//         console.error('Caught an exception!', err)
//         Raven.captureException(err, {
//             extra: {
//                 action,
//                 state: store.getState()
//             }
//         })
//         throw err
//     }
// }

/**
 * Schedules actions with { meta: { delay: N } } to be delayed by N milliseconds.
 * Makes `dispatch` return a function to cancel the timeout in this case.
 */
const timeoutScheduler = store => next => action => {
    if (!action.meta || !action.meta.delay) {
        return next(action);
    }

    let timeoutId = setTimeout(
        () => next(action),
        action.meta.delay
    );

    return function cancel() {
        clearTimeout(timeoutId);
    };
};

/**
 * Schedules actions with { meta: { raf: true } } to be dispatched inside a rAF loop
 * frame.  Makes `dispatch` return a function to remove the action from the queue in
 * this case.
 */
const rafScheduler = store => next => {
    let queuedActions = [];
    let frame = null;

    function loop() {
        frame = null;
        try {
            if (queuedActions.length) {
                next(queuedActions.shift());
            }
        } finally {
            maybeRaf();
        }
    }

    function maybeRaf() {
        if (queuedActions.length && !frame) {
            frame = requestAnimationFrame(loop);
        }
    }

    return action => {
        if (!action.meta || !action.meta.raf) {
            return next(action);
        }

        queuedActions.push(action);
        maybeRaf();

        return function cancel() {
            queuedActions = queuedActions.filter(a => a !== action);
        };
    };
};

/**
 * Lets you dispatch promises in addition to actions.
 * If the promise is resolved, its result will be dispatched as an action.
 * The promise is returned from `dispatch` so the caller may handle rejection.
 */
const vanillaPromise = store => next => action => {
    if (typeof action.then !== 'function') {
        return next(action);
    }

    return Promise.resolve(action).then(store.dispatch);
};

/**
 * Lets you dispatch special actions with a { promise } field.
 *
 * This middleware will turn them into a single action at the beginning,
 * and a single success (or failure) action when the `promise` resolves.
 *
 * For convenience, `dispatch` will return the promise so the caller can wait.
 */
const readyStatePromise = store => next => action => {
    if (!action.promise) {
        return next(action);
    }

    function makeAction(ready, data) {
        let newAction = Object.assign({}, action, { ready }, data);
        delete newAction.promise;
        return newAction;
    }

    next(makeAction(false));
    return action.promise.then(
        result => next(makeAction(true, { result })),
        error => next(makeAction(true, { error }))
    );
};

/**
 * Lets you dispatch a function instead of an action.
 * This function will receive `dispatch` and `getState` as arguments.
 *
 * Useful for early exits (conditions over `getState()`), as well
 * as for async control flow (it can `dispatch()` something else).
 *
 * `dispatch` will return the return value of the dispatched function.
 */
    // const thunk = store => next => action =>
    //     typeof action === 'function'
    //         ? action(store.dispatch, store.getState)
    //         : next(action);

    // You can use all of them! (It doesn't mean you should.)
let mDevelopmentUsefulMiddlewareOnly = {};

if (process.env.NODE_ENV === `development`) {
    mDevelopmentUsefulMiddlewareOnly.logger = logger;
} else {
    //todo this line is error,can cause release app error!!!
    mDevelopmentUsefulMiddlewareOnly.logger = () => {
    };

}

console.log(process.env.NODE_ENV);


export default function getStore(initialState = {}) {

    const middlewares = [];
    middlewares.push(sagaMiddleware);
    middlewares.push(middleware);
    middlewares.push(timeoutScheduler);
    middlewares.push(thunk);
    if (process.env.NODE_ENV === 'development') {
        middlewares.push(logger);
    }

    const enhancers = [applyMiddleware(...middlewares)];

    // If Redux DevTools Extension is installed use it, otherwise use Redux compose
    /* eslint-disable no-underscore-dangle, indent */
    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // TODO: Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
            // Prevent recomputing reducers for `replaceReducer`
            shouldHotReload: false,
        })
            : compose;


    const store = createStore(
        createReducer(),
        fromJS(initialState),
        composeEnhancers(...enhancers),
    );

    // Extensions
    store.runSaga = sagaMiddleware.run;
    store.injectedReducers = {}; // Reducer registry
    store.injectedSagas = {}; // Saga registry

    // Make reducers hot reloadable, see http://mxs.is/googmo
    /* istanbul ignore next */
    if (module.hot) {
        module.hot.accept('./reducer', () => {
            store.replaceReducer(createReducer(store.injectedReducers));
        });
    }


    return store;
};

