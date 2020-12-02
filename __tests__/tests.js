const splitArrayEvenly = require('../index');

describe("Test splitArrayEvenly method", () => {

    const sourceArray = [1,2,3,4,5,6,7,8,9];

    test("Test divide into 0 parts", () => {
        let response = splitArrayEvenly(sourceArray, 0);
        expect(response.length).toEqual(9);
        expect(response).toEqual(sourceArray);
    });

    test("Test divide into a number which splits evenly", () => {
        let response = splitArrayEvenly(sourceArray, 3);
        const expectedResponse = [[1,2,3],[4,5,6],[7,8,9]];
        expect(response).toEqual(expectedResponse);
    });

    test("Test divide into a number which has uneven remainder", () => {
        let response = splitArrayEvenly(sourceArray, 4);
        const expectedResponse = [[1,2],[3,4],[5,6],[7,8,9]];
        expect(response).toEqual(expectedResponse);
    });

    test("Test divide into a number larger than array", () => {
        let response = splitArrayEvenly(sourceArray, 10);
        expect(response).toEqual(sourceArray);
    });

    test("Test divide null array returns empty array", () => {
        let response = splitArrayEvenly(null, 10);
        const expectedResponse = [];
        expect(response).toEqual(expectedResponse);
    });

    test("Test divide by negative number", () => {
        let response = splitArrayEvenly(sourceArray, -3);
        expect(response.length).toEqual(9);
        expect(response).toEqual(sourceArray);
    });
});