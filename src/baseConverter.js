import Stack from './Stack';

export default function baseConverter(number, base) {
    let stack = new Stack();
    let result = '';
    let digits = '0123456789ABCDEF';

    if (base < 1 || base > 16) {
        throw 'Parameter of base should between 2 and 16';
    }

    while (number > 0) {
        let remain = Math.floor(number % base);
        stack.push(remain);
        number = Math.floor(number / base);
    }

    while (!stack.isEmpty()) {
        result += digits[stack.pop()];
    }

    return result;
}
