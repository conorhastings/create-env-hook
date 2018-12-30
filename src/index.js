export default function createEnvHook({ env, hook }) {
    if (process.env.NODE_ENV === env) {
        return function() {
            hook(...arguments);
        }
    }
    return () => {};
}