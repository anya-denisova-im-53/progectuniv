function composeRight(...fns) {
    const listeners = [];

    function composed(value) {
        let result = value;

        try {
            for (let i = fns.length - 1; i >= 0; i--) {
                const fn = fns[i];

                if (typeof fn !== 'function') {
                    throw new Error("composeRight: all arguments must be functions");
                }

                result = fn(result);
            }

            return result;
        } catch (err) {
            listeners.forEach(handler => handler(err));
            return undefined; 
        }
    }

    composed.on = function(event, handler) {
        if (event === 'error' && typeof handler === 'function') {
            listeners.push(handler);
        }
    };

    return composed;
}
