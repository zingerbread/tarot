import unittest
import selfmade

class TestJunban(unittest.TestCase):
    #リストの合計値で判断
    #Todo:自分で計算しなくてもいいようになど複雑なこともできるようにする
    #Fixme:被りがあった場合見落とす
    def test_junban(self):
        value1 = 3
        value2 = 0
        value3 = 2
        expected = 3

        check_list = selfmade.junban(value1, value2, value3)
        actual = 0
        for check in check_list:
            actual += check
        self.assertEqual(expected, actual)
    
    #要素数,要素の値が指定した範囲か判断
    def test_pozijun(self):
        value1 = 22
        value2 = 0
        value3 = 1
        expected = 0

        check_list = selfmade.posijun(value1, value2, value3)
        actual = 0
        if len(check_list) != value1:
            actual += 1
        
        for check in check_list:
            if not value2 <= check <= value3:
                actual += 1
        
        self.assertEqual(expected, actual)

if __name__ == "__main__":
    unittest.main()