describe('add 関数のテスト', function() {

  //Suite（＝テストクラス）
  describe('add 関数のテスト（成功）', function() {

    //@BeforeEach
    beforeEach(function() {
      //doSomething
    });

    //Spec
    //expect( [actual] ).toBe( [expected] );

    //Spec（＝テストメソッド1）
    it('1 + 1 は 2', function() {
      expect(add(1, 1)).toBe(2);
    });

    //Spec（＝テストメソッド2）
    it('1 + 4 は 5', function() {
      expect(add(1, 4)).toBe(5);
    });

    //@Disabled
    xit('10 + 2 は 5', function() {
      expect(add(10, 2)).toBe(5); //失敗
    });

    it('10 + 2 は 5 ではない', function() {
      expect(add(10, 2)).not.toBe(5); //成功
    });

  });

  describe('add 関数のテスト（失敗）', function() {
    it('10 + 2 は 5', function() {
      expect(add(10, 2)).toBe(5);
    });
  });

  describe('オブジェクトのテスト', function() {

    let UserA = {
      name: "UserNameA",
      age: 10,
    };

    let User1 = {
      name: "UserNameA",
      age: 10,
    };

    let UserB = {
      name: "UserNameB",
      age: 10,
    };

    let NullUser = null;

    it('UserAとUser1は同一人物（失敗）', function() {
      expect(UserA).toBe(User1); //等値判定→失敗
    });

    it('UserAとUser1は同一人物（成功）', function() {
      expect(UserA).toEqual(User1); //等価判定→成功
    });

    it('UserAとUserBは同一人物ではない', function() {
      expect(UserA).not.toEqual(UserB);
    });

    it('nullではない', function() {
      expect(UserA).not.toBeNull();
    });

    it('nullである', function() {
      expect(NullUser).toBeNull();
    });
    
    it('例外のテスト', function() {
      //「throwException()」ではない。()不要。
      expect(throwException).toThrow('SampleException');
    });

    it('型判定', function() {
      function SampleClass() {}
      let sampleClass = new SampleClass();
      expect(sampleClass).toEqual(jasmine.any(SampleClass));
    });

  });

  describe("Suite(spyを使ったテスト)", function() {

    it("spec(spyメソッドのテスト)", function() {

      //SetUp - スパイオブジェクト準備
      let spyObject = {
        spyMethod: function() {
          console.log("SpyMethodDone");
        }
      }
      spyOn(spyObject, "spyMethod");

      //Exercise - テスト実行
      spyObject.spyMethod();

      //Verify - 検証
      expect(spyObject.spyMethod).toHaveBeenCalled();

    });

    it("Spec：spy=メソッドが実行されたかテスト", function() {
      //SetUp - 対象オブジェクト準備
      let userA = new User("UserA", 20);
      //SetUp - 追跡対象オブジェクトとメソッドを設定
      spyOn(userA, "getName");
      //Exercise - テスト実行
      userA.getName();
      //Verify - 対象メソッドが実行されたか検証
      expect(userA.getName).toHaveBeenCalled();
    });

    // spyON(obj, "method").returnValue(throwError(new Error()));

  });

});