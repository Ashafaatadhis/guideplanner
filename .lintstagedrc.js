module.exports = {
    "src/**/!(*test).ts?(x)": [() => "tsc --noEmit", () => "next lint --fix"],
    "*": filenames => `prettier --write ${filenames.join(" ")} --ignore-unknown`
};
