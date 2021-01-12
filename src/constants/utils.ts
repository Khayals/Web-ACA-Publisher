export const formatNumber = (num: number) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
};

export const capitalizeFirstLetter = (str: string) => {
    return str.replace(/\w\S*/g,
        (txt: string) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
}
