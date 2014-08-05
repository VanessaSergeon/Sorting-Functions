describe("Bubble Sort", function() {
    it("handles an empty array", function() {
        expect(bubbleSort([])).toEqual([]);
    });

    it("handles a single item", function() {
        expect(bubbleSort([2])).toEqual([2]);
    });

    it("handles a two items", function() {
        expect(bubbleSort([3,2])).toEqual([2,3]);
    });

    it("handles multiple items", function() {
        expect(bubbleSort([3,2,9,5,10,4])).toEqual([2,3,4,5,9,10]);
    });
});