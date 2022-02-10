describe('add 関数のテスト', function() {
  
  it('1 + 1 は 2', function() {
    expect(add(1, 1)).toBe(2);
  });

  it('1 + 4 は 5', function() {
    expect(add(1, 4)).toBe(5);
  });

  it('10 + 2 は 5', function() {
    expect(add(10, 2)).toBe(5); //失敗
  });

});