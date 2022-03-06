function stringText(min, max, error, text) {
    const size = (text || "").trim().length;

    if (size < min || size > max) {
        throw error;
    }
}

const p1 = { name: "John", price: 14.99, desc: 0.25 };
stringText(4, 255, "Invalid Name", p1.name);

function stringText2(min) {
    return function (max) {
        return function (error) {
            return function (text) {
                const size = (text || "").trim().length;
                if (size < min || size > max) {
                    throw error;
                }
            };
        };
    };
}

function validate(fn) {
    return function (value) {
        try {
            fn(value);
        } catch (e) {
            return { error: e };
        }
    };
}

const defaultSize = stringText2(4)(255);
const forceValidName = defaultSize("Invalid Name");
const validateProductName = validate(forceValidName);
const p2 = { name: "A", price: 14.99, desc: 0.25 };
console.log(validateProductName(p2.name));
